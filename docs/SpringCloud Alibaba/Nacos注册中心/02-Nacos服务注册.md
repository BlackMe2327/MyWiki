# Nacos服务注册

## 在父工程中添加spring-cloud-alibaba的管理依赖

```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-alibaba-dependencies</artifactId>
    <version>2.2.5.RELEASE</version>
    <type>pom</type>
    <scope>import</scope>
</dependency>
```

## 在各个服务中添加nacos的客户端依赖

```xml
<!-- nacos客户端依赖包 -->
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```

## 修改服务中的application.yml文件，添加nacos地址

```yaml
spring:
  cloud:
    nacos:
      server-addr: localhost:8848
```

## 启动并测试

![image-20220131171534187](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220131171534187.png?raw=true)







