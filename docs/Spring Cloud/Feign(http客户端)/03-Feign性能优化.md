# Feign底层客户端实现

- URLConnection：jdk自带的一种，默认实现，不支持连接池
- Apache HttpClient ：支持连接池
- OKHttp：支持连接池

# 优化Feign的性能

1. 使用连接池代替默认的URLConnection
2. 日志级别，最好用basic或none

# Feign的性能优化-连接池配置

## 引入依赖

Feign添加HttpClient的支持：

```xml
<!--引入Hhttpclient依赖-->
<dependency>
    <groupId>io.github.openfeign</groupId>
    <artifactId>feign-httpclient</artifactId>
</dependency>
```

## 配置连接池

```yaml
feign:
  client:
    config:
      default: # 这里用default就是全局配置，如果是写服务名称，则是针对某个微服务的配置
        loggerLevel: BASIC #  日志级别,日志级别，BASIC就是基本的请求和响应信息
  httpclient:
    enabled: true # 开启feign对HttpClient的支持
    max-connections: 200 # 最大的连接数
    max-connections-per-route: 50 # 每个路径的最大连接数
```

