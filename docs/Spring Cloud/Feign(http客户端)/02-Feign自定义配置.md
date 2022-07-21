# 自定义Feign配置

Feign运行自定义配置来覆盖默认配置，可以修改的配置如下：

| 类型                | 作用             | 说明                                                         |
| ------------------- | ---------------- | ------------------------------------------------------------ |
| feign.Logger.Level  | 修改日志级别     | 包含四种不同的级别：NONE(没有任何日志)、BASIC(记录请求基本信息)、HEADERS(记录请求基本信息，以及请求头，请求体)、FULL(最完整的日志) |
| feign.codec.Decoder | 响应结果的解析器 | http远程调用的结果做解析，例如解析json字符串为java对象       |
| feign.codec.Encoder | 请求参数编码     | 将请求参数编码，便于通过http请求发送                         |
| feign. Contract     | 支持的注解格式   | 默认是SpringMVC的注解                                        |
| feign. Retryer      | 失败重试机制     | 请求失败的重试机制，默认是没有，不过会使用Ribbon的重试       |

# 配置Feign的两种方式

## 配置文件方式

### 全局配置

```yaml
feign:
  client:
    config:
      default: # 这里用default就是全局配置，如果是写服务名称，则是针对某个微服务的配置
        loggerLevel: FULL #  日志级别
```

### 局部配置

```yaml
feign:
  client:
    config:
      userservice: # 这里用default就是全局配置，如果是写服务名称，则是针对某个微服务的配置
        loggerLevel: FULL #  日志级别
```

## java代码方式

先声明一个Bean

```java
public class FeignClientConfiguration {
    @Bean
    public Logger.Level loglevel(){
        return Logger.Level.FULL;
    }
}
```

### 全局配置

如果是全局配置，则把它放到启动类中的@EnableFeignClients这个注解中：

```java
@EnableFeignClients(defaultConfiguration = FeignClientConfiguration.class)
```

### 局部配置

如果是局部配置，则把它放到服务接口的@FeignClient这个注解中：

```java
@FeignClient(value = "userservice", configuration = FeignClientConfiguration.class)
```



