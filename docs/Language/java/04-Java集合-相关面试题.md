# Java集合概述

## List、Set、Map三者的区别

|                          | List           | Set            | Map                            |
| ------------------------ | -------------- | -------------- | ------------------------------ |
| 数据格式                 | 元素有序可重复 | 元素无序不重复 | key无序不重复，value无序可重复 |
| 是否实现了Collection接口 | 是             | 是             | 否                             |

### 集合框架底层数据结构总结

**List：**

1. ArrayList：Object[]数组
2. Vector：Object[]数组
3. LinkedList：双向链表（jdk1.6之前为循环链表，jdk1.7取消了循环）

**Set：**

1. HashSet（无序，唯一）：基于HashMap实现的，底层采用HashMap来保存元素
2. LinkedHashSet：LinkedHashSet是HashSet的子类，并且其内部通过LinkedHashMap来实现。
3. TreeSet（有序，唯一）：红黑树（自平衡的排序二叉树）

**Map：**

1. HashMap：由数组+链表组成。jdk1.8以后在解决哈希冲突时，当链表长度大于阈值（默认为8）（将链表转换成红黑树前会判断，如果当前数组的长度小于64，那么会先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间
2. LinkedHashMap：LinkedHashMap继承自HashMap，所以它的底层仍然是基于拉链式散列结构即由数组和链表或红黑树组成。另外LinkedHashMap在上面结构的基础上，增加了一条双向链表，使得上面的结构可以保持键值对的插入顺序。同时通过对链表进行相应的操作，实现了访问顺序相关逻辑。
3. HashTable：数组+链表组成的，数组是HashMap的主体，链表则是主要为了解决哈希冲突而存在的
4. TreeMap：红黑树（自平衡的排序二叉树）

## Iterator迭代器

### Iterator迭代器是什么？

```java
public interface Iterator<E>{
    //集合中是否还有元素
    boolean hasNext();
    E next();
    ......
}
```

​		`Iterator`对象称为迭代器，迭代器可以对结合进行遍历，但每一个集合内部的数据结构可能是不尽相同的，所以每一个集合存和取都很可能是不一样的，虽然我们可以人为的在每一个类中定义hasNext()和next()方法，但这样做会让整个集合体过于臃肿。于是就有了迭代器。

## 有哪些集合是线程不安全的？怎么解决？

​		我们常用的`ArrayList`,`LinkedList`,`HashMap`,`HashSet`,`TreeSet`,`TreeMap`,`PriorityQueue`都是线程不安全的，可以使用线程安全的集合来替代。

​		java.util.concurrent包中提供了很多并发容器供你使用：

1. `ConcurrentHashMap`：可以看做是线程安全的`HashMap`
2. `CopyOnWriteArrayList`：可以安做事线程安全的`ArrayList`，在读多写少的场合性能非常好，远远好于`Vector`
3. `ConcurrentLinkedQueue`：高效的并发队列，使用链表实现。可以看做一个线程安全的`LinkedList`，这是一个非阻塞队列
4. `BlockingQueue`：这是一个接口，jdk内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道
5. `ConcurrentSkipListMap`：跳表的实现，这是一个Map，使用跳表的数据结构进行快速查找

# Collection子接口List

## ArrayList和Vector的区别

1. ArrayList是List的主要实现类，底层使用Object[]存储，适用于频繁的查找工作，线程不安全
2. Vector是List的古老实现类，底层使用Object[]存储，线程安全

## ArrayList与LinkedList的区别

1. 线程安全：ArrayList与LinkedList都是不同步的，也就是不保证线程安全
2. 底层数据结构：ArrayList底层使用Object[]数组；LinkedList底层使用双向链表
3. 插入和删除是否受元素位置的影响：
   - ArrayList采用数组存储，所以插入和删除元素的时间复杂度受元素位置的影响
   - LinkedList采用链式存储，所以对于插入和删除时间复杂度不受元素位置影响
4. 是否支持随机快速访问：LinkedList不支持高效的随机元素访问，而ArrayList支持快速随机访问就是通过元素的序号快速获取元素对象
5. 内存空间占用：ArrayList的空间浪费主要体现在list列表的结尾会预留一定的容量空间，而LinkedList的空间话费则体现在它的每一个元素度需要消耗比ArrayList更多的空间（因为要存放直接前驱和直接后继以及数据）

# Collection子接口Set

## comparable和comparator的区别

- comparable接口实际上是出自java.lang包，它有一个compareTo(Object obj)方法用来排序
- compatrator接口实际上是出自java.util包它有一个compare(Object obj1,Object obj2)方法用来排序

一般我们需要对一个集合使用自定义排序时，就要重写compareTo()方法或conpare()方法，当我们需要对某一个集合实现两种排序方式，我们可以重写compareTo()方法和使用自制的Comparator方法或者以两个Comparator来实现排序，第二种我们只能使用两个参数的Collections.sort()

**第一种**：自制的Comparator方法

