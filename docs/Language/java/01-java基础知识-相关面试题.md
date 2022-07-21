# Java基础概念

## Java语言的特点

1. 简单易学
2. 面向对象（封装、继承、多态）
3. 平台无关性（Java虚拟机实现平台无关性）
4. 可靠性
5. 安全性
6. 支持多线程
7. 支持网络编程并且很方便
8. 编译与解释并存

## JVM-JDK-JRE

### JVM

​	JVM是运行java字节码的虚拟机。JVM有针对不同系统的特定实现，目的是使用相同的字节码，它们都会给出相同的结果。

#### 字节码

在java中，JVM可以理解的代码叫做字节码（.class文件），它不面向任何特定的处理器，只面向虚拟机。Java语言通过字节码的方式，在一定程度上解决了传统解释性语言执行效率低的问题，同时保留了解释型语言可移植的特点。所以Java程序运行时比较高效，而且，由于字节码并不针对一种特定的机器，因此，Java程序无序重新编译便可在多种不同的操作系统的计算机上运行。

#### Java程序从源代码到运行

![image-20220303152104408](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220303152104408.png?raw=true)

.class->机器码，在这一步JVM类加载器首先加载字节码文件，然后通过解释器逐行解释执行，这种方式的执行速度会相对较慢。而且，有些方法和代码块时经常需要被调用的，所以后面引进了JIT编译器，而JIT属于运行时编译。当JIT编译器完成第一次编译后，其会将字节码对应的机器码保存下来，下次可以直接使用。而机器码的运行效率肯定是高于Java解释器的，这也解释了Java为什么是编译与解释共存的语言。

### JDK与JRE

> JDK是Java Development Kit ,他是功能齐全的JAVA SDK，他拥有JRE所拥有的一切，还有编译器（javac）和工具（javado和jdb）。它能够创建和编译程序。

> JRE是java运行时环境。它是运行已编译Java程序所有所有内容的集合，包括Java虚拟机（JVM）Java类库，java命令和其他的一些基础构件。但是，它不能用于创建新程序。

如果只是运行Java程序，只需要安装JRE即可，如果需要进行java编程就需要安装jdk，但是，如果要使用JSP部署Web程序，也需要安装jdk，因为应用程序服务器会将JSP转换为Java servlet，并且需要使用JDK来编译servlet.

## Java和C++的区别

- 都是面向对象的语言，都支持封装、继承、多态
- Java不能提供指针来直接访问内存，程序内存更加安全
- Java的类是单继承的，C++支持多重继承；虽然Java类不可以多继承，但是接口可以多继承
- Java有自动内存管理机制，不需要程序员手动释放无用内存

## 什么是Java程序的主类，应用程序和小程序的主类有何不同？

​	一个程序可以有多个类，但是只能有一个类是主类。在Java引用程序中，这个主类是指包含main()方法的类。而在Java小程序中，这个主类是一个继承自系统类JApplet或Applet的子类。应用程序的主类不一定要求是public类，但小程序的主类要求必须是public类。主类是Java程序执行的入口点。

## Java应用程序与小程序之间的差别

应用程序是从主线程启动（也就是main()方法）。applet小程序没有main()方法，主要镶嵌在浏览器页面上运行（调用init()或者run()来启动），镶嵌如类蓝旗这点和flash类似。

## import java 和javax有什么区别

​	该开始的时候JavaAPI所必须的包时java开头的包，javax知识当时的扩展API包，锁着时间推移javax组件扩展成为了JavaAPI的组成部分，但是将扩展从javax包移动到java包比较麻烦，最终破坏一堆现有的代码。因此，最终决定javax包成为了标准API的一部分。

##  Java语言“编译和解释并存”

​	高级编程语言按照程序的执行方式分为编译型和解释型两种。

​	编译型语言：是指编译器针对特定的操作系统将源代码一次性翻译成可被该平台执行的机器码。

​	解释性语言：是指解释器对源程序逐行解释成特定平台的机器码并立即执行。

