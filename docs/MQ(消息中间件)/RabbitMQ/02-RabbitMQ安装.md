# 单机安装

## 下载镜像

### 在线拉取

``` sh
docker pull rabbitmq:3-management
```

### 从本地加载

下载好镜像压缩包，上传到服务器然后使用命令加载镜像即可

```sh
docker load -i MQ.tar
```

## 安装RabbitMQ

执行下面的命令来运行MQ容器：

```sh
docker run \
 -e RABBITMQ_DEFAULT_USER=blackme \
 -e RABBITMQ_DEFAULT_PASS=123456 \
 --name mq \
 --hostname mq1 \
 -p 15672:15672 \
 -p 5672:5672 \
 -d \
 rabbitmq:3-management
```

`-e` 设置环境变量

`-p 15672:15672 ` RabbitMQ管理平台端口

`-p 5672:5672` 消息通信端口

# 集群部署

可参考此篇文章：https://www.cnblogs.com/alan6/p/11691229.html（感谢[Alan6](https://home.cnblogs.com/u/alan6/)）

## 集群分类

### 普通模式

普通模式集群不进行数据同步，每个MQ都有自己的队列、数据信息（其它元数据信息如交换机等会同步）。例如我们有2个MQ：mq1，和mq2，如果你的消息在mq1，而你连接到了mq2，那么mq2会去mq1拉取消息，然后返回给你。如果mq1宕机，消息就会丢失。

### 镜像模式

镜像模式集群，队列会在各个mq的镜像节点之间同步，因此你连接到任何一个镜像节点，均可获取到消息。而且如果一个节点宕机，并不会导致数据丢失。不过，这种方式增加了数据同步的带宽消耗。





