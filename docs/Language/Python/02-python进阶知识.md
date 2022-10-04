# Python进阶知识
# Python面向对象

## 面向对象技术简介

- **类(Class):** 用来描述具有相同的属性和方法的对象的集合。它定义了该集合中每个对象所共有的属性和方法。对象是类的实例。
- **类变量：**类变量在整个实例化的对象中是公用的。类变量定义在类中且在函数体之外。类变量通常不作为实例变量使用。
- **数据成员：**类变量或者实例变量, 用于处理类及其实例对象的相关的数据。
- **方法重写：**如果从父类继承的方法不能满足子类的需求，可以对其进行改写，这个过程叫方法的覆盖（override），也称为方法的重写。
- **局部变量：**定义在方法中的变量，只作用于当前实例的类。
- **实例变量：**在类的声明中，属性是用变量来表示的。这种变量就称为实例变量，是在类声明的内部但是在类的其他成员方法之外声明的。
- **继承：**即一个派生类（derived class）继承基类（base class）的字段和方法。继承也允许把一个派生类的对象作为一个基类对象对待。例如，有这样一个设计：一个Dog类型的对象派生自Animal类，这是模拟"是一个（is-a）"关系（例图，Dog是一个Animal）。
- **实例化：**创建一个类的实例，类的具体对象。
- **方法：**类中定义的函数。
- **对象：**通过类定义的数据结构实例。对象包括两个数据成员（类变量和实例变量）和方法。

## 自定义类

```python
# @Time:2022/1/21 17:57
# @Author:blackme
# @File:test.py
# @Software:PyCharm
# -*- coding: UTF-8 -*-
class student:
    '所有学生的基类'	#类的文档字符串
    studentId = 0  # studentId是一个类变量，他的值在所有实例之间共享

    def __init__(self, name, age):  # 类的构造方法（初始化方法）,创建实例时就会调用次方法
        self.name = name
        self.age = age
        student.studentId += 1

    def countStudent(self):  # self代表类的实例，self在定义类的方法时必须要，但是不必传入相应的参数
        print("学生人数:%d" % student.studentId)

    def studentInfo(self):
        print("name:", self.name, ",age:", self.age)


# 创建student的实例对象
stu = student("张三", 15)
# 访问类的属性
stu.studentInfo()
# 检查是否存在一个属性
print(hasattr(stu, 'age'))
# 访问对象的属性
print(getattr(stu, 'age'))
# 设置属性值，如果属性不存在则会创建一个新属性
setattr(stu, 'age', 25)
stu.studentInfo()
# 删除属性
delattr(stu, 'age')
print(hasattr(stu,'age'))
```

## Python内置类属性

- __dict__ : 类的属性（包含一个字典，由类的数据属性组成）
- __doc__ :类的文档字符串
- __name__: 类名
- __module__: 类定义所在的模块（类的全名是'__main__.className'，如果类位于一个导入模块mymod中，那么className.__module__ 等于 mymod）
- __bases__ : 类的所有父类构成元素（包含了一个由所有父类组成的元组）

```python
# @Time:2022/1/21 17:57
# @Author:blackme
# @File:test.py
# @Software:PyCharm
# -*- coding: UTF-8 -*-
class student:
    '所有学生的基类'	# 类的文档字符串
    studentId = 0  # studentId是一个类变量，他的值在所有实例之间共享

    def __init__(self, name, age):  # 类的构造方法（初始化方法）,创建实例时就会调用次方法
        self.name = name
        self.age = age
        student.studentId += 1

    def countStudent(self):  # self代表类的实例，self在定义类的方法时必须要，但是不必传入相应的参数
        print("学生人数:%d" % student.studentId)

    def studentInfo(self):
        print("name:", self.name, ",age:", self.age)


print("student.__doc__:", student.__doc__)  # 输出类的文档字符串
print("student.__name__:", student.__name__)  # 输出类的名称
print("student.__module__:", student.__module__)  # 输出类所在的模块
print("student.__bases__:", student.__bases__)  # 输出类的所有父类构成元素
print("student.__dict__:", student.__dict__)  # 输出类的属性
```

