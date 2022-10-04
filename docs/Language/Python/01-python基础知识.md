# Python基础知识

## python特点

- 开源、易于维护
- 可移植
- 易于使用、简单优雅
- 广泛的标椎库、功能强大
- 可扩展、可嵌入

## python缺点

- 运行速度慢

  python是解释性语言，运行时翻译为机器码非常耗时，而c语言是运行前直接编译成cpu可执行的机器码。但是大量的应用程序不需要那么快的运行速度，因为用户根本感觉不出来。

- 代码不能加密

  解释型语言发布程序就是发布源代码，而C语言只需要把编译后的机器码发布出去，从机器码反推出c代码是不可能的。

## python典型应用

![image-20220105132936965](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220105132936965.png?raw=true)

## python环境

- python是跨平台的，可以运行在Windows、Mac和各种Unix/Linux系统上。

- Python有两个版本，一个是2.x版,一个是3.x版，这两个版本不兼容。

- Python是以.py为扩展名的文本文件，要运行代码，需要安装Python解释器：

  CPython：官方默认编译器，安装Python后直接获得该解释器，以>>>作为提示符

  Ipython：给予CPython的一个交互式解释器，用In[序号]:作为提示符

## 变量及类型

- 变量可以是任意数据类型，在程序中用一个变量名表示

- 变量名必须是大小写英文、数字和下划线的组合，且不能以数字开头

- 赋值（比如a='ABC'）时，Python解释器干了两件事

  1.在内存中创建了一个'ABC'的字符串

  2.在内存中创建一个名为a的变量，并把它指向'ABC'

## 标识符和关键字

- 什么是关键字

  > python一些具有特殊功能的标识符，就是所谓的关键字
  >
  > 关键字，是python已经使用了的，所以不允许开发者自己定义和关键字相同的名字的标识符

- 查看关键字

  ```python
  >>>import keyword
  >>>keyword.kwlist
  ```

  ```python
  ['False', 'None', 'True', '__peg_parser__', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
  ```


## 输出

### 普通输出

python中的普通输出

```python
#打印提示
print("hello world")
```

### 格式化输出

#### 字符串格式化

```python
age=10
print("我今年%d岁"%age)
age+=1
print("我今年%d岁"%age)
age+=11
print("我今年%d岁"%age)
```

#### 常用的格式符号

| 格式符号 | 转换                        |
| -------- | --------------------------- |
| %c       | 字符                        |
| %s       | 通过str()字符串转换来格式化 |
| %i       | 有符号十进制整数            |
| %d       | 有符号十进制整数            |
| %u       | 无符号十进制整数            |
| %o       | 八进制整数                  |
| %x       | 十六进制整数（小写字母）    |
| %X       | 十六进制整数（大写字母）    |
| %e       | 索引符号（小写‘e’）         |
| %E       | 索引符号（大写‘E’）         |
| %f       | 浮点实数                    |
| %g       | %f和%e的简写                |
| %G       | %f和%E的简写                |

```python
#格式化输出
print("我的名字是%s,我的国籍是%s"%("blackme","中国"))

#间隔之间添加分隔符
print("www","baidu","com",sep=".")

#不换行输出
print("hello",end="")

#输出后追加一个制表符
print("hello",end="\t")

#检测变量类型
a=10
print(type(a))
```

## 输入

```python
#input输入是是str类型
name=input("请输入姓名:")
print(type(name))
print("您输入的姓名是:",name)
```

## 运算符和表达式

### 算术运算符

| 算术运算符 | 描述                                       |
| ---------- | ------------------------------------------ |
| +          | 两个对象相加                               |
| -          | 两个对象相减                               |
| *          | 两个数相乘或是返回一个被重复若干次的字符串 |
| /          | 两个数相除                                 |
| %          | 取模，返回除法的余数                       |
| **         | 返回x的y次幂                               |
| //         | 返回除法结果并向下取整                     |

### 比较运算符

| 比较运算符 | 描述     |
| ---------- | -------- |
| ==         | 等于     |
| !=         | 不等于   |
| >          | 大于     |
| <          | 小于     |
| >=         | 大于等于 |
| <=         | 小于等于 |

### 赋值运算符

| 赋值运算符 | 描述             | 实例                    |
| ---------- | ---------------- | ----------------------- |
| =          | 简单赋值运算符   | c=a+b将a+b的结果赋值给c |
| +=         | 加法赋值运算符   | c+=a等效于c=c+a         |
| -=         | 减法赋值运算符   | c-=a等效于c=c-a         |
| *=         | 乘法赋值运算符   | c*=a等效于c=c\*a        |
| /=         | 除法赋值运算符   | c/=a等效于c=c/a         |
| %=         | 取模赋值运算符   | c%=a等效于c=c%a         |
| **=        | 幂赋值运算符     | c*\*=a等效于c=c**a      |
| //=        | 取整除赋值运算符 | c//=a等效于c=c//a       |

