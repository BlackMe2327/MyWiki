[TOC]

# 深入分析ConcurrentHashMap的扩容实现

## 什么情况会触发ConcurrentHashMap扩容

**第一种：**

如果新增节点之后，所在链表的元素个数达到了阈值 8，则会调用 treeifyBin 方法把链表转换成红
黑树，不过在结构转换之前，会对数组长度进行判断，实现如下：

```java
private final void treeifyBin(Node<K,V>[] tab, int index) {
    Node<K,V> b; int n, sc;
    if (tab != null) {
        //判断数组长度n是否小于阈值 MIN_TREEIFY_CAPACITY ，默认是64
        if ((n = tab.length) < MIN_TREEIFY_CAPACITY)
            tryPresize(n << 1);
        else if ((b = tabAt(tab, index)) != null && b.hash >= 0) {
            synchronized (b) {
                if (tabAt(tab, index) == b) {
                    TreeNode<K,V> hd = null, tl = null;
                    for (Node<K,V> e = b; e != null; e = e.next) {
                        TreeNode<K,V> p =
                            new TreeNode<K,V>(e.hash, e.key, e.val,
                                              null, null);
                        if ((p.prev = tl) == null)
                            hd = p;
                        else
                            tl.next = p;
                        tl = p;
                    }
                    setTabAt(tab, index, new TreeBin<K,V>(hd));
                }
            }
        }
    }
}
```

如果数组长度n小于阈值 MIN_TREEIFY_CAPACITY ，默认是64，则会调用 tryPresize 方法把数组长度扩大到原来的两倍，并触发 transfer 方法，重新调整节点的位置。

```java
private final void tryPresize(int size) {
    int c = (size >= (MAXIMUM_CAPACITY >>> 1)) ? MAXIMUM_CAPACITY :
    tableSizeFor(size + (size >>> 1) + 1);
    int sc;
    while ((sc = sizeCtl) >= 0) {
        Node<K,V>[] tab = table; int n;
        if (tab == null || (n = tab.length) == 0) {
            n = (sc > c) ? sc : c;
            if (U.compareAndSwapInt(this, SIZECTL, sc, -1)) {
                try {
                    if (table == tab) {
                        @SuppressWarnings("unchecked")
                        Node<K,V>[] nt = (Node<K,V>[])new Node<?,?>[n];
                        table = nt;
                        sc = n - (n >>> 2);
                    }
                } finally {
                    sizeCtl = sc;
                }
            }
        }
        else if (c <= sc || n >= MAXIMUM_CAPACITY)
            break;
        else if (tab == table) {
            int rs = resizeStamp(n);
            if (sc < 0) {
                Node<K,V>[] nt;
                if ((sc >>> RESIZE_STAMP_SHIFT) != rs || sc == rs + 1 ||
                    sc == rs + MAX_RESIZERS || (nt = nextTable) == null ||
                    transferIndex <= 0)
                    break;
                if (U.compareAndSwapInt(this, SIZECTL, sc, sc + 1))
                    transfer(tab, nt);
            }
            else if (U.compareAndSwapInt(this, SIZECTL, sc,
                                         (rs << RESIZE_STAMP_SHIFT) + 2))
                //调用transfer方法，重新调整节点的位置
                transfer(tab, null);
        }
    }
}
```

**第二种：**

新增节点之后，会调用 addCount 方法记录元素个数，并检查是否需要进行扩容，当数组元素个数达到阈值时，会触发 transfer 方法，重新调整节点的位置。

