# Python数据可视化
# Flask入门

## 关于Flask

### 了解框架

​	Flask作为Web框架，它的作用主要是为了开发Web应用程序。

​	1.所有Flask程序都必须创建一个程序实例。 

​	2.当客户端想要获取资源时，一般会通过浏览器发起HTTP请求。 

​	3.此时，Web服务器使用一种名为WEB服务器网关接口的WSGI（Web Server Gateway Interface） 协议，把来自客户端的请求都交给Flask程序实例。

​	4.Flask使用Werkzeug来做路由分发（URL请求和视图函数之间的对应关系）。根据每个URL请求， 找到具体的视图函数。 

​	5.在Flask程序中，路由一般是通过程序实例的装饰器实现。通过调用视图函数，获取到数据后，把 数据传入HTML模板文件中，模板引擎负责渲染HTTP响应数据，然后由Flask返回响应数据给浏览 器，最后浏览器显示返回的结果。

### 为什么要用web框架

​		web网站发展至今，特别是服务器端，涉及到的知识、内容，非常广泛。这对程序员的要求会越来越 高。如果采用成熟，稳健的框架，那么一些基础的工作，比如，网络操作、数据库访问、会话管理等都 可以让框架来处理，那么程序开发人员可以把精力放在具体的业务逻辑上面。使用Web框架开发Web应 用程序可以降低开发难度，提高开发效率。

### Flask框架的诞生

​		Flask诞生于2010年，是Armin ronacher（人名）用Python语言基于Werkzeug工具箱编写的轻量级 Web开发框架。它主要面向需求简单的小应用。

​		 Flask本身相当于一个内核，其他几乎所有的功能都要用到扩展（邮件扩展Flask-Mail，用户认证FlaskLogin），都需要用第三方的扩展来实现。比如可以用Flask-extension加入ORM、窗体验证工具，文件 上传、身份验证等。Flask没有默认使用的数据库，你可以选择MySQL，也可以用NoSQL。其 WSGI 工 具箱采用 Werkzeug（路由模块） ，模板引擎则使用 Jinja2 。

​		 可以说Flask框架的核心就是Werkzeug和Jinja2。

​		 Python最出名的框架要数Django，此外还有Flask、Tornado等框架。虽然Flask不是最出名的框架，但 是Flask应该算是最灵活的框架之一，这也是Flask受到广大开发者喜爱的原因。

### Flask扩展包

Flask-SQLalchemy：操作数据库；

 Flask-migrate：管理迁移数据库；

 Flask-Mail:邮件；

 Flask-WTF：表单； 

Flask-script：插入脚本；

 Flask-Login：认证用户状态；

 Flask-RESTful：开发REST API的工具；

 Flask-Bootstrap：集成前端Twitter Bootstrap框架；

 Flask-Moment：本地化日期和时间；

### 从helloWorld开始

新建文件hello.py

```python
# 导入Flask类
from flask import Flask
#Flask类接收一个参数__name__
app = Flask(__name__)
# 装饰器的作用是将路由映射到视图函数index
@app.route('/')
def index():
	return 'Hello World'
# Flask应用程序实例的run方法启动WEB服务器
if __name__ == '__main__':
	app.run()
```

### pycharm开启debug模式

Debug模式的开启，可以更好的定位错误，还可以既是刷新修改的页面，不用重启服务器。 

```python
app.run(debug=True) #Pycharm中不起作用
```

在运行的环境配置中，勾选Flask Debug

![image-20220120162351652](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220120162351652.png?raw=true)

### 给路由传参示例

**路由路径不可重复**

有时我们需要将同一类URL映射到同一个视图函数处理，比如：使用同一个视图函数 来显示不同用户的 个人信息。 通过向规则参数添加变量部分，可以动态构建URL。此变量部分标记为。它作为关键字参数传递给与规 则相关联的函数。

```python
from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


@app.route('/user/<name>')
def welcome(name):
    return '你好，%s' % name


if __name__ == '__main__':
    app.run()

```

```python
# 路由传递的参数默认当做string处理，这里指定int，尖括号中冒号后面的内容是动态的
@app.route('/user/<int:id>')
def hello_itcast(id):
	return 'hello ，welcome user %d' %id
```

除了默认字符串变量部分之外，还可以使用以下转换器构建规则：

| 序号 | 转换器和描述                 |
| ---- | ---------------------------- |
| 1    | int接受整数                  |
| 2    | float对于浮点值              |
| 3    | path接受用作目录分隔符的斜杠 |

## 模板

​		视图函数的主要作用是生成请求的响应，这是最简单的请求。实际上，视图函数有两个作用：处理 业务逻辑和返回响应内容。在大型应用中，把业务逻辑和表现内容放在一起，会增加代码的复杂度和维 护成本。本节学到的模板，它的作用即是承担视图函数的另一个作用，即返回响应内容。 模板其实是一 个包含响应文本的文件，其中用占位符（变量）表示动态部分，告诉模板引擎其具体值需要从使用的数 据中获取。使用真实值替换变量，再返回最终得到的字符串，这个过程称为“渲染”。Flask使用Jinja2这 个模板引擎来渲染模板。Jinja2能识别所有类型的变量，包括{}。 Jinja2模板引擎，Flask提供的 render_template函数封装了该模板引擎，render_template函数的第一个参数是模板的文件名，后面 的参数都是键值对，表示模板中变量对应的真实值。 