输出结果：

```python
student.__doc__: 所有学生的基类
student.__name__: student
student.__module__: __main__
student.__bases__: (<class 'object'>,)
student.__dict__: {'__module__': '__main__', '__doc__': '所有学生的基类', 'studentId': 0, '__init__': <function student.__init__ at 0x000001D553D0E8B0>, 'countStudent': <function student.countStudent at 0x000001D553E7F670>, 'studentInfo': <function student.studentInfo at 0x000001D553EBEF70>, '__dict__': <attribute '__dict__' of 'student' objects>, '__weakref__': <attribute '__weakref__' of 'student' objects>}
```

## 类的继承

通过继承创建的新类称为**子类**或**派生类**，被继承的类称为**基类**、**父类**或**超类**。

在python中继承中的一些特点：

- 1、如果在子类中需要父类的构造方法就需要显式的调用父类的构造方法，或者不重写父类的构造方法。
- 2、在调用基类的方法时，需要加上基类的类名前缀，且需要带上 self 参数变量。区别在于类中调用普通函数时并不需要带上 self 参数
- 3、Python 总是首先查找对应类型的方法，如果它不能在派生类中找到对应的方法，它才开始到基类中逐个查找。（先在本类中查找调用的方法，找不到才去基类中找）。

如果在继承元组中列了一个以上的类，那么它就被称作"多重继承" 。

### python子类继承父类构造函数说明

1.如果在子类中需要父类的构造方法就需要显式地调用父类的构造方法，或者不重写父类的构造方法。子类不重写 `__init__`，实例化子类时，会自动调用父类定义的 `__init__`。

```python
class Father(object):	# 父类（基类）
    def __init__(self, name):
        self.name=name
        print ( "name: %s" %( self.name) )
    def getName(self):
        return 'Father ' + self.name
 
class Son(Father):	# 子类（派生类）
    def getName(self):
        return 'Son '+self.name
 
if __name__=='__main__':
    son=Son('zhangsan')
    print ( son.getName() )
```

输出结果：

```python
name: zhangsan
Son zhangsan
```

2.如果重写了`__init__` 时，实例化子类，就不会调用父类已经定义的`__init__`

```python
class Father(object):	# 父类（基类）
    def __init__(self, name):
        self.name=name
        print ( "name: %s" %( self.name) )
    def getName(self):
        return 'Father ' + self.name
 
class Son(Father):	# 子类（派生类）
    def __init__(self, name):
        print ( "hi" )
        self.name =  name
    def getName(self):
        return 'Son '+self.name
 
if __name__=='__main__':
    son=Son('zhangsan')
    print ( son.getName() )
```

输出结果：

```
hi
Son zhangsan
```

3.如果重写了`__init__` 时，要继承父类的构造方法，可以使用`super`关键字：

```python
class Father(object):
    def __init__(self, name):
        self.name=name
        print ( "name: %s" %( self.name))
    def getName(self):
        return 'Father ' + self.name
 
class Son(Father):
    def __init__(self, name):
        super(Son, self).__init__(name)
        print ("hi")
        self.name =  name
    def getName(self):
        return 'Son '+self.name
 
if __name__=='__main__':
    son=Son('zhangsan')
    print ( son.getName() )
```

输出结果：

```
name: zhangsan
hi
Son zhangsan
```

### issubclass()和isinstance()方法

- issubclass() - 布尔函数判断一个类是另一个类的子类或者子孙类，语法：issubclass(sub,sup)
- isinstance(obj, Class) 布尔函数如果obj是Class类的实例对象或者是一个Class子类的实例对象则返回true。

