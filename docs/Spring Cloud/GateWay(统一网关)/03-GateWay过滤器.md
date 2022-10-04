# GateWay过滤器
# GatewayFilter（路由过滤器）

GatewayFilter是网关中提供的一种过滤器，可以对进入网关的`请求`和微服务返回的`响应`做处理：

![image-20220208161813077](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220208161813077.png?raw=true)

过滤器的作用:

1. 对路由的请求或响应做加工处理，比如添加请求头
2. 配置在路由下的过滤器只对当前路由的请求生效

defaultFilters的作用:

1. 对所有路由都生效的过滤器

# GatewayFilterFactory(过滤器工厂)

Spring提供了31种不同的路由过滤器工厂

详细配置方式可以参考官方文档：https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#gatewayfilter-factories

| 名称                          | 说明                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| AddRequestHeader              | 给当前请求添加一个请求头                                     |
| AddRequestParameter           | 为原始请求添加请求参数                                       |
| AddResponseHeader             | 给响应结果中添加一个响应头                                   |
| DedupeResponseHeader          | 去掉重复请求头                                               |
| Spring Cloud CircuitBreaker   | 断路器                                                       |
| FallbackHeaders               | 添加熔断后的异常信息到请求头                                 |
| MapRequestHeader              | 将上游请求头的值赋值到下游请求头                             |
| PrefixPath                    | 匹配的路由添加前缀                                           |
| PreserveHostHeader            | 保留原请求头                                                 |
| RequestRateLimiter            | 限制请求的流量                                               |
| RedirectTo                    | 重定向                                                       |
| RemoveRequestHeader           | 移除请求中的一个请求头                                       |
| RemoveResponseHeader          | 从响应结果中移除有一个响应头                                 |
| RemoveRequestParameter        | 移除请求参数                                                 |
| RewritePath                   | 重写路径                                                     |
| RewriteLocationResponseHeader | 重写响应头中Location的值                                     |
| RewriteResponseHeader         | 重写响应头                                                   |
| SaveSession                   | 向下游转发请求前前置执行WebSession::save的操作               |
| SecureHeaders                 | 禁用默认值                                                   |
| SetPath                       | 设置路径                                                     |
| SetRequestHeader              | 重置请求头                                                   |
| SetResponseHeader             | 修改响应头                                                   |
| SetStatus                     | 修改响应的状态码                                             |
| StripPrefix                   | 对指定数量的路径前缀进行去除                                 |
| Retry                         | 重试                                                         |
| RequestSize                   | 请求大小大于限制时，限制请求到达下游服务                     |
| SetRequestHostHeader          | 重置请求头值                                                 |
| Modify a Request Body         | 修改请求体内容                                               |
| Modify a Response Body        | 修改响应体内容                                               |
| Relay                         | 将 OAuth2 访问令牌向下游转发到它所代理的服务                 |
| CacheRequestBody              | 在请求正文发送到下游之前缓存请求正文并从 exchagne 属性获取正文 |

## 默认过滤器

```yaml
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
#          filters: #过滤器
#            - AddRequestHeader=Truth, bttc is freaking awesome! # 添加请求头
        - id: order-service
          uri: lb://orderservice
          predicates:
            - Path=/order/**
            - Before=2031-01-20T17:42:47.789-07:00[Asia/Shanghai]
      default-filters:	#默认过滤器
        - AddRequestHeader=Truth, bttc niubi! # 添加请求头
```

# 全局过滤器

全局过滤器的作用也是处理一切进入网关的请求和微服务响应，与GatewayFilter的作用一样。区别在于GatewayFilter通过配置定义，处理逻辑是固定的。而GlobalFilter的逻辑需要自己写代码实现。定义方式是实现GlobalFilter接口。

```java
public interface GlobalFilter {
	/**
	 * 处理当前请求，有必要的话通过{@link GatewayFilterChain}将请求交给下一个过滤器处理
	 * @param exchange 请求上下文，里面可以获取Request、Response等信息
	 * @param chain 用来把请求委托给下一个过滤器
	 * @return {@code Mono<Void>} 返回标示当前过滤器业务结束
	 */
	Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain);
}
```

## 自定义过滤器

定义全局过滤器，拦截并判断用户身份

需求：定义全局过滤器，拦截请求，判断请求的参数是否满足下面条件：

- 参数中是否有authorization，
- authorization参数值是否为admin

如果同时满足则放行，否则拦截

自定义类，实现GlobalFilter接口，添加@Order注解：

```java
//过滤器执行优先级，值越小优先级越高
@Order(-1)
@Component
public class AuthorizeFilter implements GlobalFilter {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        //1.获取请求参数
        ServerHttpRequest request = exchange.getRequest();
        MultiValueMap<String, String> params = request.getQueryParams();
        //2.获取参数中的authorization
        String auth = params.getFirst("authorization");
        //3.判断参数是否等于admin
        if ("admin".equals(auth)) {
            //4.是放行
            return chain.filter(exchange);
        }
        //5.否，拦截
        //5.1设置状态码
        exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
        //5.2拦截请求
        return exchange.getResponse().setComplete();
    }
}
```

## 验证

![image-20220208171942777](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220208171942777.png?raw=true)

![image-20220208172001917](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220208172001917.png?raw=true)



# 过滤器执行顺序

请求进入网关会碰到三类过滤器：当前路由的过滤器、DefaultFilter、GlobalFilter

**请求路由后**，会将当前路由过滤器和DefaultFilter、GlobalFilter，合并到一个过滤器链（集合）中，排序后依次执行每个过滤器

![image-20220208172232684](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220208172232684.png?raw=true)

- 每一个过滤器都必须指定一个int类型的order值，`order`值越小，优先级越高，执行顺序越靠前。
- GlobalFilter通过实现Ordered接口，或者添加@Order注解来指定`order`值，由我们自己指定
- 路由过滤器和defaultFilter的order由Spring指定，默认是按照声明顺序从1递增。
- 当过滤器的order值一样时，会按照 defaultFilter > 路由过滤器 > GlobalFilter的顺序执行。





