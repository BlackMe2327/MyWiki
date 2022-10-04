# Python常用库详解
# Urlib库（web请求）

## 发起get请求

```python
# @Time:2022/1/12 21:57
# @Author:blackme
# @File:testUrlib.py
# @Software:PyCharm
# -*- coding: UTF-8 -*-
import urllib.request
response = urllib.request.urlopen("http://www.baidu.com")
print(response.read().decode("utf-8"))  #对获取到的源码进行utf-8的解码
```

## 发起post请求

```python
import urllib.parse
# 一个post请求(用在模拟用户登录的时候)
data = bytes(urllib.parse.urlencode({"hello": "world"}), encoding="utf-8")
response = urllib.request.urlopen("http://httpbin.org/post", data=data)
print(response.read().decode("utf-8"))  # 对获取到的源码进行utf-8的解码
```

## 设置请求超时时间

```python
#3.设置超时时间1秒
response = urllib.request.urlopen("http://www.baidu.com",timeout=1)
```

## 获取响应头信息（response headers）

### 获取全部响应头信息

```python
#4.获取响应头信息
response = urllib.request.urlopen("http://httpbin.org/get")
print(response.getheaders())
```

### 获取响应头中某个信息

```python
#5.获取响应头中某个信息
response = urllib.request.urlopen("http://httpbin.org/get")
print(response.getheader("Content-Type"))
```

## 伪装成浏览器发起请求

```python
url = "http://httpbin.org/post"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"
}
data = bytes(urllib.parse.urlencode({'name': 'blackme'}), encoding="utf-8")
req = urllib.request.Request(url=url, data=data, headers=headers, method="POST")
response = urllib.request.urlopen(req)
print(response.read().decode("utf-8"))
```

# Bs4库(文档解析)

## 结构

BeautifulSoup将复杂的html文档转换成一个复杂的树形结构，每个节点都是Python对象，所有对象可以归纳为4种

1.Tag

2.NavigableString

3.BeautifulSoup

4.Comment

**示例文件：**

```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta content="always" name="referrer">
    <meta name="theme-color" content="#ffffff">
    <meta name="description" content="全球领先的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="search" type="application/opensearchdescription+xml" href="/content-search.xml" title="百度搜索">
    <link rel="icon" sizes="any" mask="" href="//www.baidu.com/img/baidu_85beaf5496f291521eb75ba38eacbd87.svg">
    <link rel="dns-prefetch" href="//dss0.bdstatic.com">
    <link rel="dns-prefetch" href="//dss1.bdstatic.com">
    <link rel="dns-prefetch" href="//ss1.bdstatic.com">
    <link rel="dns-prefetch" href="//sp0.baidu.com">
    <link rel="dns-prefetch" href="//sp1.baidu.com">
    <link rel="dns-prefetch" href="//sp2.baidu.com">
    <title>百度一下，你就知道</title>
</head>
<body link="#0000cc">
<div id="rapper">
    <div ir="head">
        <div class="head_warpper">
            <a class="mnav" href="http://news.baidu.com" name="tj_renews"><!--新闻--></a>
            <a class="mnav" href="http://news.baidu.com" name="tj_renews">新闻</a>
        </div>
    </div>
</div>
</body>
</html>
```

### .Tag

获取html标签及其内容，只拿到获取到的第一个标签和内容

```python
file = open("./baidu.html", "rb")
html = file.read()
bs = BeautifulSoup(html, "html.parser")  # 指定解析器为html.parser,解析html文档，得到bs树形结构
print(bs.title)	#获取标签及内容，类型为Tag
```

### NavigableString

html标签里的内容

```python
file = open("./baidu.html", "rb")
html = file.read()
bs = BeautifulSoup(html, "html.parser")  # 指定解析器为html.parser,解析html文档，得到bs树形结构
print(bs.title.string)	#获取标签内的内容，类型为NavigableString
print(bs.a.attrs)  	#获取标签内的属性，以字典类型返回
```

### BeautifulSoup

BeautifulSoup表示整个文档

```python
file = open("./baidu.html", "rb")
html = file.read()
bs = BeautifulSoup(html, "html.parser")  # 指定解析器为html.parser,解析html文档，得到bs树形结构
print(bs)  	#打印整个html文档的树形结构
```

