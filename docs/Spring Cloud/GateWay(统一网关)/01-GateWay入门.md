# 为什么需要网关

## 网关功能

1. 身份认证和权限校验
2. 服务路由、负载均衡
3. 请求限流

![image-20220207231553965](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220207231553965.png?raw=true)

## 网关技术实现

在SpringCloud中网关的实现包括两种：

- gateway,SpringCloudGateway则是基于Spring5中提供的WebFlux，属于响应式编程的实现，具备更好的性能。
- zuul,Zuul是基于Servlet的实现，属于阻塞式编程。

# 搭建网关服务

## 创建新的module，引入SpringCloudGateway的依赖和nacos的服务发现依赖

```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
```

## 编写路由配置及nacos地址

1.路由id：路由的唯一标示

2.路由目标（uri）：路由的目标地址，http代表固定地址，lb代表根据服务名负载均衡

3.路由断言（predicates）：判断路由的规则，

4.路由过滤器（filters）：对请求或响应做处理

```yaml
server:
  port: 10010 # 网关端口
spring:
  application:
    name: gateway # 服务名称
  cloud:
    nacos:
      server-addr: 127.0.0.1:80 # nacos地址
    gateway:
      routes: # 网关路由配置
        - id: user-service # 路由id，自定义，只要唯一即可
          # uri: http://127.0.0.1:8081 # (1)路由的目标地址 http就是固定地址
          uri: lb://userservice #(2,常用) 路由的目标地址 lb就是负载均衡，后面跟服务名称
          predicates: # 路由断言，也就是判断请求是否符合路由规则的条件
            - Path=/user/** # 这个是按照路径匹配，只要以/user/开头就符合要求
        - id: order-service
          uri: lb://orderservice
          predicates:
            - Path=/order/**
```

## 验证

![image-20220207233536253](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220207233536253.png?raw=true)

# 请求流程

![image-20220207234407007](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220207234407007.png?raw=true)





