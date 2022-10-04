# 安装ElasticSearch、Kibane、IK分词器
# 部署单点es

## 创建网络

因为我们还需要部署kibana容器，因此需要让es和kibana容器互联。这里先创建一个网络：

```sh
docker network create es-net
```

## 加载镜像

在Dockerhub搜索elasticsearch镜像

![image-20220212164343309](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220212164343309.png?raw=true)

将下载好的镜像上传到虚拟机中，然后运行命令加载即可：

```sh
# 导入数据
docker load -i es.tar
```

同理还有`kibana`的tar包也需要这样做。

## 运行

运行docker命令，部署单点es：

```sh
docker run -d \
	--name es \
    -e "ES_JAVA_OPTS=-Xms1024m -Xmx1024m" \
    -e "discovery.type=single-node" \
    -v es-data:/usr/share/elasticsearch/data \
    -v es-plugins:/usr/share/elasticsearch/plugins \
    --privileged \
    --network es-net \
    -p 9200:9200 \
    -p 9300:9300 \
elasticsearch:7.12.1
```

命令解释：

- `-e "cluster.name=es-docker-cluster"`：设置集群名称
- `-e "http.host=0.0.0.0"`：监听的地址，可以外网访问
- `-e "ES_JAVA_OPTS=-Xms512m -Xmx512m"`：内存大小
- `-e "discovery.type=single-node"`：非集群模式
- `-v es-data:/usr/share/elasticsearch/data`：挂载逻辑卷，绑定es的数据目录
- `-v es-logs:/usr/share/elasticsearch/logs`：挂载逻辑卷，绑定es的日志目录
- `-v es-plugins:/usr/share/elasticsearch/plugins`：挂载逻辑卷，绑定es的插件目录
- `--privileged`：授予逻辑卷访问权
- `--network es-net` ：加入一个名为es-net的网络中
- `-p 9200:9200`：端口映射配置

在浏览器中输入：http://192.168.116.131:9200 即可看到elasticsearch的响应结果：

![image-20220212165848638](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220212165848638.png?raw=true)

# 部署kibana

kibana可以给我们提供一个elasticsearch的可视化界面，便于我们学习。

## 部署

运行docker命令，部署kibana

```sh
docker run -d \
--name kibana \
-e ELASTICSEARCH_HOSTS=http://es:9200 \
--network=es-net \
-p 5601:5601  \
kibana:7.12.1
```

- `--network es-net` ：加入一个名为es-net的网络中，与elasticsearch在同一个网络中
- `-e ELASTICSEARCH_HOSTS=http://es:9200"`：设置elasticsearch的地址，因为kibana已经与elasticsearch在一个网络，因此可以用容器名直接访问elasticsearch
- `-p 5601:5601`：端口映射配置

kibana启动一般比较慢，需要多等待一会，可以通过命令：

```sh
docker logs -f kibana
```

查看运行日志，当查看到下面的日志，说明成功：

![image-20220212170126670](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220212170126670.png?raw=true)

在浏览器输入地址访问：http://192.168.116.131:5601，即可看到结果

![image-20220212170205510](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220212170205510.png?raw=true)

## DevTools

kibana中提供了一个DevTools界面：

![image-20220212170323133](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220212170323133.png?raw=true)

这个界面中可以编写DSL来操作elasticsearch。并且对DSL语句有自动补全功能。

![image-20220212170629185](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220212170629185.png?raw=true)

# 安装IK分词器

## 在线安装ik插件（较慢）

```shell
# 进入容器内部
docker exec -it elasticsearch /bin/bash

# 在线下载并安装
./bin/elasticsearch-plugin  install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.12.1/elasticsearch-analysis-ik-7.12.1.zip

#退出
exit
#重启容器
docker restart elasticsearch
```

## 离线安装ik插件（推荐）

### 查看数据卷目录

安装插件需要知道elasticsearch的plugins目录位置，而我们用了数据卷挂载，因此需要查看elasticsearch的数据卷目录，通过下面命令查看:

```sh
docker volume inspect es-plugins
```

显示结果：

```json
[
    {
        "CreatedAt": "2022-02-12T03:56:11-05:00",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/es-plugins/_data",
        "Name": "es-plugins",
        "Options": null,
        "Scope": "local"
    }
]
```

说明plugins目录被挂载到了：`/var/lib/docker/volumes/es-plugins/_data `这个目录中。

### 解压分词器安装包

将ik分词器解压缩，重命名为ik

### 上传到es容器的插件数据卷中

也就是`/var/lib/docker/volumes/es-plugins/_data `:

