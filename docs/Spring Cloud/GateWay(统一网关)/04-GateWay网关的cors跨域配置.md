# GateWay的跨域配置
# 跨域问题处理

跨域：域名不一致就是跨域，主要包括：

- 域名不同： www.taobao.com 和 www.taobao.org 和 www.jd.com 和 miaosha.jd.com
- 域名相同，端口不同：localhost:8080和localhost8081

跨域问题：浏览器禁止请求的发起者与服务端发生跨域ajax请求，请求被浏览器拦截的问题

解决方案：CORS

# 网关处理跨域采用的是CORS方案，简单配置即可实现

```yaml
spring:
  application:
    name: gateway # 服务名称
  cloud:
    nacos:
      server-addr: 127.0.0.1:80 # nacos地址
    gateway:
      globalcors: #全局跨域处理
        add-to-simple-url-handler-mapping: true # 解决options请求被拦截问题
        cors-configurations:
        '[/**]': # 拦截所有请求
          allowedOrigins: # 允许哪些网站的跨域请求
            - "http://localhost:8090"
            - "http://www.leyou.com"
          allowedHeaders: # 允许在请求中携带的头信息
            allowCredentials: true # 是否允许携带cookie
          allowedMethods: # 允许的跨域ajax的请求方式
            - "GET"
            - "POST"
            - "DELETE"
            - "PUT"
            - "OPTIONS"
          maxAge: 360000 # 这次跨域检测的有效期
```