```java
Collections.sort(arrayList, new Comparator<Integer>() {
    @Override
    public int compare(Integer o1, Integer o2) {
    	return o2.compareTo(o1);
    }
});
```

**第二种**：重写compareTo()方法

```java
@Data
public class Stuident implements Comparable<Student>{
    private String name;
    private int age;
    public int compareTo(Student stu){
        if(this.age>stu.age){
            return 1;
        }
        if(this.age<stu.age){
            return -1;
        }
        return 0;
    }
}
```

## 无序性和不可重复性的含义

1. 无序性：无序性不等于随机性，无序性是值存储的数据在底层数组中并非按照数组索引的顺序添加，而是根据数据的哈希值决定的
2. 不可重复性：不可重复性是指添加的元素按照equals()判断时，返回false，需要同时重写equals()方法和HashCode()方法

## 比较HashSet、LinkedHashSet和TreeSet三者的异同

- HashSet是Set接口的主要实现类，HashSet的底层是HashMap，线程不安全的，可以存储null值
- LinkedHashSet是HashSet的子类，能够按照添加顺序遍历
- TreeSet底层使用红黑树，能够按照添加元素的顺序进行遍历，排序方式有自然排序和定制排序

# Map接口

## HashMap和Hashtable的区别

1. **线程是否安全：**HashMap线程不安全，Hashtable线程安全，因为Hashtable内部的方法基本都经过synchronized修饰。
2. **效率：**因为线程安全问题，HashMap要比Hashtable效率高一点儿。另外Hashtable基本被淘汰。
3. **对Null key 和Null value的支持：**HashMap可以存储null的key和value，但null作为键只能有一个，null作为值可以有多个；Hashtable不允许有null键和null值，否则会抛出空指针异常。
4. **初始容量大小和每次扩展容量大小的不同：**
   1. 创建时不指定容量初始值，Hashtable默认初始大小11，之后每次扩充容量变为原来的2n+1；HashMap默认初始大小为16，之后每次扩充，容量变为原来的2倍。
   2. 创建时指定容量初始值，Hashtable会直接使用给定的大小，HashMap会将给定的大小扩充为2的幂次方大小，也就是说HashMap总是使用2的幂次方作为哈希表的大小
5. **底层数据结构：**jdk1.8以后的HashMap在解决哈希冲突时有了较大变化，当链表长度大于阈值8时，（将链表转换为红黑树之前会判断，如果当前数组的长度小于64，那么会选择先进行数组扩容，而不是转换为红黑树）将链表转换为红黑树，以减少搜索时间。Hashtable没有这样的机制。

### tableSizeFor()函数保证HashMap总是使用2的幂次方作为哈希表的大小

HashMap中带有初始容量的构造函数：

```java
public HashMap(int initialCapacity, float loadFactor) {
        if (initialCapacity < 0)
            throw new IllegalArgumentException("Illegal initial capacity: " +
                                               initialCapacity);
        if (initialCapacity > MAXIMUM_CAPACITY)
            initialCapacity = MAXIMUM_CAPACITY;
        if (loadFactor <= 0 || Float.isNaN(loadFactor))
            throw new IllegalArgumentException("Illegal load factor: " +
                                               loadFactor);
        this.loadFactor = loadFactor;
        this.threshold = tableSizeFor(initialCapacity);
    }
```

tableSizeFor()函数保证HashMap总是使用2的幂次方作为哈希表的大小：

```java
static final int tableSizeFor(int cap) {
        int n = cap - 1;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        return (n < 0) ? 1 : (n >= MAXIMUM_CAPACITY) ? MAXIMUM_CAPACITY : n + 1;
    }
```

## HashMap和HashSet的区别

> HashSet底层基于HashMap实现，除了clone(),writeObject(),readObject()是HashSet自己不得不实现之外，其他方法都是直接调用HashMap中的方法

| HashMap                   | HashSet                                                      |
| ------------------------- | ------------------------------------------------------------ |
| 实现了Map接口             | 实现了Set接口                                                |
| 存储键值对                | 仅存储对象                                                   |
| 调用put()向map中添加元素  | 调用add()方法向Set中添加元素                                 |
| HashMap使用键计算Hashcode | HashSet使用成员对象来计算hashcode值，对于两个对象来说，hashcode可能相同，所以equals()方法用来判断对象的相等性 |

## HashMap和TreeMap区别

​		TreeMap和HashMap都继承自AbstractMap，但是需要注意的是TreeMap它还实现了NavigableMap接口和SortedMap接口。

- TreeMap实现NavigableMap接口让TreeMap有了对集合内元素的搜索的能力。	