### 位运算符

| 位运算符 | 描述                                                         | 实例                                                         |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| &        | 按位与运算符：参与运算的两个值,如果两个相应位都为1,则该位的结果为1,否则为0 | (a & b) 输出结果 12 ，二进制解释： 0000 1100                 |
| \|       | 按位或运算符：只要对应的二个二进位有一个为1时，结果位就为1。 | (a \| b) 输出结果 61， 二进制解释： 0011 1101                |
| ^        | 按位异或运算符：当两对应的二进位相异时，结果为1              | (a ^ b) 输出结果 49 ，二进制解释： 0011 0001                 |
| ~        | 按位取反运算符：对数据的每个二进制位取反,即把1变为0,把0变为1 。**~x** 类似于 **-x-1** | (~a ) 输出结果 -61 ，二进制解释： 1100 0011，在一个有符号二进制数的补码形式。 |
| <<       | 左移动运算符：运算数的各二进位全部左移若干位，由 **<<** 右边的数字指定了移动的位数，高位丢弃，低位补0 | a << 2 输出结果 240 ，二进制解释： 1111 0000                 |
| >>       | 右移动运算符：把">>"左边的运算数的各二进位全部右移若干位，**>>** 右边的数字指定了移动的位数 | a >> 2 输出结果 15 ，二进制解释： 0000 1111                  |

```python
#a 为 60，b 为 13
a = 0011 1100
b = 0000 1101
-----------------
a&b = 0000 1100

a|b = 0011 1101

a^b = 0011 0001

~a  = 1100 0011
```

### 逻辑运算符

以下假设变量 a 为 10, b为 20:

| 逻辑运算符 | 逻辑表达式 | 描述                                                         | 实例                    |
| :--------- | :--------- | :----------------------------------------------------------- | :---------------------- |
| and        | x and y    | 布尔"与" - 如果 x 为 False，x and y 返回 False，否则它返回 y 的计算值。 | (a and b) 返回 20。     |
| or         | x or y     | 布尔"或" - 如果 x 是非 0，它返回 x 的计算值，否则它返回 y 的计算值。 | (a or b) 返回 10。      |
| not        | not x      | 布尔"非" - 如果 x 为 True，返回 False 。如果 x 为 False，它返回 True。 | not(a and b) 返回 False |

### 成员运算符

| 成员运算符 | 描述                                                    | 实例                                              |
| :--------- | :------------------------------------------------------ | :------------------------------------------------ |
| in         | 如果在指定的序列中找到值返回 True，否则返回 False。     | x 在 y 序列中 , 如果 x 在 y 序列中返回 True。     |
| not in     | 如果在指定的序列中没有找到值返回 True，否则返回 False。 | x 不在 y 序列中 , 如果 x 不在 y 序列中返回 True。 |

### 身份运算符

身份运算符用于比较两个对象的存储单元

| 运算符 | 描述                                        | 实例                                                         |
| :----- | :------------------------------------------ | :----------------------------------------------------------- |
| is     | is 是判断两个标识符是不是引用自一个对象     | **x is y**, 类似 **id(x) == id(y)** , 如果引用的是同一个对象则返回 True，否则返回 False |
| is not | is not 是判断两个标识符是不是引用自不同对象 | **x is not y** ， 类似 **id(a) != id(b)**。如果引用的不是同一个对象则返回结果 True，否则返回 False。 |

**注意：id(x)函数用于获取对象内存地址**

## import和from...import

在python中用`import`或`from...import`来导入相应模块

将整个模块导入(somemodule)导入，格式为:`import somemoudle`

从某个模块中导入某个函数，格式为:`from somemoudle import somfunction`

从某个模块中导入多个函数，格式为:`from somemoudle import firstfunc,sencondfunc,thiedfunc`

将某个模块中的全部函数导入，格式为:`from somemoudle import \*`

# 判断语句和循环语句

## 条件判断语句

```python
import random
num = random.randint(0,3);	#0~3个随机数，包含0,1,2,3     
if num == 3:            # 判断num的值
    print 'boss'        
elif num == 2:
    print 'user'
elif num == 1:
    print 'worker'
elif num < 0:           # 值小于零时输出
    print 'error'
else:
    print 'roadman'     # 条件均不成立时输出
```

## 循环语句

### for循环

```python
for letter in 'Python':     # 第一个实例,注意冒号
   print("当前字母: %s" % letter)

fruits = ['banana', 'apple',  'mango']
for fruit in fruits:        # 第二个实例,注意冒号
   print ('当前水果: %s'% fruit)
```