```java
private final void addCount(long x, int check) {
    CounterCell[] as; long b, s;
    if ((as = counterCells) != null ||
        !U.compareAndSwapLong(this, BASECOUNT, b = baseCount, s = b + x)) {
        CounterCell a; long v; int m;
        boolean uncontended = true;
        if (as == null || (m = as.length - 1) < 0 ||
            (a = as[ThreadLocalRandom.getProbe() & m]) == null ||
            !(uncontended =
              U.compareAndSwapLong(a, CELLVALUE, v = a.value, v + x))) {
            fullAddCount(x, uncontended);
            return;
        }
        if (check <= 1)
            return;
        s = sumCount();
    }
    if (check >= 0) {
        Node<K,V>[] tab, nt; int n, sc;
        while (s >= (long)(sc = sizeCtl) && (tab = table) != null &&
               (n = tab.length) < MAXIMUM_CAPACITY) {
            int rs = resizeStamp(n);
            if (sc < 0) {
                if ((sc >>> RESIZE_STAMP_SHIFT) != rs || sc == rs + 1 ||
                    sc == rs + MAX_RESIZERS || (nt = nextTable) == null ||
                    transferIndex <= 0)
                    break;
                if (U.compareAndSwapInt(this, SIZECTL, sc, sc + 1))
                    transfer(tab, nt);
            }
            else if (U.compareAndSwapInt(this, SIZECTL, sc,
                                         (rs << RESIZE_STAMP_SHIFT) + 2))
                //调用transfer方法，重新调整节点的位置
                transfer(tab, null);
            s = sumCount();
        }
    }
}
```

## transfer实现

transfer 方法实现了在并发的情况下，高效的从原始组数往新数组中移动元素，假设扩容之前节点的分布如下，这里区分蓝色节点和红色节点，是为了后续更好的分析：

![image-20220322195352533](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220322195352533.png?raw=true)

在上图中，第14个槽位插入新节点之后，链表元素个数已经达到了8，且数组长度为16，优先通过扩容来缓解链表过长的问题，实现如下：
1、根据当前数组长度n，新建一个两倍长度的数组 nextTable ；

```java
if (nextTab == null) {            // initiating
    try {
        @SuppressWarnings("unchecked")
        Node<K,V>[] nt = (Node<K,V>[])new Node<?,?>[n << 1];
        nextTab = nt;
    } catch (Throwable ex) {      // try to cope with OOME
        sizeCtl = Integer.MAX_VALUE;
        return;
    }
    nextTable = nextTab;
    transferIndex = n;
}
```

2、初始化 ForwardingNode 节点，其中保存了新数组 nextTable 的引用，在处理完每个槽位的节点之后当做占位节点，表示该槽位已经处理过了；

```java
int nextn = nextTab.length;
ForwardingNode<K,V> fwd = new ForwardingNode<K,V>(nextTab);
boolean advance = true;
boolean finishing = false; // to ensure sweep before committing nextTab
```

3、通过 for 自循环处理每个槽位中的链表元素，默认 advace 为真，通过CAS设置 transferIndex 属性值，并初始化 i 和 bound 值， i 指当前处理的槽位序号， bound 指需要处理的槽位边界，先处理槽位15的节点；

```java
for (int i = 0, bound = 0;;) {
    Node<K,V> f; int fh;
    while (advance) {
        int nextIndex, nextBound;
        if (--i >= bound || finishing)
            advance = false;
        else if ((nextIndex = transferIndex) <= 0) {
            i = -1;
            advance = false;
        }
        else if (U.compareAndSwapInt
                 (this, TRANSFERINDEX, nextIndex,
                  nextBound = (nextIndex > stride ?
                               nextIndex - stride : 0))) {
            bound = nextBound;
            i = nextIndex - 1;
            advance = false;
        }
    }
    ......
}
```

4、在当前假设条件下，槽位15中没有节点，则通过CAS插入在第二步中初始化的 ForwardingNode 节点，用于告诉其它线程该槽位已经处理过了；

```java
else if ((f = tabAt(tab, i)) == null)
     advance = casTabAt(tab, i, null, fwd);
```

5、如果槽位15已经被线程A处理了，那么线程B处理到这个节点时，取到该节点的hash值应该为MOVED ，值为 -1 ，则直接跳过，继续处理下一个槽位14的节点；

```java
else if ((fh = f.hash) == MOVED)
    advance = true; // already processed
```

6、处理槽位14的节点，是一个链表结构，先定义两个变量节点 ln 和 hn ，按我的理解应该是 lowNode和 highNode ，分别保存hash值的第X位为0和1的节点，具体实现如下：