​		Jinja2官方文档（http://docs.jinkan.org/docs/jinja2/）

模板简单使用：

```python
@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/user/<name>')
def hello_user(name):
    return render_template('index.html',name=name)
```

### 路由

**反向路由:**

Flask提供了url_for()辅助函数，可以使用程序URL映射中保存的信息生成URL；

url_for()接收视图函数 名作为参数，返回对应的URL；

如调用url_for('index',_external=True)返回的是绝对地址，在下面这个示例中是http://127.0.0.1:5000/index。

```python
#返回给用户渲染后的网页文件
@app.route('/index')
def index():
	return render_template('index.html')

@app.route('/user/')
def redirect():
	return url_for('index',_external=True)
```

url_for()函数对于动态构建特定函数的URL非常有用。该函数接受函数的名称作为第一个参数，以及 一个或多个关键字参数，每个参数对应于URL的变量部分。 以下脚本演示了如何使用url_for()函数：

```python
from flask import Flask, redirect, url_for
app = Flask(name)
@app.route('/admin')
def hello_admin():
	return 'Hello Admin'
@app.route('/guest/')
def hello_guest(guest):
	return 'Hello %s as Guest' % guest
@app.route('/user/')
def hello_user(name):
	if name =='admin':
		return redirect(url_for('hello_admin'))
	else:
		return redirect(url_for('hello_guest',guest = name))
if name == 'main':
	app.run(debug = True)
```

上述脚本有一个函数user(name)，它接受来自URL的参数的值。 

User()函数检查接收的参数是否与'admin'匹配。如果匹配，则使用url_for()将应用程序重定向到 hello_admin()函数，否则重定向到将接收的参数作为guest参数传递给它的hello_guest()函数。

 保存上面的代码并从Python shell运行。 打开浏览器并输入URL - http://localhost:5000/user/admin 浏览器中的应用程序响应是：

```
Hello Admin
```

在浏览器中输入以下URL - http://localhost:5000/user/blackme 应用程序响应现在更改为：

```
Hello blackme as Guest
```

### 变量

​		在模板中{{ variable }}结构表示变量，是一种特殊的占位符，告诉模板引擎这个位置的值，从渲染模板时使用的数据中获取；

​		Jinja2除了能识别基本类型的变量，还能识别{}；

html代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<p>{{mydict['key']}}</p>
<p>{{mylist[1]}}</p>
<p>
    {% for data in list%}
    	{{data}}
   	{% endfor %}
</p>
<p>{{mylist[myvariable]}}</p>
</body>
</html>
```

python代码：

```python
from flask import Flask,render_template
app = Flask(__name__)

@app.route('/')
def index():
	mydict = {'key':'silence is gold'}
	mylist = ['Speech', 'is','silver']
	myintvar = 0
	return render_template('vars.html',
							mydict=mydict,
							mylist=mylist,
							myintvar=myintvar
							)
if __name__ == '__main__':
	app.run(debug=True)
```

### 表单

​		web表单是web应用程序的基本功能。 

​		它是HTML页面中负责数据采集的部件。表单有三个部分组成：表单标签、表单域、表单按钮。表 单允许用户输入数据，负责HTML页面数据采集，通过表单将用户输入的数据提交给服务器。 

​		Flask 将表单数据发送到模板 。

​		在URL规则中指定http方法。触发函数接收的Form数据可以以字典对象的形式收 集它并将其转发到模板以在相应的网页上呈现它。 在以下示例中，'/' URL会呈现具有表单的网页（student.html）。填入的数据会发布到触发 result()函 数的'/result' URL。 

​		results()函数收集字典对象中的request.form中存在的表单数据，并将其发送给result.html。 该模板动态呈现表单数据的HTML表格。

student.html代码：

```html
<!--动态网址根路径{{url_for('result')}}-->
<form action = "http://localhost:5000/result; method = "POST">	
	<p>Name <input type = "text" name = "Name" /></p>
	<p>Physics <input type = "text" name = "Physics" /></p>
	<p>Chemistry <input type = "text" name = "chemistry" /></p>
	<p>Maths <input type ="text" name = "Mathematics" /></p>
	<p><input type = "submit" value = "submit" /></p>
</form>
```

result.html的代码

```html
<!doctype html>
<table border = 1>
	{% for key, value in result.items() %}
		<tr>
			<th> {{ key }} </th>
			<td> {{ value }} </td>
		</tr>
	{% endfor %}
</table>
```

python代码：

```python
from flask import Flask, render_template, request
app = Flask(name)
@app.route('/')
def student():
	return render_template('student.html')
@app.route('/result',methods = ['POST', 'GET'])
def result():
	if request.method == 'POST':
		result = request.form
		return render_template("result.html",result = result)
