# HashMap的put方法的具体流程

![image-20220319205353476](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220319205353476.png?raw=true)

## 对外暴露的put方法

```java
/**
* 对外暴露的put方法
**/
public V put(K key, V value) {
    return putVal(hash(key), key, value, false, true);
}
```

## putVal方法

```java
final V putVal(int hash, K key, V value, boolean onlyIfAbsent,boolean evict) 
{
    Node<K,V>[] tab; Node<K,V> p; int n, i;
    //如果map为空,则做初始化，table是map中存放索引的表
    if ((tab = table) == null || (n = tab.length) == 0)
        n = (tab = resize()).length;
    //使用hash与数组长度减一的值进行异或得到分散的数组下标，如果这个位置上没有值，新建k-v节点存放
    if ((p = tab[i = (n - 1) & hash]) == null)
        tab[i] = newNode(hash, key, value, null);
    //走到else这里说明出现了哈希冲突，需要处理哈希冲突再存放
    else {
        Node<K,V> e; K k;
        //p为上面发生碰撞的那个节点，作比较后将p用临时节点e保存
        if (p.hash == hash &&
            ((k = p.key) == key || (key != null && key.equals(k))))
            e = p;
        //如果当前节点是红黑树节点，则特殊处理，如果是树，说明碰撞已经开始，后序数据结构都是树不是链表
        else if (p instanceof TreeNode)
            e = ((TreeNode<K,V>)p).putTreeVal(this, tab, hash, key, value);
        //key不存在且不是红黑树节点，则开始遍历链表
        else {
            for (int binCount = 0; ; ++binCount) {
                //如果当前碰撞节点没有后序节点，则直接新建节点并追加
                if ((e = p.next) == null) {
                    p.next = newNode(hash, key, value, null);
                    //追加的链表长度大于8，那么需要重新评估当前是扩充数组还是将链表转换为红黑树来存储
                    //TREEIFY_THRESHOLD等于8
                    if (binCount >= TREEIFY_THRESHOLD - 1) // -1 for 1st
                        treeifyBin(tab, hash);
                    break;
                }
                //找到碰撞节点，key完全相等的节点，则用新节点替换老节点
                if (e.hash == hash &&
                    ((k = e.key) == key || (key != null && key.equals(k))))
                    break;
                p = e;
            }
        }
        //此时的e是保存的被碰撞的那个节点，即老节点
        if (e != null) { // existing mapping for key
            V oldValue = e.value;
             // onlyIfAbsent是方法的调用参数，表示是否替换已存在的值，
             // 在默认的put方法中这个值是false，所以这里会用新值替换旧值
            if (!onlyIfAbsent || oldValue == null)
                e.value = value;
            afterNodeAccess(e);
            return oldValue;
        }
    }
    // map变更性操作计数器
    // 比如map结构化的变更像内容增减或者rehash，这将直接导致外部map的并发
	// 迭代引起fail-fast问题，该值就是比较的基础
    ++modCount;
    // size即map中包括k-v数量的多少
	// 当map中的内容大小已经触及到扩容阈值时，则需要扩容了
    if (++size > threshold)
        resize();
    afterNodeInsertion(evict);
    return null;
}
```

## 红黑树的数据结构

```java
static final class TreeNode<K,V> extends LinkedHashMap.Entry<K,V> {
        TreeNode<K,V> parent;  // red-black tree links
        TreeNode<K,V> left;
        TreeNode<K,V> right;
        TreeNode<K,V> prev;    // needed to unlink next upon deletion
        boolean red;
}
```

## putTreeVal()方法

当存储值**发生碰撞**，并在当前节点已经延申到树时，将执行putTreeVal方法，里面描述了红黑树存储值的计算方法：

```java
 final TreeNode<K,V> putTreeVal(HashMap<K,V> map, Node<K,V>[] tab,int h, K k, V v) {
     Class<?> kc = null;
     boolean searched = false;
     TreeNode<K,V> root = (parent != null) ? root() : this;
     for (TreeNode<K,V> p = root;;) {
         int dir, ph; K pk;
         if ((ph = p.hash) > h)
             dir = -1;
         else if (ph < h)
             dir = 1;
         else if ((pk = p.key) == k || (k != null && k.equals(pk)))
             return p;
         else if ((kc == null &&
                   (kc = comparableClassFor(k)) == null) ||
                  (dir = compareComparables(kc, k, pk)) == 0) {
             if (!searched) {
                 TreeNode<K,V> q, ch;
                 searched = true;
                 if (((ch = p.left) != null &&
                      (q = ch.find(h, k, kc)) != null) ||
                     ((ch = p.right) != null &&
                      (q = ch.find(h, k, kc)) != null))
                     return q;
             }
             dir = tieBreakOrder(k, pk);
         }

         TreeNode<K,V> xp = p;
         if ((p = (dir <= 0) ? p.left : p.right) == null) {
             Node<K,V> xpn = xp.next;
             TreeNode<K,V> x = map.newTreeNode(h, k, v, xpn);
             if (dir <= 0)
                 xp.left = x;
             else
                 xp.right = x;
             xp.next = x;
             x.parent = x.prev = xp;
             if (xpn != null)
                 ((TreeNode<K,V>)xpn).prev = x;
             moveRootToFront(tab, balanceInsertion(root, x));
             return null;
         }
     }
 }
```