```python
# @Time:2022/1/21 18:43
# @Author:blackme
# @File:test1.py
# @Software:PyCharm
# -*- coding: UTF-8 -*-
# !/usr/bin/python
# -*- coding: UTF-8 -*-

class Parent:  # 定义父类
    parentAttr = 100

    def __init__(self):
        print("调用父类构造函数")

    def parentMethod(self):
        print('调用父类方法')

    def setAttr(self, attr):
        Parent.parentAttr = attr

    def getAttr(self):
        print("父类属性 :", Parent.parentAttr)


class Child(Parent):  # 定义子类
    def __init__(self):
        print("调用子类构造方法")

    def childMethod(self):
        print('调用子类方法')


print(issubclass(Child, Parent))
print(issubclass(Parent, Child))
c = Child()
print(isinstance(c, Parent))
print(isinstance(c, Child))
```

输出结果：

```python
True
False
调用子类构造方法
True
True
```

## 方法重写

如果你的父类方法的功能不能满足你的需求，你可以在子类重写你父类的方法：

```python
class Parent:        # 定义父类
   def myMethod(self):
      print '调用父类方法'
 
class Child(Parent): # 定义子类
   def myMethod(self):
      print '调用子类方法'
 
c = Child()          # 子类实例
c.myMethod()         # 子类调用重写方法
```

输出结果：

```python
调用子类方法
```

## 重载

### 基础重载方法

| 序号 | 方法, 描述 & 简单的调用                                      |
| :--- | :----------------------------------------------------------- |
| 1    | **__init__ ( self [,args...] )** 构造函数 简单的调用方法: *obj = className(args)* |
| 2    | **__del__( self )** 析构方法, 删除一个对象 简单的调用方法 : *del obj* |
| 3    | **__repr__( self )** 转化为供解释器读取的形式 简单的调用方法 : *repr(obj)* |
| 4    | **__str__( self )** 用于将值转化为适于人阅读的形式 简单的调用方法 : *str(obj)* |
| 5    | **__cmp__ ( self, x )** 对象比较 简单的调用方法 : *cmp(obj, x)* |

### 运算符重载

```python
class Vector:
   def __init__(self, a, b):
      self.a = a
      self.b = b
 
   def __str__(self):
      return 'Vector (%d, %d)' % (self.a, self.b)
   
   def __add__(self,other):
      return Vector(self.a + other.a, self.b + other.b)
 
v1 = Vector(2,10)
v2 = Vector(5,-2)
print v1 + v2
```

输出结果:

```python
Vector(7,8)
```

## 类的属性与方法

### 类的私有属性

**__private_attrs**：两个下划线开头，声明该属性为私有，不能在类的外部被使用或直接访问。在类内部的方法中使用时 **self.__private_attrs**。

**Python不允许实例化的类访问私有数据，但你可以使用 `object._className__attrName`（ 对象名._类名__私有属性名 ）访问属性**

```python
class Baidu:
    __site = "www.baidu.com"

baidu = Baidu()
print baidu._Baidu__site
```

输出结果：

```
www.baidu.com
```

### 类的方法

在类的内部，使用 **def** 关键字可以为类定义一个方法，与一般函数定义不同，类方法必须包含参数 self,且为第一个参数

### 类的私有方法

**__private_method**：两个下划线开头，声明该方法为私有方法，不能在类的外部调用。在类的内部调用 **self.__private_methods**

```python
# @Time:2022/1/21 18:53
# @Author:blackme
# @File:test2.py
# @Software:PyCharm
# -*- coding: UTF-8 -*-
class JustCounter:
    __secretCount = 0  # 私有变量
    publicCount = 0  # 公开变量

    def count(self):
        self.__secretCount += 1
        self.publicCount += 1
        print(self.__secretCount)

    def __func(self):
        print(self.publicCount)


counter = JustCounter()
counter.count()  # 访问公开方法
print(counter.publicCount)  # 访问公开变量
print(counter.__secretCount)  # 报错，实例不能访问私有变量
```

## 单下划线、双下划线、头尾双下划线的说明

- `__foo__`: 定义的是特殊方法，一般是系统定义名字 ，类似 `__init__()` 之类的。
- `_foo`: 以单下划线开头的表示的是 protected 类型的变量，即保护类型只能允许其本身与子类进行访问，不能用于 **from module import \***
- `__foo`: 双下划线的表示的是私有类型(private)的变量, 只能是允许这个类本身进行访问了。