if name == 'main':
	app.run(debug = True)
```

# WordCloud应用

## WordCloud示例

1.第一步：http://www.lfd.uci.edu/~gohlke/pythonlibs/#wordcloud 页面下载所需的wordcloud模块 的whl文件，这里选择 wordcloud-1.8.1-cp39-cp39-win_amd64.whl 版本。 注意：下载的版本！！ cp后面是你的python版本，例如：3.9.10就是cp39 查看python的版本号，可以在命令提示符界面下输入：python -V

![image-20220120224906099](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220120224906099.png?raw=true)

2.第二步：下载后进入存储该文件的路径，cmd打开dos界面，cd进你们刚刚下载到的文件路径 

3.第三步：执行“pip install  wordcloud-1.8.1-cp39-cp39-win_amd64.whl”，安装成功。

![image-20220120231058572](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220120231058572.png?raw=true)

## WordCount的例子

```python
import jieba        #分词
from matplotlib import pyplot as plt    #绘图，数据可视化
from wordcloud import WordCloud         #词云
from PIL import Image                   #图片处理
import numpy as np                      #矩阵运算
import sqlite3                          #数据库


#准备词云所需的文字（词）
con = sqlite3.connect('movie.db')
cur = con.cursor()
sql = 'select instroduction from movie250'
data = cur.execute(sql)
text = ""
for item in data:
    text =  text + item[0]
    #print(item[0])
#print(text)
cur.close()
con.close()

#分词
cut = jieba.cut(text)
string = ' '.join(cut)
print(len(string))


img = Image.open(r'.\static\assets\img\tree.jpg')   #打开遮罩图片
img_array = np.array(img)   #将图片转换为数组
wc = WordCloud(
    background_color='white',
    mask=img_array,
    font_path="msyh.ttc"    #字体所在位置：C:\Windows\Fonts
)
wc.generate_from_text(string)


#绘制图片
fig = plt.figure(1)
plt.imshow(wc)
plt.axis('off')     #是否显示坐标轴

plt.show()    #显示生成的词云图片

#输出词云图片到文件
#plt.savefig(r'.\static\assets\img\word.jpg',dpi=500)
```

## WordCloud的配置

```python
font_path : string  #字体路径，需要展现什么字体就把该字体路径+后缀名写上，如：font_path = '黑体.ttf'
 
width : int (default=400) #输出的画布宽度，默认为400像素
 
height : int (default=200) #输出的画布高度，默认为200像素
 
prefer_horizontal : float (default=0.90) #词语水平方向排版出现的频率，默认 0.9 （所以词语垂直方向排版出现频率为 0.1 ）
 
mask : nd-array or None (default=None) #如果参数为空，则使用二维遮罩绘制词云。如果 mask 非空，设置的宽高值将被忽略，遮罩形状被 mask 取代。除全白（#FFFFFF）的部分将不会绘制，其余部分会用于绘制词云。如：bg_pic = imread('读取一张图片.png?raw=true')，背景图片的画布一定要设置为白色（#FFFFFF），然后显示的形状为不是白色的其他颜色。可以用ps工具将自己要显示的形状复制到一个纯白色的画布上再保存，就ok了。
 
scale : float (default=1) #按照比例进行放大画布，如设置为1.5，则长和宽都是原来画布的1.5倍
 
min_font_size : int (default=4) #显示的最小的字体大小
 
font_step : int (default=1) #字体步长，如果步长大于1，会加快运算但是可能导致结果出现较大的误差
 
max_words : number (default=200) #要显示的词的最大个数
 
stopwords : set of strings or None #设置需要屏蔽的词，如果为空，则使用内置的STOPWORDS
 
background_color : color value (default=”black”) #背景颜色，如background_color='white',背景颜色为白色
 
max_font_size : int or None (default=None) #显示的最大的字体大小
 
mode : string (default=”RGB”) #当参数为“RGBA”并且background_color不为空时，背景为透明
 
relative_scaling : float (default=.5) #词频和字体大小的关联性
 
color_func : callable, default=None #生成新颜色的函数，如果为空，则使用 self.color_func
 
regexp : string or None (optional) #使用正则表达式分隔输入的文本
 
collocations : bool, default=True #是否包括两个词的搭配
 
colormap : string or matplotlib colormap, default=”viridis” #给每个单词随机分配颜色，若指定color_func，则忽略该方法
 
random_state : int or None  #为每个单词返回一个PIL颜色



fit_words(frequencies)  #根据词频生成词云
generate(text)  #根据文本生成词云
generate_from_frequencies(frequencies[, ...])   #根据词频生成词云
generate_from_text(text)    #根据文本生成词云
process_text(text)  #将长文本分词并去除屏蔽词（此处指英语，中文分词还是需要自己用别的库先行实现，使用上面的 fit_words(frequencies) ）
recolor([random_state, color_func, colormap])   #对现有输出重新着色。重新上色会比重新生成整个词云快很多
to_array()  #转化为 numpy array
to_file(filename)   #输出到文件
```

