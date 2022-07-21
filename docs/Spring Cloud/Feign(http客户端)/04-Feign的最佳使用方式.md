# Feign的最佳实践

## 方法一：继承（面向切面编程）

给`服务消费者`的FeignClient和`服务提供者`的controller定义统一的父接口作为标准

弊端：

- 服务紧耦合
- 父接口参数列表中的映射不会被继承

![image-20220205160425970](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220205160425970.png?raw=true)

## 方法二：抽取

将FeignClient抽取为`独立模块`，并且把接口有关的POJO、默认的Feign配置都放到这个模块中，提供给所有服务消费者使用

弊端：

- 服务消费者会从feign-api中获取到一些自己不用的方法，造成代码冗余

![image-20220205161243517](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220205161243517.png?raw=true)

# 抽取的实现方式

1.首先创建一个module，命名为feign-api，然后引入feign的starter依赖

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>
```

2.将服务消费者中编写的Client、实体类、DefaultFeignConfiguration都复制到feign-api项目中

3.在服务消费者中引入feign-api的依赖

```xml
<dependency>
    <groupId>cn.bttc.demo</groupId>
    <artifactId>feign-api</artifactId>
    <version>1.0</version>
</dependency>
```

4.修改服务消费者中的所有与上述三个组件有关的import部分，改成导入feign-api中的包

5.重启测试

## FeignClient不在SpringBootApplication的扫描包范围时

### 方法一

指定FeignClient所在包

```java
@EnableFeignClients(basePackages = "cn.bttc.feign.clients")
```

### 方法二（推荐）

指定FeignClient字节码

```java
@EnableFeignClients(clients = {UserClient.class})
```

