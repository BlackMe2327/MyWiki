# HashMap解决Hash冲突

## 什么是哈希冲突

当两个个不同的值，根据同一散列函数计算出相同的散列值现象，称为哈希冲突

## HashMap的数据结构

HashMap是由数组+链表组成的，jdk1.8后加入了红黑树

![image-20220320113133381](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220320113133381.png?raw=true)

​		使用链地址法来解决哈希冲突，这样我们可以将具有相同哈希值的对象组织成一个链表放在hash值所对应的bucket下，但是相比hashCode返回的int类型，HashMap初始的容量大小为DEFAULT_INITIAL_CAPACITY = 1 << 4（即
2的四次方16）要远小于int类型的范围，所以，如果知识单纯的使用hashCode取余来获取对应的bucket这将会大大增加哈希碰撞的概率，并且最坏情况下还会将HashMap变成一个单链表，所以需要将hashCode做一定的优化hash()函数。

​		因为如果使用hashCode来取余，那么相当于参与运算的只有hashCode的低位，高位没有起到任何作用，所以我们的思路就是让hashCode取值出的高位也参与运算，进一步降低hash冲突的概率，使得数据分布更平均，我们把这样的操作称为扰动。在JDK1.8中的hash函数如下

```java
static final int hashCode(Object key){
    int h;
    //与自己右移16位进行异或运算（高低位异或）
    return (key==null)? 0 : (h==key.hashCode()) ^ (h>>>16)//
}
```

​		这比在JDK 1.7中，更为简洁，相比在1.7中的4次位运算，5次异或运算（9次扰动），在1.8中，只进行
了1次位运算和1次异或运算（2次扰动）；

## jdk1.8新增红黑树

![image-20220320113913763](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220320113913763.png?raw=true)

​		通过上面的链地址法（使用散列表）和扰(img)动函数我们成功让我们的数据分布更平均，哈希碰撞减
少，但是当我们的HashMap中存在大量数据时，加入我们某个 bucket下对应的链表有n个元素，那么遍
历时间复杂度就为O(n)，为了针对这个问题，JDK1.8在HashMap中新增了红黑树的数据结构，进一步使
得遍历复杂度降低至O(logn)；

## 总结

简单总结一下HashMap是使用了哪些方法来有效解决哈希冲突的：

1. 使用链地址法（使用散列表）来链接拥有相同hash值的数据；
2. 使用2次扰动函数（hash函数）来降低哈希冲突的概率，使得数据分布更平均；
3. 引入红黑树进一步降低遍历的时间复杂度，使得遍历更快



