# Python Json

## Json函数

| 方法         | 作用                                         |
| ------------ | -------------------------------------------- |
| json.dumps() | 将python对象编码成Json字符串                 |
| json.loads() | 将Json字符串解码成python对象                 |
| json.dump()  | 将python中的对象转化成json储存到文件中       |
| json.load()  | 将文件中的json的格式转化成python对象提取出来 |

## 类型区别

| Python         | Json   |
| -------------- | ------ |
| dict           | object |
| list,tuple     | array  |
| str,unicode    | string |
| int,long,float | number |
| True           | true   |
| False          | false  |
| None           | null   |

## json.dump()和json.dumps()的区别

> json.dumps()是把python对象转换成json对象的一个过程，生成的是字符串。
> json.dump()是把python对象转换成json对象生成一个fp的文件流，和文件相关。

## json.dumps()

```python
import json

p = {"name": "zhangsan", "age": 20, "address": "China"}

print(json.dumps(p))
```

输出结果：

```json
{"name": "zhangsan", "age": 20, "address": "China"}
```

### dumps()函数参数

```python
json.dumps(obj, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=None, separators=None, encoding="utf-8", default=None, sort_keys=False, **kw)
```

| 参数                 | 作用                                                         |
| -------------------- | ------------------------------------------------------------ |
| obj                  | 要转换成json的对象                                           |
| sort_keys=True       | 按照字典排序(a到z)输出。                                     |
| indent=2             | 根据数据格式缩进                                             |
| separators=(',',':') | 参数意思分别为不同dict项之间的分隔符和dict项内key和value之间的分隔符，把：和，后面的空格都除去了 |
| skipkeys=True        | 默认值是False，如果dict的keys内的数据不是python的基本类型(str,unicode,int,long,float,bool,None)，设置为False时，就会报TypeError的错误。此时设置成True，则会跳过这类key 。 |
| ensure_ascii=True    | 默认输出ASCLL码，如果改成False,就可以输出中文。              |
| check_circular=True  | 如果check_circular为False，则跳过对容器类型的循环引用检查，循环引用将导致溢出错误(或更糟的情况)。 |
| allow_nan=True       | 如果allow_nan为False，则ValueError将序列化超出范围的浮点值(nan、inf、-inf)，严格遵守JSON规范，而不是使用JavaScript等价值(nan、Infinity、-Infinity)。 |
| default=None         | **default**：default(obj)是一个函数，它应该返回一个可序列化的obj版本或引发类型错误。默认值只会引发类型错误。 |

## json.dump()

```python
import json

p = {"name": "zhangsan", "age": 20, "address": "China"}

filename = 'p.txt'
with open(filename, 'w') as f:  # 操作文件时，需要打开文件，最后手动关闭文件。通过使用with...as...不用手动关闭文件。当执行完内容后，自动关闭文件。
    json.dump(p, f)
```

### dump()函数参数

```python
json.dumps(obj,fp, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=None, separators=None, encoding="utf-8", default=None, sort_keys=False, **kw)
```

| 参数                 | 作用                                                         |
| -------------------- | ------------------------------------------------------------ |
| obj                  | 要转换成json的对象                                           |
| fp                   | 操作IO文件                                                   |
| sort_keys=True       | 按照字典排序(a到z)输出。                                     |
| indent=2             | 根据数据格式缩进                                             |
| separators=(',',':') | 参数意思分别为不同dict项之间的分隔符和dict项内key和value之间的分隔符，把：和，后面的空格都除去了 |
| skipkeys=True        | 默认值是False，如果dict的keys内的数据不是python的基本类型(str,unicode,int,long,float,bool,None)，设置为False时，就会报TypeError的错误。此时设置成True，则会跳过这类key 。 |
| ensure_ascii=True    | 默认输出ASCLL码，如果改成False,就可以输出中文。              |
| check_circular=True  | 如果check_circular为False，则跳过对容器类型的循环引用检查，循环引用将导致溢出错误(或更糟的情况)。 |
| allow_nan=True       | 如果allow_nan为False，则ValueError将序列化超出范围的浮点值(nan、inf、-inf)，严格遵守JSON规范，而不是使用JavaScript等价值(nan、Infinity、-Infinity)。 |
| default=None         | **default**：default(obj)是一个函数，它应该返回一个可序列化的obj版本或引发类型错误。默认值只会引发类型错误。 |

## json.load()和json.loads()的区别

> son.loads()是针对内存对象，将string转换为dict。
> json.load()针对文件句柄，将json格式的字符转换为dict，从文件中读取 (将string转换为dict)

## json.loads()

```python
import json
p = {"name": "zhangsan", "age": 20, "address": "China"}
p = json.dumps(p)  # 用dumps将python编码成json字符串
print(p)
print(json.loads(p))  # 用loads将json编码成python
```

输出结果：

```json
{"name": "zhangsan", "age": 20, "address": "China"}
{'name': 'zhangsan', 'age': 20, 'address': 'China'}
```

## json.load()

```python
import json
p = {"name": "zhangsan", "age": 20, "address": "China"}

filename = 'p.txt'
with open(filename, 'w') as f:  
    json.dump(p, f)
with open(filename) as f1:	# 从p.txt中将json解析出来
    print(json.load(f1))
```

输出结果：

```json
{'name': 'zhangsan', 'age': 20, 'address': 'China'}
```