### 重启es容器

```shell
docker restart es
```

```shell
# 查看es日志
docker logs -f es
```

### 测试

IK分词器包含两种模式：

* `ik_smart`：最少切分
* `ik_max_word`：最细切分

```json
#测试分词器
GET /_analyze
{
  "text": "谁把爷电动车骑走了？fuck you",
  "analyzer": "ik_max_word"
}
```

结果：

```json
{
  "tokens" : [
    {
      "token" : "谁",
      "start_offset" : 0,
      "end_offset" : 1,
      "type" : "CN_CHAR",
      "position" : 0
    },
    {
      "token" : "把",
      "start_offset" : 1,
      "end_offset" : 2,
      "type" : "CN_CHAR",
      "position" : 1
    },
    {
      "token" : "爷",
      "start_offset" : 2,
      "end_offset" : 3,
      "type" : "CN_CHAR",
      "position" : 2
    },
    {
      "token" : "电动车",
      "start_offset" : 3,
      "end_offset" : 6,
      "type" : "CN_WORD",
      "position" : 3
    },
    {
      "token" : "电动",
      "start_offset" : 3,
      "end_offset" : 5,
      "type" : "CN_WORD",
      "position" : 4
    },
    {
      "token" : "车骑",
      "start_offset" : 5,
      "end_offset" : 7,
      "type" : "CN_WORD",
      "position" : 5
    },
    {
      "token" : "骑走",
      "start_offset" : 6,
      "end_offset" : 8,
      "type" : "CN_WORD",
      "position" : 6
    },
    {
      "token" : "走了",
      "start_offset" : 7,
      "end_offset" : 9,
      "type" : "CN_WORD",
      "position" : 7
    },
    {
      "token" : "fuck",
      "start_offset" : 10,
      "end_offset" : 14,
      "type" : "ENGLISH",
      "position" : 8
    },
    {
      "token" : "you",
      "start_offset" : 15,
      "end_offset" : 18,
      "type" : "ENGLISH",
      "position" : 9
    }
  ]
}
```

## 扩展词词典

词汇需要不断的更新，IK分词器提供了扩展词汇的功能。

### 打开IK分词器config目录

![image-20220212173522084](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220212173522084.png?raw=true)

### 在IKAnalyzer.cfg.xml配置文件内容添加：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">
<properties>
        <comment>IK Analyzer 扩展配置</comment>
        <!--用户可以在这里配置自己的扩展字典 *** 添加扩展词典-->
        <entry key="ext_dict">ext.dic</entry>
</properties>
```

### 新建一个 ext.dic，可以参考config目录下复制一个配置文件进行修改

```
yyds
下头
普信男
```

### 重启elasticsearch 

```shell
docker restart es

# 查看 日志
docker logs -f elasticsearch
```

### 测试效果

```json
#测试分词器
GET /_analyze
{
  "text": "谁把爷电动车骑走了？普信男",
  "analyzer": "ik_max_word"
}
```

结果：

```json
{
  "tokens" : [
    {
      "token" : "谁",
      "start_offset" : 0,
      "end_offset" : 1,
      "type" : "CN_CHAR",
      "position" : 0
    },
    {
      "token" : "把",
      "start_offset" : 1,
      "end_offset" : 2,
      "type" : "CN_CHAR",
      "position" : 1
    },
    {
      "token" : "爷",
      "start_offset" : 2,
      "end_offset" : 3,
      "type" : "CN_CHAR",
      "position" : 2
    },
    {
      "token" : "电动车",
      "start_offset" : 3,
      "end_offset" : 6,
      "type" : "CN_WORD",
      "position" : 3
    },
    {
      "token" : "电动",
      "start_offset" : 3,
      "end_offset" : 5,
      "type" : "CN_WORD",
      "position" : 4
    },
    {
      "token" : "车骑",
      "start_offset" : 5,
      "end_offset" : 7,
      "type" : "CN_WORD",
      "position" : 5
    },
    {
      "token" : "骑走",
      "start_offset" : 6,
      "end_offset" : 8,
      "type" : "CN_WORD",
      "position" : 6
    },
    {
      "token" : "走了",
      "start_offset" : 7,
      "end_offset" : 9,
      "type" : "CN_WORD",
      "position" : 7
    },
    {
      "token" : "普信男",
      "start_offset" : 10,
      "end_offset" : 13,
      "type" : "CN_WORD",
      "position" : 8
    }
  ]
}