> java语言既具有编译型语言的特征，也具有解释型语言的，因为java程序要经过先编译后解释连个步骤，由java编写的程序需要经过编译生成字节码文件，这种字节码必须有java解释器来解释执行。因此，Java语言编译与解释并存。

# Java语法

## 字符型常量和字符串常量的区别

1. 形式上：字符常量是单引号引起的一个字符；字符串是双引号引起的若干个字符
2. 含以上：字符常量相当于一个整型值（ASCII值）,可以参加表达式运算；字符串常量代表一个地址值（该字符串在内存中存放的位置）
3. 占用内存大小：字符常量只占用2个字节；字符串常量占用若干个字节

| 类型名称     | 关键字  | 占用内存 | 取值范围                                   |
| ------------ | ------- | -------- | ------------------------------------------ |
| 字节型       | byte    | 1 字节   | -128~127                                   |
| 短整型       | short   | 2 字节   | -32768~32767                               |
| 整型         | int     | 4 字节   | -2147483648~2147483647                     |
| 长整型       | long    | 8 字节   | -9223372036854775808L~9223372036854775807L |
| 单精度浮点型 | float   | 4 字节   | +/-3.4E+38F（6~7 个有效位）                |
| 双精度浮点型 | double  | 8 字节   | +/-1.8E+308 (15 个有效位）                 |
| 字符型       | char    | 2 字节   | ISO 单一字符集                             |
| 布尔型       | boolean | 1 字节   | true 或 false                              |

## 标识符和关键字的区别

`关键字`是被赋予了特殊含义的`标识符`

## Java常见关键字

- 访问控制：private,protected,public
- 类，方法和变量修饰符：abstract,class,extends,final,implements,interface,native,new,static,stricfp,synchronized,transient,volatile
- 程序控制：break,continue,return,do,while,if,else,for,instanceof,switch,case,default
- 错误处理：try,catch,throw,throws,finally
- 包相关：import,package
- 基本类型：boolean,byte,char,double,float,int,long,short,null,true,false
- 变量引用：super,this,void
- 保留字：goto,const

## hashCode()与equals()

### hashCode()介绍：

hashCode()的作用是获取哈希码，也称为散列码；他实际上是返回一个int整数。这个哈希码的作用是确定该对象在哈希表中的索引位置。hashCode()定义在JDK的Object类中，意味着Java中的任何类都包含有hashCode()函数。

### 为什么要有hashCode()

以HashSet如何检查重复为例子

> 当把对象存入HashSet中时，HashSet会先计算对象的hashCode值来判断对象加入的位置，同时也会与其他已经加入的对象的hashCode值左比较，如果没有相符的hashCode，HashSet会假设对象没有重复出现。但是如果发现相同的hashCode值的对象，这时会调用equals()方法来检查hashCode相等的对象是否真的相同。如果两者相同，HashSet就不会让其加入操作成功。如果不同的话，就会重新散列到其他位置。这样就大大减少了equals的次数，相应的提高了执行速度。

### 为什么重写equals时必须重写hashCode方法

如果两个对象相等，则hashCode一定相同。两个对象相等，对两个都像分别调用equals方法都返回true。

但是，两个对象有相同的hashCode值，他们也不一定相等。因此，equals方法被覆盖过，则hashCode方法也必须被覆盖。

> hashCode()的默认行为是对堆上的对象产生独特值。如果没有重写hashCode()，则该class的两个对象无论如何都不会相等

### 为什么两个对象有相同的hashCode值，他们也不一定相等

1.在 Java 应用程序执行期间，在对同一对象多次调用 hashCode 方法时，必须一致地返回相同的整数，前提是将对象进行 equals 比较时所用的信息没有被修改。从某一应用程序的一次执行到同一应用程序的另一次执行，该整数无需保持一致。

2.两个对象的equals()相等，那么对这两个对象中的每个对象调用 hashCode 方法都必须生成相同的整数结果。

3.两个对象的equals()不相等，那么对这两个对象中的任一对象上调用 hashCode 方法不要求一定生成不同的整数结果。但是，为不相等的对象生成不同整数结果可以提高哈希表的性能。

## String、StringBuffer和StringBuilder的区别，String为什么是不可变的

>String类中使用final关键字修饰字符数组来保存字符串，private final char value[],所以String是不可变的

> StringBuilder与StringBuffer都继承自AbstractStringBuilder类，在AbstractStringBuilder中也是使用字符数组保存字符串char[] value但是没有使用final关键字修饰，所以这两种对象都是可变的

> StringBuilder与StringBuffer的构造方法都是调用父类构造方法也就是AbstractStringBuilder实现的

**线程安全性：**

- String中的对象是不可变的，也就可以理解为常量，线程安全。
- StringBuffer对方法加了同步锁或者对调用方法加了同步锁，所以是线程安全的
- StringBuilder并没有对方法加同步锁，所以是非线程安全的

**性能：**

- 对String类型进行改变是，都会生成一个新的String对象，然后将指针指向新的String对象。
- StringBuffer每次都会对StringBuffer都像本身进行操作，而不是生成新的对象并改变对象引用
- 相同情况下使用StringBuilder相比使用StringBuffer仅能获得10%~15%的性能提升，但却要冒多线程不安全的风险

**三者的总结：**

- 操作少量数据：适用String
- 单线程操作字符串缓冲区下操作大量数据：适用StringBuilder
- 多线程操作字符串缓冲区下操作大量数据：适用StringBuffer

## Java序列化中设置部分字段不进行序列化

对于不想进行序列化的变量，使用transient关键字修饰。

**transient关键字的作用：**

​		阻止实例中那些用此关键字修饰的变量序列化；当对象被反序列化时，被transient修饰的变量值不会被持久化和恢复。transient只能修饰变量，不能修饰类和方法。

# Java基本数据类型

## 8种基本数据类型

1. 6种数字类型：byte(Byte)、short(Short)、int(Integer)、long(Long)、float(Float)、double(Double)
2. 1种字符类型：char(Character)
3. 1种布尔型：boolean(Boolean)

| 基本类型 | 位数 | 字节 | 默认值  |
| -------- | ---- | ---- | ------- |
| int      | 32   | 4    | 0       |
| short    | 16   | 2    | 0       |
| long     | 64   | 8    | 0L      |
| byte     | 8    | 1    | 0       |
| char     | 16   | 2    | 'u0000' |
| float    | 32   | 4    | 0f      |
| double   | 64   | 8    | 0d      |
| boolean  | 1    |      | false   |

# 方法（函数）

## 重载和重写的区别

> 重载就是同样的一个方法可以根据输入数据的不同，做出不同的处理。
>
> 重写就是当子类继承自父类的相同方法，输入数据一样，但要做出有别于父类的响应时，你就要覆盖父类方法。

### 重载

发生在同一个类中，方法名称相同，参数类型不同、个数不同、顺序不同、方法返回值和访问修饰符可以不同

重载就是同一个类中多个同名方法根据不同的传参来执行不同的逻辑处理。

### 重写

重写发生在运行期，是子类对父类的允许访问的方法的实现过程进行重新编写。

1. 返回值类型、方法名、参数列表必须相同，抛出的异常范围小于等于父类，访问修饰符范围大于等于父类
2. 如果父类方法访问修饰符为private/final/static则子类就不能重写该方法，但是被static修饰的方法能够被在此声明。
3. 构造方法无法被重写

## 双向列表和双向循环列表

**双向列表**：包含两个指针，一个prev指向前一个结点，一个next指向后一个结点

**双向循环列表**：最后一个结点的next指向head，而head的prev指向最后一个结点，构成一个环

> 详情请参考：https://juejin.im/post/5b5d1a9af265da0f47352f14

## 深拷贝和浅拷贝

1. 浅拷贝：对基本数据类型进行，值传递，对引用数据类型进行引用传递般拷贝，此为浅拷贝
2. 深拷贝：对基本数据类型进行值传递，对引用数据类型，创建一个新的对象，并复制其内容，此为深拷贝

![image-20220303165613517](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220303165613517.png?raw=true)