### Comment

Comment表示注释

```python
file = open("./baidu.html", "rb")
html = file.read()
bs = BeautifulSoup(html, "html.parser")  # 指定解析器为html.parser,解析html文档，得到bs树形结构
print(bs.a.string)  	#打印整个html文档的树形结构
```

## 文档遍历（更多操作大多利用文档搜索）

### .contents:获取Tag的所有子节点，返回一个list

```python
file = open("./baidu.html", "rb")
html = file.read()
bs = BeautifulSoup(html, "html.parser")  # 指定解析器为html.parser,解析html文档，得到bs树形结构
#tag的.contents 属性可以将tag的子节点以列表的方式输出
print(bs.head.contents)
#用列表索引来获取它的某一个元素
print(bs.head.contents[1])
```

### .chlidren:获取Tag中的所有子节点，返回一个生成器

```python
file = open("./baidu.html", "rb")
html = file.read()
bs = BeautifulSoup(html, "html.parser")  # 指定解析器为html.parser,解析html文档，得到bs树形结构
for child bs.body.children:
    print(child)
```

### .descendants:获取Tag的所有子孙节点

### .strings:如果Tag包含多个字符串，即在子孙节点中有内容，可以用此获取，而后进行遍历

### .stripped_strings:与strings用法一样，只不过是可以去除那些多余的空白内容

### .parent:获取Tag的父节点

### .parents:递归得到父辈元素的所有节点，返回一个生成器

### .previous_sibling:获取当前Tag的上一个节点，属性通常是字符串或空白，真实结果是当前标签与上一个标签之间的顿号和换行符

### .next_sibling:获取当前Tag的下一个节点，属性通常是字符串或空白，真实结果是当前标签与下一个标签之间的顿号和换行符

### .previous_siblings:获取当前Tag的上面的所有兄弟节点，返回一个生成器

### .next_siblings:获取当前Tag的下面所有的兄弟节点，返回一个生成器

### .previous_element:获取解析过程中上一个被解析的对象(字符串或tag),可能与previous_sibling相同，但通常是不一样的

### .next_element:获取解析过程中下一个被解析的对象(字符串或tag),可能与next_sibling相同，但通常是不一样的

### .previous_elements:返回一个生成器，可以向前访问文档的解析内容

### .next_elements:返回一个生成器，可以向后访问文档的解析内容

### .has_attr:判断Tag是否包含属性

## 文档搜索

### find_all()

字符串过滤：会查找与字符串完全匹配的内容

```python
#find_all()查找所有某标签，返回类型为list
t_list = bs.find_all("a")
```

### search()



### 方法：传入一个函数，根据函数的要求来搜索

```python
def name_is_exists(tag):
    return tag.has_attr("name")
t_list=bs.find_all(name_is_exists)
print(t_list)
```

### kwargs参数

根据参数搜索，并且获取其所有子内容

```python
#kwargs 参数
t_list=bs.find_all(id="head")		#id为参数
for item in t_list:
    print(item)
t_list=bs.find_all(class_=True)		#class为参数
for item in t_list:
    print(item)
```

### text参数

```python
t_list=bs.find_all(text="hao123")           #一个文本
for item in t_list:
    print(item)
t_list=bs.find_all(text=["hao123","地图","贴吧"])   #多个文本
for item in t_list:
    print(item)
```

### limit参数

限定获取个数

```python
t_list=bs.find_all("a",limit=3)
for item in t_list:
    print(item)
```

### css选择器

```python
#css选择器	
t_list = bs.select("title")		#通过标签查找
for item in t_list:
    print(item)
t_list = bs.select(".mnav")		#通过类名查找
for item in t_list:
    print(item)
t_list = bs.select("#head")		#通过id查找
for item in t_list:
    print(item)
t_list = bs.select("a[class=mnav]")	#通过标签下属性查找，a标签下的class=mnav的属性来查找
for item in t_list:
    print(item)
t_list = bs.select("head > title")	#查找子标签下的内容
for item in t_list:
    print(item)
t_list = bs.select(".mnav ~ .bri")	#查找兄弟标签的内容
print(t_list[0].get_text())
```