- TreeMap实现SortMap接口让TreeMap有了对集合的元素根据键排序的能力。默认是按key的升序排序，不过我们可以指定排序的比较器

  ```java
  @Data
  @AllArgsConstructor
  public class Student {
      private Integer age;
  
  
      public static void main(String[] args) {
          TreeMap<Student,String> treeMap=new TreeMap(new Comparator<Student>() {
              @Override
              public int compare(Student stu1, Student stu2) {
                  int num = stu1.getAge()-stu2.getAge();
                  return Integer.compare(num,0);
              }
          });
          treeMap.put(new Student(12),"stu1");
          treeMap.put(new Student(15),"stu2");
          treeMap.put(new Student(25),"stu3");
          treeMap.put(new Student(29),"stu4");
          treeMap.entrySet().stream().forEach(System.out::println);
      }
  }
  ```

  ```java
  Student(age=12)=stu1
  Student(age=15)=stu2
  Student(age=25)=stu3
  Student(age=29)=stu4
  ```

  可以看出，TreeMap中的元素已经按照Student中的age字段的升序来排列了。

> 综上所述，相比于HashMap来说TreeMap主要多了对集合中的元素根据键排序的能力以及对集合内元素的搜索的能力

## HashMap的长度为什么是2的幂次方

​		为了让HashMap存取高效，尽量减少哈希冲突，也就是尽量要把数据分配均匀。Hash的取值范围值-2147483648到2147483648，前后大概40亿的映射空间，只要哈希函数映射的比较均匀松散，一般应用很难出现碰撞。但是内存中放不下。所以这个散列值不能直接拿来使用。用之前需要对数组的长度取模运算，得到的余数才能用于要存放的位置也就是相应的数组下标。这个数组下标的计算方式是“（n-1） & hash ”(n代表数组长度)。

**算法的设计：**

​		我们首先想到的是采用取余操作来实现。但是“取余操作中如果除数是2的幂次方则等价于与其除数减一的与操作”（也就是说hash%length==hash&(length-1)的前提是length是2的幂次方)。并且采用二进制位操作&,相对于%能够提高运算效率，这也就解释了为什么HashMap的长度是2的幂次方。

## ConcurrentHashMap和Hashtable的区别

>ConcurrentHashMap和Hashtable的区别主要体现在实现线程安全的方式上不同

1. **底层数据结构：**HashMap由数组+链表/红黑二叉树组成，Hashtable由数组+链表组成，数组主体，链表则是主要为了解决哈希冲突而存在的
2. **实现线程安全的方式：**
   1. 在jdk1.7的时候，ConcurrentHashMap（分段锁）对整个桶数组进行了分割分段（Segment），每一把锁只锁容器其中的一部分数据，多线程访问容器里不同数据段的数据，就不会存在锁竞争，提高并发访问效率。到了jdk1.8的时候已经摒弃了Segment的概念，而是直接用Node数组+链表+红黑树的数据结构来实现，并发控制使用synchronized和CAS来操作
   2. Hashtable(同一把锁)：使用sychronized来保证线程安全，效率非常低下，当一个线程访问同步方法时，其他线程也访问同步方法，可能会进入阻塞或轮询状态，如使用put添加元素，另一个线程不能使用put添加元素，也不能使用get，竞争会越来越激烈效率越低

# Collections工具类

Collections工具类常用方法：

1. 排序
2. 查找，替换操作
3. 同步控制（不推荐，需要线程安全的集合类型请考虑使用JUC包下的并发集合）

**排序操作：**

```java
void reverse(List list)//反转
void shuffle(List list)//随机排序 
void sort(List list)//按自然排序的升序排序
void sort(List list,Comparator c)//定制排序
void swap(List list,int i,int j)//交换连个索引位置的元素
void rotate(List list,int distance)//旋转。当distance为正数时，将list后distance个元素真题移动到前面。当distance为负数时，将list的钱distance个元素真题移动到后面
```

**查找，替换操作：**

```java
int binarySearch(List list, Object key)//对list进行二分查找，返回索引，list必须有序
int max(Collection coll)//根据元素的自然顺序，返回最大的元素
int max(Collection coll,Comparator c)//根据定制排序，返回最大元素，排序规则有Conparator类控制
void fill(List list,Object obj)//用指定元素代替指定list中的所有元素
int frequency(Collection coll,Object ocj)//统计元素出现次数
int indexOfSubList(List list,List target)//统计target在list中第一次出现的索引，找不到返回-1
boolean replaceAll(List list,Object oldVal,Object newVal)//用新元素替换旧元素
```

**同步控制：**

​		Collections提供了多个synchronizedXxx()方法，该方法可以将指定集合包装成线程同步的集合，从而解决多线程并发访问集合时的线程安全问题。

> 最好不要使用下面这些方法，效率非常低，需要线程安全的集合类型是请考虑使用JUC包下的并发集合

```java
synchronizedCollection(Collection<T> C)//返回指定copllection支持的同步（线程安全的）collection
synchronizedList(List<T> list)//返回指定列表支持的同步（线程安全的）List
synchronizedMap(Map<K,V> m)//返回指定映射支持的同步（线程安全）Map
synchronizedSet(Set<T> s)//返回指定set支持的同步（线程安全）set
```