以上实例输出结果:

```
当前字母: P
当前字母: y
当前字母: t
当前字母: h
当前字母: o
当前字母: n
当前水果: banana
当前水果: apple
当前水果: mango
```

```python
for i in rage(5):		#第一个实例
	print(i)
    
for i in rage(0,10,3):	#第二个实例,步进值为3
    print(i)
   
```

以上实例输出结果：

```
0
1
2
3
4
-----------
0
3
6
9
```

### while循环

```python
count=0
while count<5:
    print(count,"小于5")
    count+=1
else:
    print(count,"大于5")
```

## break,continue,pass语句

`break`语句可以跳出`for` 和`while`的循环体

`continue`语句跳过当前循环，直接进行下一轮循环

`pass`是空语句，一般用作占位语句，不做任何事情

# 字符串、列表、元组、字典、集合

## 字符串

**String(字符串)**

​	1.Python中的字符串可以用`单引号`、`双引号`、`三引号`括起来，使用反斜杠 \ 转义特殊字符

​	2.Python3源码文件默认以UTF-8编码，所有字符串都是unicode字符串

​	3.支持字符串拼接，截取等多种运算

### 转义字符

| 转义字符    | 描述                                                     |
| :---------- | :------------------------------------------------------- |
| \(在行尾时) | 续行符                                                   |
| \ \         | 反斜杠符号                                               |
| \ '         | 单引号                                                   |
| \ "         | 双引号                                                   |
| \a          | 响铃                                                     |
| \b          | 退格(Backspace)                                          |
| \e          | 转义                                                     |
| \000        | 空                                                       |
| \n          | 换行                                                     |
| \v          | 纵向制表符                                               |
| \t          | 横向制表符                                               |
| \r          | 回车                                                     |
| \f          | 换页                                                     |
| \oyy        | 八进制数，y 代表 0~7 的字符，例如：\012 代表换行。       |
| \xyy        | 十六进制数，以 \x 开头，yy代表的字符，例如：\x0a代表换行 |
| \other      | 其它的字符以普通格式输出                                 |

### 运算符

下表实例变量 a 值为字符串 "Hello"，b 变量值为 "Python"：

| 操作符 | 描述                                                         | 实例                                 |
| :----- | :----------------------------------------------------------- | :----------------------------------- |
| +      | 字符串连接                                                   | >>>a + b 'HelloPython'               |
| *      | 重复输出字符串                                               | >>>a * 2 'HelloHello'                |
| []     | 通过索引获取字符串中字符                                     | >>>a[1] 'e'                          |
| [ : ]  | 截取字符串中的一部分                                         | >>>a[1:4] 'ell'                      |
| in     | 成员运算符 - 如果字符串中包含给定的字符返回 True             | >>>"H" in a True                     |
| not in | 成员运算符 - 如果字符串中不包含给定的字符返回 True           | >>>"M" not in a True                 |
| r/R    | 原始字符串 - 原始字符串：所有的字符串都是直接按照字面的意思来使用，没有转义特殊或不能打印的字符。 原始字符串除在字符串的第一个引号前加上字母"r"（可以大小写）以外，与普通字符串有着几乎完全相同的语法。 | >>>print r'\n' \n >>> print R'\n' \n |

### 字符串的截取和连接

```python
str='blackme'
print(str)					#输出字符串
print(str[0:-1])			#输出第一个到倒数第二个的所有字符
print(str[0])				#输出字符串第一个字符
print(str[2:5])				#输出从第三个开始到第五个字符串
print(str[2:])				#输出从第三个开始到最后的字符串
print(str*2)				#输出字符串两次
print(str+'你好')			   #连接字符串
print(str[:5])				#输出第五个字符前的所有字符
print(str[0:7:2])			#【起始:终止:步进值】
print("hello\nhahaha")		#使用反斜杠，实现转义字符的功能
print(r"hello\nhahaha")		#在字符串前面加一个r，表示直接显示原始字符串，不进行转义
```

### 字符串常见操作