```java
synchronized (f) {
    if (tabAt(tab, i) == f) {
        Node<K,V> ln, hn;
        if (fh >= 0) {
            int runBit = fh & n;
            Node<K,V> lastRun = f;
            for (Node<K,V> p = f.next; p != null; p = p.next) {
				//处理
                int b = p.hash & n;
                if (b != runBit) {
                    runBit = b;
                    lastRun = p;
                }
            }
            if (runBit == 0) {
                ln = lastRun;
                hn = null;
            }
            else {
                hn = lastRun;
                ln = null;
            }
            for (Node<K,V> p = f; p != lastRun; p = p.next) {
                int ph = p.hash; K pk = p.key; V pv = p.val;
                if ((ph & n) == 0)
                    ln = new Node<K,V>(ph, pk, pv, ln);
                else
                    hn = new Node<K,V>(ph, pk, pv, hn);
            }
            setTabAt(nextTab, i, ln);
            setTabAt(nextTab, i + n, hn);
            setTabAt(tab, i, fwd);
            advance = true;
        }
    }
```

使用 fn&n 可以快速把链表中的元素区分成两类，A类是hash值的第X位为0，B类是hash值的第X位为
1，并通过 lastRun 记录最后需要处理的节点，A类和B类节点可以分散到新数组的槽位14和30中，在原数组的槽位14中，蓝色节点第X为0，红色节点第X为1，把链表拉平显示如下：

![image-20220322200408419](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220322200408419.png?raw=true)

1、通过遍历链表，记录 runBit 和 lastRun ，分别为1和节点6，所以设置 hn 为节点6， ln 为null；
2、重新遍历链表，以 lastRun 节点为终止条件，根据第X位的值分别构造ln链表和hn链表：

ln链：和原来链表相比，顺序已经不一样了

![image-20220322200538417](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220322200538417.png?raw=true)

hn链：

![image-20220322200434886](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220322200434886.png?raw=true)

通过CAS把ln链表设置到新数组的i位置，hn链表设置到i+n的位置；

7、如果该槽位是红黑树结构，则构造树节点 lo 和 hi ，遍历红黑树中的节点，同样根据 hash&n 算法，把节点分为两类，分别插入到 lo 和 hi 为头的链表中，根据 lo 和 hi 链表中的元素个数分别生成 ln 和hn 节点，其中 ln 节点的生成逻辑如下：
（1）如果 lo 链表的元素个数小于等于 UNTREEIFY_THRESHOLD ，默认为6，则通过 untreeify 方法把树节点链表转化成普通节点链表；
（2）否则判断 hi 链表中的元素个数是否等于0：如果等于0，表示 lo 链表中包含了所有原始节点，则设置原始红黑树给 ln ，否则根据 lo 链表重新构造红黑树。

```java
else if (f instanceof TreeBin) {
    TreeBin<K,V> t = (TreeBin<K,V>)f;
    TreeNode<K,V> lo = null, loTail = null;
    TreeNode<K,V> hi = null, hiTail = null;
    int lc = 0, hc = 0;
    for (Node<K,V> e = t.first; e != null; e = e.next) {
        int h = e.hash;
        TreeNode<K,V> p = new TreeNode<K,V>
            (h, e.key, e.val, null, null);
        if ((h & n) == 0) {
            if ((p.prev = loTail) == null)
                lo = p;
            else
                loTail.next = p;
            loTail = p;
            ++lc;
        }
        else {
            if ((p.prev = hiTail) == null)
                hi = p;
            else
                hiTail.next = p;
            hiTail = p;
            ++hc;
        }
    }
    //处理ln链和hn链
    ln = (lc <= UNTREEIFY_THRESHOLD) ? untreeify(lo) :
    (hc != 0) ? new TreeBin<K,V>(lo) : t;
    hn = (hc <= UNTREEIFY_THRESHOLD) ? untreeify(hi) :
    (lc != 0) ? new TreeBin<K,V>(hi) : t;
    setTabAt(nextTab, i, ln);
    setTabAt(nextTab, i + n, hn);
    setTabAt(tab, i, fwd);
    advance = true;
}
```

最后，同样的通过CAS把 ln 设置到新数组的 i 位置， hn 设置到 i+n 位置。