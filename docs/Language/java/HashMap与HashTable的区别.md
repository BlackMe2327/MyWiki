# Hash与HashTable的区别

## 线程安全

HashMap是非线程安全的，HashTable内部方法基本都经过了synchronized修饰，所以HashTable是线程安全的

## 效率

因为线程安全的问题，HashMap要比HashTable的效率高一点儿

## 对Null key和Null value的支持

HashMap中，null可以作为键，这样的键只有一个，可以有一个或多个值为null

HashTable不允许有null的键或值，如果put进的键值只要有一个为null，则抛出空指针异常

## 初始容量大小与每次扩容大小的不同

1. 创建时如果不指定容量初始值，HashTable默认的初始大小为11，之后每次扩充，容量变为之前的2n+1，HashMap默认初始化大小为16。之后每次扩充，容量变为原来的2倍
2. 创建时如果给定了容量初始值，那么HashTable会直接使用你给定的大小，而HashMap会将其扩充为2的幂次方大小，也就是说HashMap总是使用2的幂次方作为哈希表的大小

## 底层数据结构

jdk1.8后HashMap解决哈希冲突有了较大的变化，当链表长度大于阈值（默认8）时，将链表转化为红黑树，以减少搜索时间，HashTable没有这样的机制

## 推荐使用

在HashTable的注释中可以看到，HashTable是保留类不建议使用，推荐在单线程环境下使用HashMap,如果需要在多线程环境下使用则用ConcurrentHashMap替代。