```

## 停用词词典

IK分词器也提供了强大的停用词功能，让我们在索引时就直接忽略当前的停用词汇表中的内容。

### IKAnalyzer.cfg.xml配置文件内容添加：

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">
<properties>
        <comment>IK Analyzer 扩展配置</comment>
        <!--用户可以在这里配置自己的扩展字典-->
        <entry key="ext_dict">ext.dic</entry>
         <!--用户可以在这里配置自己的扩展停止词字典  *** 添加停用词词典-->
        <entry key="ext_stopwords">sensitive.dic</entry>
</properties>
```

### 在 stopword.dic 添加敏感词

```
了
```

### 重启elasticsearch 

```shell
# 重启服务
docker restart elasticsearch
docker restart kibana

# 查看 日志
docker logs -f elasticsearch
```

### 测试效果

```json
#测试分词器
GET /_analyze
{
  "text": "谁把爷电动车骑走了？",
  "analyzer": "ik_max_word"
}
```

结果：

```json
{
  "tokens" : [
    {
      "token" : "谁",
      "start_offset" : 0,
      "end_offset" : 1,
      "type" : "CN_CHAR",
      "position" : 0
    },
    {
      "token" : "把",
      "start_offset" : 1,
      "end_offset" : 2,
      "type" : "CN_CHAR",
      "position" : 1
    },
    {
      "token" : "爷",
      "start_offset" : 2,
      "end_offset" : 3,
      "type" : "CN_CHAR",
      "position" : 2
    },
    {
      "token" : "电动",
      "start_offset" : 3,
      "end_offset" : 5,
      "type" : "CN_WORD",
      "position" : 3
    },
    {
      "token" : "车骑",
      "start_offset" : 5,
      "end_offset" : 7,
      "type" : "CN_WORD",
      "position" : 4
    },
    {
      "token" : "走了",
      "start_offset" : 7,
      "end_offset" : 9,
      "type" : "CN_WORD",
      "position" : 5
    }
  ]
}

```

# 部署es集群

## 创建ES集群

部署es集群可以直接使用docker-compose来完成，不过要求你的Linux虚拟机至少有**4G**的内存空间

首先编写一个docker-compose.yaml文件，内容如下：

```sh
version: '2.2'
services:
  es01:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.12.1
    container_name: es01
    environment:
      - node.name=es01
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es02,es03
      - cluster.initial_master_nodes=es01,es02,es03
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms1024m -Xmx1024m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - data01:/usr/share/elasticsearch/data
    ports:
      - 9200:9200
    networks:
      - elastic
  es02:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.12.1
    container_name: es02
    environment:
      - node.name=es02
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es01,es03
      - cluster.initial_master_nodes=es01,es02,es03
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms1024m -Xmx1024m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - data02:/usr/share/elasticsearch/data
    networks:
      - elastic
  es03:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.12.1
    container_name: es03
    environment:
      - node.name=es03
      - cluster.name=es-docker-cluster
      - discovery.seed_hosts=es01,es02
      - cluster.initial_master_nodes=es01,es02,es03
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms1024m -Xmx1024m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - data03:/usr/share/elasticsearch/data
    networks:
      - elastic

volumes:
  data01:
    driver: local
  data02:
    driver: local
  data03:
    driver: local

networks:
  elastic:
    driver: bridge
```

Run `docker-compose` to bring up the cluster:

```sh
docker-compose up
```

s运行需要修改一些linux系统权限，修改`/etc/sysctl.conf`文件

```sh
vi /etc/sysctl.conf
```

添加下面的内容：

```sh
vm.max_map_count=262144
```

然后执行命令，让配置生效：

```sh
sysctl -p
```

通过docker-compose启动集群：

```sh
docker-compose up -d
```



## 集群状态监控

kibana可以监控es集群，不过新版本需要依赖es的x-pack 功能，配置比较复杂。

这里推荐使用cerebro来监控es集群状态，官方网址：https://github.com/lmenezes/cerebro

解压即可使用，非常方便。

![image-20220216160118448](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220216160118448.png?raw=true)

输入你的elasticsearch的任意节点的地址和端口，点击connect即可：

![image-20220216160155083](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220216160155083.png?raw=true)

连接成功：

![image-20220216160511291](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220216160511291.png?raw=true)

## 创建索引库

### 利用cerebro创建索引库

![image-20220216160600207](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220216160600207.png?raw=true)

填写索引库信息：

![image-20220216160637912](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220216160637912.png?raw=true)

## 查看分片效果

回到首页，查看分片效果

![image-20220216160736256](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220216160736256.png?raw=true)

实线是主分片，虚线是副本分片，主副分片都在不同的节点上