# Re库(正则表达式)

## 常用操作符

| 操作符 | 说明                             | 实例                                    |
| ------ | -------------------------------- | --------------------------------------- |
| .      | 表示单个字符                     |                                         |
| [ ]    | 字符集，对单个字符给出取值范围   | [abc]表示a、b、c，[a-z]表示a到z单个字符 |
| [^ ]   | 非字符集，对单个字符给出排除范围 | [^abc]表示非a或b或c的单个字符           |
| *      | 前一个字符0次或者无限次扩展      | abc*表示，ab、abc、abcc、abccc等        |
| +      | 前一个字符1次或者无限次扩展      | abc+表示abc、abcc、abccc等              |
| ?      | 前一个字符0次或者1次扩展         | abc?表示ab、abc                         |
| \|     | 左右表达式任意一个               | abc\|def表示abc、def                    |
| {m}    | 扩展前一个字符m次                | ab{2}c表示abbc                          |
| {m,n}  | 扩展前一个字符m至n次（含n）      | ab{1,2}表示abc、abbc                    |
| ^      | 匹配字符串开头                   | ^abc表示abc且在一个字符串的开头         |
| $      | 匹配字符串结尾                   | abc$表示abc且在一个字符串的结尾         |
| ( )    | 分组标记，内部只能用 \| 操作符   | (abc)表示abc，(abc\|def)表示abc、def    |
| \d     | 数字，等价于[0-9]                |                                         |
| \w     | 单词字符，等价于[A-Za-z0-9_]     |                                         |

## Re主要功能函数

| 函数          | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| re.search()   | 在一个字符串中搜索匹配正则表达式的第一个位置，返回match对象  |
| re.match()    | 从一个字符串的开始位置起匹配正则表达式，返回match对象        |
| re.findall()  | 搜索字符串，以列表类型返回全部能匹配的子串                   |
| re.split()    | 将一个字符串按照正则表达式匹配结果进行分割，返回列表类型     |
| re.finditer() | 搜索字符串，返回一个匹配结果的迭代类型，每个迭代元素是match对象 |
| re.sub()      | 在一个字符串中替换所有匹配正则表达式的子串，返回替换后的字符串 |

## 匹配模式

正则表达式可以包含一些可选标志修饰符来控制匹配的模式。修饰符被指定为一个可选的标志。多个标志可以通过安慰OR(I)他们来指定。如re.I | re.M被设置成I和M标志

| 修饰符 | 描述                                                         |
| ------ | ------------------------------------------------------------ |
| re.I   | 使匹配对大小写不敏感                                         |
| re.L   | 左本地识别（locale-aware）匹配                               |
| re.M   | 多行匹配，影响^和$                                           |
| re.S   | 使 . 匹配包括换行在内的所有字符                              |
| re.U   | 根据Unicode字符集解析字符。这个标志影响\w,\W,\b,\B           |
| re.X   | 该标志通过给予你更灵活的格式以便你将正则表达式写得更易于理解 |

```python
import re
# search创建模式对象
pat = re.compile("AA")  # AA是正则表达式，用来验证其他字符串
m = pat.search("ABCAA")  # search字符串是被校验的内容
print(m)
# search不创建模式对象
m = re.search("asd", "Aasd")  # 前面是规则，后面是被校验的内容
print(m)
# findall
print(re.findall("a", "ASDajejejeja"))  # 前面字符串是规则，后面是被校验的内容
# sub
print(re.sub("a", "A", "abcdcasd"))  # 第一个参数是被替换的内容，第二个参数是替换后的内容，第三个参数是被校验的内容
# 建议在正则表达式中，被比较的内容前面加上r,可以不用担心转义字符的问题
```

# xlwt库(excel操作)

```python
import xlwt

workbook = xlwt.Workbook(encoding="utf-8")  # 创建workbook对象
worksheet = workbook.add_sheet('sheet1')  # 创建工作表
worksheet.write(0, 0, 'hello')  # 写入数据，第一个参数是行标，第二个参数表示列，第三个参数是内容
workbook.save('student.xls')  # 保存数据表
```

