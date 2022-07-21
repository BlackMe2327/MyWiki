# Nacos服务分级存储模型

## Nacos服务分级存储模型图

①一级是服务

②二级是集群，例如北京或上海

③三级是实例，例如北京机房的某台部署了某服务的服务器

![image-20220131173821280](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220131173821280.png?raw=true)

## 服务跨集群调用问题

服务调用尽可能选择本地集群的服务，跨集群调用延迟较高

本地集群不可访问时，再去访问其它集群

![image-20220131174421215](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220131174421215.png?raw=true)

# Nacos配置服务集群属性

## 修改服务application.yml，添加以下内容（服务提供者）

```yaml
spring:
  cloud:
    nacos:
      server-addr: localhost:8848 # 服务端地址
      discovery:
        cluster-name: BJ # 配置集群名称，也就是机房位置，例如：BJ，北京
```

## 验证服务集群配置（服务提供者）

![image-20220131175121702](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220131175121702.png?raw=true)

## 为（服务消费者）配置优先本地集群访问

```yaml
spring:
  cloud:
    nacos:
      server-addr: localhost:8848
      discovery:
        cluster-name: BJ # 集群名称
```