## treeifyBin()方法

在值发生碰撞并需要延续追加时，如果追加的**链表长度大于8**，那么**需要treeifyBin()方法重新评估当前是扩充数组还是将链表转换为红黑树来存储**。

```java
final void treeifyBin(Node<K,V>[] tab, int hash) {
    int n, index; Node<K,V> e;
    if (tab == null || (n = tab.length) < MIN_TREEIFY_CAPACITY)
        resize();
    else if ((e = tab[index = (n - 1) & hash]) != null) {
        TreeNode<K,V> hd = null, tl = null;
        do {
            TreeNode<K,V> p = replacementTreeNode(e, null);
            if (tl == null)
                hd = p;
            else {
                p.prev = tl;
                tl.next = p;
            }
            tl = p;
        } while ((e = e.next) != null);
        if ((tab[index] = hd) != null)
            hd.treeify(tab);
    }
}
```

## resize()方法

扩充数组长度方法**resize**，会将整个map中的k-v对重新散列存储，会消耗性能

```java
final Node<K,V>[] resize() {
    Node<K,V>[] oldTab = table;
    int oldCap = (oldTab == null) ? 0 : oldTab.length;
    int oldThr = threshold;
    int newCap, newThr = 0;
    if (oldCap > 0) {
        // MAXIMUM_CAPACITY = 1 << 30 = 1073741824
        // Integer.MAX_VALUE = (1 << 31) - 1 = 2147483647
        // 如果已经到了最大容量了，那么就调整扩容的threshold阈值
        if (oldCap >= MAXIMUM_CAPACITY) {
            threshold = Integer.MAX_VALUE;
            return oldTab;
        }
        // DEFAULT_INITIAL_CAPACITY = 1 << 4
        // 否则的话，如果将目前的容量扩充2倍还在允许范围之内，则将容量
        // 扩充为原来的两倍，并且阈值也为原来的两倍
        else if ((newCap = oldCap << 1) < MAXIMUM_CAPACITY &&
                 oldCap >= DEFAULT_INITIAL_CAPACITY)
            newThr = oldThr << 1; // double threshold
    }
    // 如果原始（或者初始）容量不大于0，且之前的阈值大于0，则将容量初始化为
    // 之前阈值的大小
    else if (oldThr > 0) // initial capacity was placed in threshold
        newCap = oldThr;
    else {               // zero initial threshold signifies using defaults
        // 执行这里的方法说明，初始参数中容量大小和阈值都不大于0，那么就用
        // map中的缺省值
        // DEFAULT_INITIAL_CAPACITY = 1 << 4 = 16
        // DEFAULT_LOAD_FACTOR = 0.75f
        newCap = DEFAULT_INITIAL_CAPACITY;
        newThr = (int)(DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY);
    }
    // 如果新的阈值没有重新计算，那么先用加载因子计算出值
    // 如果新的容量大小和阈值大小都未超过限定值，则计算出的值可用，否则
    // 阈值就限定为容量真正允许的上限即Integer.MAX_VALUE
    if (newThr == 0) {
        float ft = (float)newCap * loadFactor;
        newThr = (newCap < MAXIMUM_CAPACITY && ft < (float)MAXIMUM_CAPACITY ?
                  (int)ft : Integer.MAX_VALUE);
    }
    threshold = newThr;
    @SuppressWarnings({"rawtypes","unchecked"})
        Node<K,V>[] newTab = (Node<K,V>[])new Node[newCap];
    // table已经是扩容好的新table了
    // 老的table存在了oldTab中
    table = newTab;
    // 以下就是一个重新散列存储的过程了
    // 将老的tab中的node，按照key重新散列得到新得存储地址来存储，
    // 以此来完成扩充
    if (oldTab != null) {
        for (int j = 0; j < oldCap; ++j) {
            Node<K,V> e;
            if ((e = oldTab[j]) != null) {
                oldTab[j] = null;
                if (e.next == null)
                    newTab[e.hash & (newCap - 1)] = e;
                else if (e instanceof TreeNode)
                    ((TreeNode<K,V>)e).split(this, newTab, j, oldCap);
                else { // preserve order
                    Node<K,V> loHead = null, loTail = null;
                    Node<K,V> hiHead = null, hiTail = null;
                    Node<K,V> next;
                    do {
                        next = e.next;
                        if ((e.hash & oldCap) == 0) {
                            if (loTail == null)
                                loHead = e;
                            else
                                loTail.next = e;
                            loTail = e;
                        }
                        else {
                            if (hiTail == null)
                                hiHead = e;
                            else
                                hiTail.next = e;
                            hiTail = e;
                        }
                    } while ((e = next) != null);
                    if (loTail != null) {
                        loTail.next = null;
                        newTab[j] = loHead;
                    }
                    if (hiTail != null) {
                        hiTail.next = null;
                        newTab[j + oldCap] = hiHead;
                    }
                }
            }
        }
    }
    return newTab;
}
```