| **方法**                                               | **描述**                                                     |
| :----------------------------------------------------- | :----------------------------------------------------------- |
| string.capitalize()                                    | 把字符串的第一个字符大写                                     |
| string.center(width)                                   | 返回一个原字符串居中,并使用空格填充至长度 width 的新字符串   |
| **string.count(str, beg=0, end=len(string))**          | 返回 str 在 string 里面出现的次数，如果 beg 或者 end 指定则返回指定范围内 str 出现的次数 |
| **string.decode(encoding='UTF-8', errors='strict')**   | 以 encoding 指定的编码格式解码 string，如果出错默认报一个 ValueError 的 异 常 ， 除非 errors 指 定 的 是 'ignore' 或 者'replace' |
| **string.encode(encoding='UTF-8', errors='strict')**   | 以 encoding 指定的编码格式编码 string，如果出错默认报一个ValueError 的异常，除非 errors 指定的是'ignore'或者'replace' |
| **string.endswith(obj, beg=0, end=len(string))**       | 检查字符串是否以 obj 结束，如果beg 或者 end 指定则检查指定的范围内是否以 obj 结束，如果是，返回 True,否则返回 False. |
| string.expandtabs(tabsize=8)                           | 把字符串 string 中的 tab 符号转为空格，tab 符号默认的空格数是 8。 |
| **string.find(str, beg=0, end=len(string))**           | 检测 str 是否包含在 string 中，如果 beg 和 end 指定范围，则检查是否包含在指定范围内，如果是返回开始的索引值，否则返回-1 |
| **string.format()**                                    | 格式化字符串                                                 |
| **string.index(str, beg=0, end=len(string))**          | 跟find()方法一样，只不过如果str不在 string中会报一个异常.    |
| **string.isalnum()**                                   | 如果 string 至少有一个字符并且所有字符都是字母或数字则返回 True,否则返回 False |
| **string.isalpha()**                                   | 如果 string 至少有一个字符并且所有字符都是字母则返回 True,否则返回 False |
| string.isdecimal()                                     | 如果 string 只包含十进制数字则返回 True 否则返回 False.      |
| **string.isdigit()**                                   | 如果 string 只包含数字则返回 True 否则返回 False.            |
| string.islower()                                       | 如果 string 中包含至少一个区分大小写的字符，并且所有这些(区分大小写的)字符都是小写，则返回 True，否则返回 False |
| **string.isnumeric()**                                 | 如果 string 中只包含数字字符，则返回 True，否则返回 False    |
| string.isspace()                                       | 如果 string 中只包含空格，则返回 True，否则返回 False.       |
| string.istitle()                                       | 如果 string 是标题化的(见 title())则返回 True，否则返回 False |
| string.isupper()                                       | 如果 string 中包含至少一个区分大小写的字符，并且所有这些(区分大小写的)字符都是大写，则返回 True，否则返回 False |
| **string.join(seq)**                                   | 以 string 作为分隔符，将 seq 中所有的元素(的字符串表示)合并为一个新的字符串 |
| string.ljust(width)                                    | 返回一个原字符串左对齐,并使用空格填充至长度 width 的新字符串 |
| string.lower()                                         | 转换 string 中所有大写字符为小写.                            |
| **string.lstrip()**                                    | 截掉 string 左边的空格                                       |
| string.maketrans(intab, outtab\])                      | maketrans() 方法用于创建字符映射的转换表，对于接受两个参数的最简单的调用方式，第一个参数是字符串，表示需要转换的字符，第二个参数也是字符串表示转换的目标。 |
| max(str)                                               | 返回字符串 *str* 中最大的字母。                              |
| min(str)                                               | 返回字符串 *str* 中最小的字母。                              |
| **string.partition(str)**                              | 有点像 find()和 split()的结合体,从 str 出现的第一个位置起,把 字 符 串 string 分 成 一 个 3 元 素 的 元 组 (string_pre_str,str,string_post_str),如果 string 中不包含str 则 string_pre_str == string. |
| **string.replace(str1, str2, num=string.count(str1))** | 把 string 中的 str1 替换成 str2,如果 num 指定，则替换不超过 num 次. |
| string.rfind(str, beg=0,end=len(string) )              | 类似于 find() 函数，返回字符串最后一次出现的位置，如果没有匹配项则返回 -1。 |
| string.rindex( str, beg=0,end=len(string))             | 类似于 index()，不过是返回最后一个匹配到的子字符串的索引号。 |
| string.rjust(width)                                    | 返回一个原字符串右对齐,并使用空格填充至长度 width 的新字符串 |
| string.rpartition(str)                                 | 类似于 partition()函数,不过是从右边开始查找                  |
| **string.rstrip()**                                    | 删除 string 字符串末尾的空格.                                |
| **string.split(str="", num=string.count(str))**        | 以 str 为分隔符切片 string，如果 num 有指定值，则仅分隔 **num+1** 个子字符串 |
| string.splitlines([keepends\])                         | 按照行('\r', '\r\n', \n')分隔，返回一个包含各行作为元素的列表，如果参数 keepends 为 False，不包含换行符，如果为 True，则保留换行符。 |
| string.startswith(obj, beg=0,end=len(string))          | 检查字符串是否是以 obj 开头，是则返回 True，否则返回 False。如果beg 和 end 指定值，则在指定范围内检查. |
| **string.strip([obj\])**                               | 在 string 上执行 lstrip()和 rstrip()                         |
| string.swapcase()                                      | 翻转 string 中的大小写                                       |
| string.title()                                         | 返回"标题化"的 string,就是说所有单词都是以大写开始，其余字母均为小写(见 istitle()) |
| **string.translate(str, del="")**                      | 根据 str 给出的表(包含 256 个字符)转换 string 的字符,要过滤掉的字符放到 del 参数中 |
| string.upper()                                         | 转换 string 中的小写字母为大写                               |
| string.zfill(width)                                    | 返回长度为 width 的字符串，原字符串 string 右对齐，前面填充0 |

## 列表

**List(列表)**

​	1.列表可以完成大多数集合类的数据结构实现。列表中的元素的类型可以不相同，他支持数字，字符串甚至可以包含列表（嵌套）。

​	2.列表是写在方括号[]之间的、用逗号分隔开的元素列表

​	3.列表索引值以0为开始值，-1为从末尾的开始位置

​	4.列表可以使用+操作符进行拼接，使用*表示重复

​	5.list1=[1,2]

### 列表脚本操作符

| Python 表达式                | 结果                         | 描述                 |
| :--------------------------- | :--------------------------- | :------------------- |
| len([1, 2, 3])               | 3                            | 长度                 |
| [1, 2, 3] + [4, 5, 6]        | [1, 2, 3, 4, 5, 6]           | 组合                 |
| ['Hi!'] * 4                  | ['Hi!', 'Hi!', 'Hi!', 'Hi!'] | 重复                 |
| 3 in [1, 2, 3]               | True                         | 元素是否存在于列表中 |
| for x in [1, 2, 3]: print x, | 1 2 3                        | 迭代                 |

### 列表常用操作

| 操作名称                   | 操作方法                                                     | 举例                         |
| -------------------------- | ------------------------------------------------------------ | ---------------------------- |
| 访问列表中的元素           | 通过下标直接访问                                             | print(list[0])               |
| 列表的切片                 | 使用[: :]                                                    | list[2:5:2]                  |
| 遍历列表                   | 通过for循环                                                  | for i in list:   print(i)    |
| 【增加】新增数据到列表尾部 | 使用append                                                   | list.append(5)               |
| 【增加】列表的追加         | 使用extend                                                   | list1.extend(list2)          |
| 【增加】列表数据的插入     | 使用insert,第一个变量表示下标，第二个变量表示元素            | list.insert(1,3)             |
| 【删除】列表的删除         | del:按索引删除指定位置元素remove:移除列表中指定值的第一个匹配值，如果没找到，抛异常 | del list[0]  list1.remove(1) |
| 【删除】弹出列表尾部的元素 | 使用pop                                                      | list.pop()                   |
| 【修改】更新列表中的数据   | 通过下标原地修改                                             | list[0]=8                    |
| 【查找】                   | in、not in                                                   | 2 in list                    |
| 列表的加法操作             | +                                                            | list3=list1+list2            |
| 【排序】列表的排序         | 使用sort                                                     | list.sort()                  |
| 【排序】列表的逆转         | 使用reverse                                                  | list.reverse()               |

## 元组

**Tuple(元组)**

​	1.tuple与list类似，但是tuple的元素不能修改。tuple写在小括号()里,元素之间用逗号隔开。

​	2.元组的元素不可变，但可以包含可变对象，如list

​	3.当定义只有一个元素的元组时，必须加逗号

​	4.tuple1=(1,2)

### 常用操作

| 操作名称               | 操作方法         | 举例                        |
| ---------------------- | ---------------- | --------------------------- |
| 访问元组中元素         | 通过下标直接访问 | tuple1[0]                   |
| 遍历元组               | 通过for循环      | fot i in tuple1:   print(i) |
| 元组切片               | 使用[: :]        | tuple1[2:5:2]               |
| 元组加法               | +                | tuple3=tuple1+tuple2        |
| 元组成员关系           | in               | 2 in tuple1                 |
| 得到重复元素数量       | count            | tuple1.count(1)             |
| 获取元组长度           | len()            | len(tuple1)                 |
| 获取元组元素最大值     | max()            | max(tuple1)                 |
| 获取元组元素最小值     | min()            | min(tuple1)                 |
| 其他类型对象转换成元组 | tuple()          | tuple(object)               |

## 字典

**dict(字典)**

​	1.字典是无序的对象集合，使用键-值（key-value）存储，具有极快的查找速度

​	2.键（key）必须使用不可变类型

​	3.同一个字典中，键（key）必须唯一

​	4.d = {key1 : value1, key2 : value2 }

### 常用操作

| 操作名称               | 操作方法                                 | 举例                                          |
| ---------------------- | ---------------------------------------- | --------------------------------------------- |
| 访问字典中元素（1）    | 通过key访问，key不存在会抛出异常         | dict1["key1"]                                 |
| 访问字典中元素（2）    | 通过get()方法，不存在返回None,不抛出异常 | dict1.get("key1")                             |
| 遍历字典（1）          | 通过for循环只能获取key                   | for key in dict1:  print(key,dict1[key])      |
| 遍历字典（2）          | 配合items方法，获取key和value            | for key,val in dict1.items():  print(key,val) |
| 直接获取所有key和value | 使用keys和values方法                     | dict1.keys()      dict1.values()              |
| 修改val                | 直接通过key修改                          | dict1["key1"]=2003                            |
| 新增键值对             | 直接新增                                 | dict1["key2"]=2003                            |
| 删除字典元素           | 通过key删除                              | del dict1["key1"]                             |
| 字典元素弹出           | 通过pop方法                              | dict1.pop["key1"]                             |
| 判断key是否存在        | in                                       | "key1" in dict1                               |
| 合并字典               | update                                   | dict1.update(dict2)                           |
| 把两个列表转为字典     | dict+zip方法                             | dict(zip(list1,list2))                        |
| 把一个嵌套列表转为字典 | dict方法                                 | dict2=dict([["key1","value1"]])               |
| 清楚字典内元素         | clear方法                                | dict1.clear()                                 |
| 获取字典长度           | len()                                    | len(dict1)                                    |
| 获取字典最大key        | max()                                    | max(dict1)                                    |
| 获取字典最小key        | min()                                    | min(dict1)                                    |
| 其他类型对象转换成字典 | dict()                                   | dict([(1,2),(2,3)])                           |

## 集合

**set(集合)**

​	1.set与dict类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在set中，没有重复的key

​	2.set是无序的，重复元素在set中自动被过滤

​	3.s=set([1,2,3])

### 常用操作

| 操作名称               | 操作方法    | 举例                     |
| ---------------------- | ----------- | ------------------------ |
| 遍历集合               | 通过for循环 | for i in set1:  print(i) |
| 更新集合               | update方法  | set1.update(set2)        |
| 向集合添加新元素       | add方法     | set1.add(5)              |
| 移除集合中的元素       | remove方法  | set1.remove(5)           |
| 弹出元素               | pop方法     | val=set1.pop()           |
| 清除元素               | clear方法   | set1.clear()             |
| 删除集合               | del         | del set1                 |
| 获取集合长度           | len()       | len(set1)                |
| 获取最大元素           | max()       | max(set1)                |
| 获取最小元素           | min()       | min(set1)                |
| 其他类型对象转换成集合 | set()       | set(object)              |

## 小结

|        | 是否有序 | 是否可变类型        |
| ------ | -------- | ------------------- |
| 列表[] | 有序     | 可变类型            |
| 元组() | 无序     | 不可变类型          |
| 字典{} | 无序     | key不可变   val可变 |
| 集合{} | 无序     | 可变类型（不重复）  |

# 函数

## 函数概念

​			开发程序中，需要使用某块代码多次，但是为了提高编写的效率以及代码的重用，所以把具有独立功能的代码块组织为一个小模块，这就是函数

## 函数定义和调用

### 定义函数

定义函数格式如下：

```python
def 函数名():
	代码
```

demo:

```python
#定义一个函数，完成打印信息的功能
def printInfo():
    print("------")
    print("hello world")
    print("------")
```

## 函数参数

### 定义带有参数的函数

```python
def sum(a,b):
    c=a+b
    print(c)
```

### 调用带有参数的函数

```python
def sum(a,b):
    c=a+b
    print(c)
sum(11,12)
```

## 函数返回值

### 带有返回值的函数

```python
def sum(a,b):
    return a+b
```

### 保存函数的返回值

```python
def sum(a,b):
    return a+b
result=sum(11,12)
print(result)
```

### 函数返回多个值(本质利用了元组)

```python
def divid(a,b):
    shang=a//b
    yushu=a%b
    return shang,yushu
sh,yu=divid(5,2)
print(sh)
print(yu)
```

## 局部变量和全局变量

1.定义在函数外边的叫 `全局变量`

2.全局变量可以在所有函数中进行访问

3.如果在函数中修改全局变量，那么就需要使用 `global`进行声明，否则出错

4.如果全局变量的名字和局部变量的名字相同，那么使用的是局部变量

```python
total = 0 # 这是一个全局变量
def sum( arg1, arg2 ):
   total = arg1 + arg2 # total在这里是局部变量.
   print "函数内是局部变量 : ", total
   return total
 
#调用sum函数
sum( 10, 20 )
print "函数外是全局变量 : ", total
```

# 文件操作

​	文件，就是把一些数据存放起来，可以让程序下一次执行的时候直接使用，而不必重新制作一份

## 文件的打开与关闭

### 打开文件

在python中，使用open函数，可以打开一个已经存在的文件，或者创建一个新文件

​	open(文件名，访问模式)

```python
f=open('1.txt','w')
```

模式说明：

| 模式   | 描述                                                         |
| :----- | :----------------------------------------------------------- |
| t      | 文本模式 (默认)。                                            |
| x      | 写模式，新建一个文件，如果该文件已存在则会报错。             |
| b      | 二进制模式。                                                 |
| +      | 打开一个文件进行更新(可读可写)。                             |
| U      | 通用换行模式（不推荐）。                                     |
| **r**  | 以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式。 |
| **rb** | 以二进制格式打开一个文件用于只读。文件指针将会放在文件的开头。这是默认模式。一般用于非文本文件如图片等。 |
| r+     | 打开一个文件用于读写。文件指针将会放在文件的开头。           |
| rb+    | 以二进制格式打开一个文件用于读写。文件指针将会放在文件的开头。一般用于非文本文件如图片等。 |
| **w**  | 打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。 |
| **wb** | 以二进制格式打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。 |
| w+     | 打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。 |
| wb+    | 以二进制格式打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。 |
| a      | 打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。 |
| ab     | 以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。 |
| a+     | 打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。 |
| ab+    | 以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。如果该文件不存在，创建新文件用于读写。 |

### 关闭文件

```python
#新建一个文件，名字为1.txt
f=open('1.txt','w')
#关闭这个文件
f.close()
```

## 文件读写

### 写数据（write）

```python
f=open('1.txt','w')
f.write('hello world')
f.close()
```

### 读数据（read）

```python
f=open('1.txt','r')
content=f.read(5)		#read(5)读取1.txt中的五个字节，如果没有传入数值则读取文件中全部数据
```

### 读数据（readlines）

readlines可以按照行的方式把整个文件中的内容进行一次读取，并且返回的是一个列表，其中每一行数据为一个元素

```python
f=open('1.txt','r')
content=f.readlines()
print(type(content))
i=1
for temp in content:
    print(%d:%s%(i,temp))
    i+=1
f.close()
```

### 读数据（readline）

realine每次只读取一行

```python
f=open('1.txt','r')
content=f.raedline()
print("1:%s"%content)
content=f.raedline()
print("2:%s"%content)
f.close()
```

## 文件的相关操作

对文件进行重命名、删除操作,python的os模块有这些功能

### 文件重命名

rename(旧文件名,新文件名)

```python
import os
os.rename("1.txt",'2.txt')
```

### 删除文件

remove(待删除的文件名)

```python
import os
os.remove("1.txt")
```

### 创建文件夹

```python
import os
os.mkdir("test")
```

### 获取当前目录

```python
import os
os.getcwd()
```

### 改变默认目录

```python
import os
os.chdir("../")
```

### 获取目录列表

```python
import os
os.listdir("./")
```

### 删除文件夹

```python
import os
os.rmdir("test")
```

# 异常处理

## 异常简介

异常即是一个事件，该事件会在程序执行过程中发生，影响了程序的正常执行。

一般情况下，在Python无法正常处理程序时就会发生一个异常。

异常是Python对象，表示一个错误。

当Python脚本发生异常时我们需要捕获处理它，否则程序会终止执行。

## 标准异常

| 异常名称                  | 描述                                               |
| :------------------------ | :------------------------------------------------- |
|                           |                                                    |
| BaseException             | 所有异常的基类                                     |
| SystemExit                | 解释器请求退出                                     |
| KeyboardInterrupt         | 用户中断执行(通常是输入^C)                         |
| Exception                 | 常规错误的基类                                     |
| StopIteration             | 迭代器没有更多的值                                 |
| GeneratorExit             | 生成器(generator)发生异常来通知退出                |
| StandardError             | 所有的内建标准异常的基类                           |
| ArithmeticError           | 所有数值计算错误的基类                             |
| FloatingPointError        | 浮点计算错误                                       |
| OverflowError             | 数值运算超出最大限制                               |
| ZeroDivisionError         | 除(或取模)零 (所有数据类型)                        |
| AssertionError            | 断言语句失败                                       |
| AttributeError            | 对象没有这个属性                                   |
| EOFError                  | 没有内建输入,到达EOF 标记                          |
| EnvironmentError          | 操作系统错误的基类                                 |
| IOError                   | 输入/输出操作失败                                  |
| OSError                   | 操作系统错误                                       |
| WindowsError              | 系统调用失败                                       |
| ImportError               | 导入模块/对象失败                                  |
| LookupError               | 无效数据查询的基类                                 |
| IndexError                | 序列中没有此索引(index)                            |
| KeyError                  | 映射中没有这个键                                   |
| MemoryError               | 内存溢出错误(对于Python 解释器不是致命的)          |
| NameError                 | 未声明/初始化对象 (没有属性)                       |
| UnboundLocalError         | 访问未初始化的本地变量                             |
| ReferenceError            | 弱引用(Weak reference)试图访问已经垃圾回收了的对象 |
| RuntimeError              | 一般的运行时错误                                   |
| NotImplementedError       | 尚未实现的方法                                     |
| SyntaxError               | Python 语法错误                                    |
| IndentationError          | 缩进错误                                           |
| TabError                  | Tab 和空格混用                                     |
| SystemError               | 一般的解释器系统错误                               |
| TypeError                 | 对类型无效的操作                                   |
| ValueError                | 传入无效的参数                                     |
| UnicodeError              | Unicode 相关的错误                                 |
| UnicodeDecodeError        | Unicode 解码时的错误                               |
| UnicodeEncodeError        | Unicode 编码时错误                                 |
| UnicodeTranslateError     | Unicode 转换时错误                                 |
| Warning                   | 警告的基类                                         |
| DeprecationWarning        | 关于被弃用的特征的警告                             |
| FutureWarning             | 关于构造将来语义会有改变的警告                     |
| OverflowWarning           | 旧的关于自动提升为长整型(long)的警告               |
| PendingDeprecationWarning | 关于特性将会被废弃的警告                           |
| RuntimeWarning            | 可疑的运行时行为(runtime behavior)的警告           |
| SyntaxWarning             | 可疑的语法的警告                                   |
| UserWarning               | 用户代码生成的警告                                 |

## 异常处理

### try/except语句

```python
try:
<语句>        #运行别的代码
except <名字>：
<语句>        #如果在try部份引发了'name'异常
except <名字>，<数据>:
<语句>        #如果引发了'name'异常，获得附加的数据
else:
<语句>        #如果没有异常发生
```

```python
try:
    fh = open("testfile", "w")
    fh.write("这是一个测试文件，用于测试异常!!")
except IOError:
    print "Error: 没有找到文件或读取文件失败"
else:
    print "内容写入文件成功"
    fh.close()
```

### try-finally 语句

```python
try:
<语句>
finally:
<语句>    #退出try时总会执行
raise
```

```python
try:
    fh = open("testfile", "w")
    fh.write("这是一个测试文件，用于测试异常!!")
finally:
    print "Error: 没有找到文件或读取文件失败"
```

## 异常的参数

一个异常可以带上参数，可作为输出的异常信息参数。

你可以通过except语句来捕获异常的参数，如下所示：

```python
try:
    正常的操作
   ......................
except ExceptionType, Argument:
    你可以在这输出 Argument 的值...
```

变量接收的异常值通常包含在异常的语句中。在元组的表单中变量可以接收一个或者多个值。

元组通常包含错误字符串，错误数字，错误位置。

```python
# 定义函数
def temp_convert(var):
    try:
        return int(var)
    except ValueError, Argument:
        print "参数没有包含数字\n", Argument

# 调用函数
temp_convert("xyz")
```

## 触发异常

我们可以使用raise语句自己触发异常

raise语法格式如下：

```python
raise [Exception [, args [, traceback]]]
```

语句中 Exception 是异常的类型（例如，NameError）参数标准异常中任一种，args 是自已提供的异常参数。

最后一个参数是可选的（在实践中很少使用），如果存在，是跟踪异常对象。

```python
def functionName( level ):
    if level < 1:
        raise Exception("Invalid level!", level)
        # 触发异常后，后面的代码就不会再执行
```

## 自定义异常

通过创建一个新的异常类，程序可以命名它们自己的异常。异常应该是典型的继承自Exception类，通过直接或间接的方式。

以下为与RuntimeError相关的实例,实例中创建了一个类，基类为RuntimeError，用于在异常触发时输出更多的信息。

在try语句块中，用户自定义的异常后执行except块语句，变量 e 是用于创建Networkerror类的实例。

```python
class Networkerror(RuntimeError):
    def __init__(self, arg):
        self.args = arg
```

在你定义以上类后，你可以触发该异常，如下所示：

```python
try:
    raise Networkerror("Bad hostname")
except Networkerror,e:
    print e.args
```

