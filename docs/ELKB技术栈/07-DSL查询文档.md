# DSL查询文档

elasticsearch的查询依然是基于JSON风格的DSL来实现的。

## DSL查询分类

Elasticsearch提供了基于JSON的DSL（[Domain Specific Language](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html)）来定义查询。常见的查询类型包括：

- **查询所有**：查询出所有数据，一般测试用。例如：match_all

- **全文检索（full text）查询**：利用分词器对用户输入内容分词，然后去倒排索引库中匹配。例如：
  - match_query
  - multi_match_query
- **精确查询**：根据精确词条值查找数据，一般是查找keyword、数值、日期、boolean等类型字段。例如：
  - ids
  - range
  - term
- **地理（geo）查询**：根据经纬度查询。例如：
  - geo_distance
  - geo_bounding_box
- **复合（compound）查询**：复合查询可以将上述各种查询条件组合起来，合并查询条件。例如：
  - bool
  - function_score

### 查询语法

```json
GET /indexName/_search
{
  "query": {
    "查询类型": {
      "查询条件": "条件值"
    }
  }
}
```

### 示例

- 查询类型为match_all
- 没有查询条件.

```json
// 查询所有
GET /indexName/_search
{
  "query": {
    "match_all": {
    }
  }
}
```

## 全文检索查询

### 全文检索基本流程

全文检索查询的基本流程如下：

- 对用户搜索的内容做分词，得到词条
- 根据词条去倒排索引库中匹配，得到文档id
- 根据文档id找到文档，返回给用户

### 基本语法

常见的全文检索查询包括：

- match查询：单字段查询
- multi_match查询：多字段查询，任意一个字段符合条件就算符合查询条件

match查询语法如下：



```json
GET /indexName/_search
{
  "query": {
    "match": {
      "FIELD": "TEXT"
    }
  }
}
```

mulit_match语法如下：

```json
GET /indexName/_search
{
  "query": {
    "multi_match": {
      "query": "TEXT",
      "fields": ["FIELD1", " FIELD12"]
    }
  }
}
```

### 示例

```json
#match查询
{
  "query": {
    "match": {
      "all": "外滩"
    }
  }
}
```

```json
#mylti_match查询
GET /hotel/_search
{
  "query": {
    "multi_match": {
      "query": "外滩如家",
      "fields": ["brand","name","business"]
    }
  }
}
```

以上两种查询结果是一样的。

因为我们将brand、name、business值都利用copy_to复制到了all字段中。因此你根据三个字段搜索，和根据all字段搜索效果当然一样了。

但是，搜索字段越多，对查询性能影响越大，因此建议采用copy_to，然后单字段查询的方式。

## 精确查询

精确查询一般是查找keyword、数值、日期、boolean等类型字段。所以**不会**对搜索条件分词。常见的有：

- term：根据词条精确值查询
- range：根据值的范围查询

### term精确查询

因为精确查询的字段是不分词的字段，因此查询的条件也必须是**不分词**的词条。查询时，用户输入的内容跟自动值完全匹配时才认为符合条件。如果用户输入的内容过多，反而搜索不到数据。

#### 语法说明

```json
# term 精确查询
GET /indexName/_search
{
  "query": {
    "term": {
      "FIELD": {
        "value": "VALUE"
      }
    }
  }
}
```

#### 示例

```json
# term精确查询
GET /hotel/_search
{
  "query": {
    "term": {
      "city": {
        "value": "上海"
      }
    }
  }
}
```

### range精确查询

#### 语法说明

```json
# range精确查询
GET /indexName/_search
{
  "query": {
    "range": {
      "FIELD": {
        "gte": 10, # 这里的gte代表大于等于，gt则代表大于
        "lte": 20 # lte代表小于等于，lt则代表小于
      }
    }
  }
}
```

#### 示例

```json
# range精确查询
GET /hotel/_search
{
  "query": {
    "range": {
      "price": {
        "gte": 1000,
        "lte": 3000
      }
    }
  }
}
```

## 地理坐标查询

所谓的地理坐标查询，其实就是根据经纬度查询，官方文档：https://www.elastic.co/guide/en/elasticsearch/reference/current/geo-queries.html

### geo_bounding_box矩形范围查询

查询时，需要指定矩形的**左上**、**右下**两个点的坐标，然后画出一个矩形，落在该矩形内的都是符合条件的点。

#### 语法说明

```json
# geo_bounding_box查询
GET /indexName/_search
{
  "query": {
    "geo_bounding_box": {
      "FIELD": {
        "top_left": {          #左上点
          "lat": 31.1,
          "lon": 121.5
        },
        "bottom_right": {      #右下点
          "lat": 30.9,
          "lon": 121.7
        }
      }
    }
  }
}
```

### geo_distance附近查询

附近查询，也叫做距离查询（geo_distance）：查询到指定中心点小于某个距离值的所有文档。

在地图上找一个点作为圆心，以指定距离为半径，画一个圆，落在圆内的坐标都算符合条件：

#### 语法说明

```json
# geo_distance 查询
GET /indexName/_search
{
  "query": {
    "geo_distance": {
      "distance": "15km", # 半径
      "FIELD": "31.21,121.5"  # 圆心
    }
  }
}
```

#### 示例

```json
# geo_distance 附近查询
GET /hotel/_search
{
  "query": {
    "geo_distance":{
      "distance":"15km",
      "location":"31.21,121.5"
    }
  }
}
```

## 复合查询

