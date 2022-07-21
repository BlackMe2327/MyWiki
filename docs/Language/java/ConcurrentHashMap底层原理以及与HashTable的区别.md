# ConcurrentHashMap底层具体实现及实现原理

## jdk1.7

​		首先将数据分为一段一段的存储，然后给每一段数据一把锁，当一个线程征用所访问其中一个数据时，其他段的数据也能被其他线程访问。

​		在jdk1.7中采用segment数组+HashEntry的方式来实现，结构如下：

一个ConcurrentHashMap里包含一个segment数组。segment的结构和HashMap类似，是一种数组和链表结构，一个segment包含一个HashEntry数组，每个HashEntry是一个链表结构的元素，每个segment数组都守护这一个HashEntry数组里的元素，当对HashEntry数组的数据进行修改是，必须首先获得对应segment的锁。

![image-20220320140219646](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220320140219646.png?raw=true)

1. 该类包含两个静态内部类HashEntry和Segment；前者用来封装隐射表的键值对，后者用来充当锁的角色
2. Segment是一种可重入锁ReentranLock，每个Segment守护一个HashEntry数组里的元素，当对HashEntry数组的数据进行修改时，必须首先获得对应的Segment锁

## jdk1.8

​		在JDK1.8中，放弃了Segment臃肿的设计，取而代之的是采用Node + CAS + Synchronized来保证并发
安全进行实现，synchronized只锁定当前链表或红黑二叉树的首节点，这样只要hash不冲突，就不会产
生并发，效率又提升N 倍。

结构如下：

![image-20220320140627755](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220320140627755.png?raw=true)

插入元素过程：

如果相应位置Node还没有初始化，则调用CAS插入相应的数据：

```java
else if ((f = tabAt(tab, i = (n - 1) & hash)) == null) {
if (casTabAt(tab, i, null, new Node<K,V>(hash, key, value, null)))
break; // no lock when adding to empty bin
}
```

如果相应位置的Node不为空，且当前该节点不处于移动状态，则对该节点加
synchronized锁，如果该节点的hash不小于0，则遍历链表更新节点或插入新节点；

```java
if(fh>=0)
{
    binCount = 1;
    for (Node<K, V> e = f; ; ++binCount) {
        K ek;
        if (e.hash == hash &&
            ((ek = e.key) == key ||
             (ek != null && key.equals(ek)))) {
            oldVal = e.val;
            if (!onlyIfAbsent)
                e.val = value;
            break;
        }
        Node<K, V> pred = e;
        if ((e = e.next) == null) {
            pred.next = new Node<K, V>(hash, key, value, null);
            break;
        }
    }
}
```

1. 如果该节点是TreeBin类型的节点，说明是红黑树结构，则通过 putTreeVal方法往红黑树中插入节
   点；如果binCount不为0，说明put操作对数据产生了影响，如果当前链表的个数达到8个，则通过
   treeifyBin方法转化为红黑树，如果oldVal不为空，说明是一次更新操作，没有对元素个数产生影
   响，则直接返回旧值；
2. 如果插入的是一个新节点，则执行addCount()方法尝试更新元素个数 baseCount；

# ConcurrentHashMap与HashTable的区别

1. 在jdk1.7中ConcurrentHashMap（分段锁） 对整个桶数组进行了分割分段(Segment)，每一把锁只锁容器其中一部分数据，多线程访问容器里不同数据段的数据，就不会存在锁竞争，提高并发访问率。（默认分配16
   个Segment，比Hashtable效率提高16倍。） 到了 JDK1.8 的时候已经摒弃了Segment的概念，而是直接用Node 数组+链表+红黑树的数据结构来实现，并发控制使用synchronized 和 CAS 来操作。（JDK1.6以后 对synchronized锁做了很多优化） 整个看起来就像是优化过且线程安全的 HashMap，虽然在JDK1.8中还能看到 Segment 的数据结构，但是已经简化了属性，只是为了兼容旧版本
2. Hashtable(同一把锁) :使用 synchronized 来保证线程安全，效率非常低下。当一个线程访问同步方法
   时，其他线程也访问同步方法，可能会进入阻塞或轮询状态，如使用 put 添加元素，另一个线程不能使
   用 put 添加元素，也不能使用 get，竞争会越来越激烈效率越低。

HashTable:

![image-20220320142649587](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220320142649587.png?raw=true)

jdk1.7的ConcurrentHashMap:

![image-20220320143023107](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220320143023107.png?raw=true)

jdk1.8的ConcurrentHashMap（TreeBin:红黑二叉树节点Node:链表结点）：

![image-20220320143357540](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220320143357540.png?raw=true)

ConcurrentHashMap 结合了 Hash(img)Map 和 HashTable 二者的优势。 HashMap 没有考虑同步，HashTable 考虑了同步的问题。但是 HashTable 在每次同步执行时都要锁住整个结构。ConcurrentHashMap 锁的方式是稍微细粒度的。