复合（compound）查询：复合查询可以将其它简单查询组合起来，实现更复杂的搜索逻辑。常见的有两种：

- fuction score：算分函数查询，可以控制文档相关性算分，控制文档排名
- bool query：布尔查询，利用逻辑关系组合多个其它的查询，实现复杂搜索

### 相关性算分

当我们利用match查询时，文档结果会根据与搜索词条的关联度打分（_score），返回结果时按照分值降序排列。

- TF-IDF算法
- BM25算法

TF-IDF算法有一各缺陷，就是词条频率越高，文档得分也会越高，单个词条对文档影响较大。而BM25则会让单个词条的算分有一个上限。

#### TF-IDF算法

![image-20220214192600083](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220214192600083.png?raw=true)

#### BM25算法

后来的5.1版本升级中，elasticsearch将算法改进为BM25算法，公式如下：

![image-20220214192727563](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220214192727563.png?raw=true)

### 算分函数查询

人为控制相关性算分，就需要利用elasticsearch中的function score 查询了。

#### 语法说明

![image-20220214193402442](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220214193402442.png?raw=true)

function score 查询中包含四部分内容：

- **原始查询**条件：query部分，基于这个条件搜索文档，并且基于BM25算法给文档打分，**原始算分**（query score)
- **过滤条件**：filter部分，符合该条件的文档才会重新算分
- **算分函数**：符合filter条件的文档要根据这个函数做运算，得到的**函数算分**（function score），有四种函数
  - weight：函数结果是常量
  - field_value_factor：以文档中的某个字段值作为函数结果
  - random_score：以随机数作为函数结果
  - script_score：自定义算分函数算法
- **运算模式**：算分函数的结果、原始查询的相关性算分，两者之间的运算方式，包括：
  - multiply：相乘
  - replace：用function score替换query score
  - 其它，例如：sum、avg、max、min

#### function score的运行流程

1. 根据**原始条件**查询搜索文档，并且计算相关性算分，称为**原始算分**（query score）
2. 根据**过滤条件**，过滤文档
3. 符合**过滤条件**的文档，基于**算分函数**运算，得到**函数算分**（function score）
4. 将**原始算分**（query score）和**函数算分**（function score）基于**运算模式**做运算，得到最终结果，作为相关性算分。

#### 示例

需求：给“如家”这个品牌的酒店排名靠前一些

翻译一下这个需求，转换为之前说的四个要点：

- 原始条件：不确定，可以任意变化
- 过滤条件：brand = "如家"
- 算分函数：可以简单粗暴，直接给固定的算分结果，weight
- 运算模式：比如求和

因此最终的DSL语句如下：

```json
#function score查询
GET /hotel/_search
{
  "query": {
    "function_score": {
      "query": {			# 原始查询，可以是任意条件
        "match": {
          "all": "外滩"
        }
      },
      "functions": [		# 算分函数
        {
          "filter": {		# 满足的条件，品牌必须是如家
            "term": {
              "brand": "如家" # "如家"
            }
          },
          "weight": 10			# 算分权重
        }
      ],
      "boost_mode": "sum"	# 加权模式，求和
    }
  }
}
```

#### 总结

function score query定义的三要素是什么？

- 过滤条件：哪些文档要加分
- 算分函数：如何计算function score
- 加权方式：function score 与 query score如何运算

### 布尔查询

布尔查询是一个或多个查询子句的组合，每一个子句就是一个**子查询**。子查询的组合方式有：

- must：必须匹配每个子查询，类似“与”
- should：选择性匹配子查询，类似“或”
- must_not：必须不匹配，**不参与算分**，类似“非”
- filter：必须匹配，**不参与算分**

需要注意的是，搜索时，参与**打分的字段越多，查询的性能也越差**。因此这种多条件查询时，建议这样做：

- 搜索框的关键字搜索，是全文检索查询，使用must查询，参与算分
- 其它过滤条件，采用filter查询。不参与算分

#### 语法说明

```json
GET /hotel/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "city": "上海"
          }
        }
      ],
      "should": [
        {
          "term": {
            "brand": "华美达"
          }
        },
        {
          "term": {
            "brand": "皇冠假日"
          }
        }
      ],
      "must_not": [
        {
          "range": {
            "price": {
              "lte": 500
            }
          }
        }
      ],
      "filter": [
        {
          "range": {
            "price": {
              "gte": 45
            }
          }
        }
      ]
    }
  }
}
```

#### 示例

需求：搜索名字包含“如家”，价格不高于400，在坐标31.21,121.5周围10km范围内的酒店。

分析：

- 名称搜索，属于全文检索查询，应该参与算分。放到must中
- 价格不高于400，用range查询，属于过滤条件，不参与算分。放到must_not中
- 周围10km范围内，用geo_distance查询，属于过滤条件，不参与算分。放到filter中

```json
# bool 查询
GET /hotel/_search
{
  "query": {
    "bool": {
      "must": [
        {"match": {
          "name": "如家"
        }}
      ],
      "must_not": [
        {"range": {
          "price": {
            "gt": 400
          }
        }}
      ],
      "filter": [
        {"geo_distance": {
          "distance": "10km",
          "location": {
            "lat": 31.21,
            "lon": 121.5
          }
        }}
      ]
    }
  }
}
```

#### 总结

bool查询有几种逻辑关系？

- must：必须匹配的条件，可以理解为“与”
- should：选择性匹配的条件，可以理解为“或”
- must_not：必须不匹配的条件，不参与打分
- filter：必须匹配的条件，不参与打分