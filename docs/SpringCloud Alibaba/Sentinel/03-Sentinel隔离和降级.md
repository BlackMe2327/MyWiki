# Sentinel隔离和降级

限流是一种预防措施，虽然限流可以尽量避免因高并发而引起的服务故障，但服务还会因为其它原因而故障。

而要将这些故障控制在一定范围，避免雪崩，就要靠**线程隔离**（舱壁模式）和**熔断降级**手段了。

**线程隔离**：调用者在调用服务提供者时，给每个调用的请求分配独立线程池，出现故障时，最多消耗这个线程池内资源，避免把调用者的所有资源耗尽。

![image-20220219144701590](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219144701590.png?raw=true)

**熔断降级**：是在调用方这边加入断路器，统计对服务提供者的调用，如果调用的失败比例过高，则熔断该业务，不允许访问该服务的提供者了。

![image-20220219145311507](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219145311507.png?raw=true)

不管是线程隔离还是熔断降级，都是对**客户端**（调用方）的保护。需要在**调用方** 发起远程调用时做线程隔离、或者服务熔断。

而我们的微服务远程调用都是基于Feign来完成的，因此我们需要将Feign与Sentinel整合，在Feign里面实现线程隔离和服务熔断。

## FeignClient整合Sentinel

SpringCloud中，微服务调用都是通过Feign来实现的，因此做客户端保护必须整合Feign和Sentinel。

### 修改配置，开启sentinel功能

修改调用方的application.yml文件，开启Feign的Sentinel功能：

```yaml
feign:
  sentinel:
    enabled: true # 开启feign对sentinel的支持
```

### 编写失败降级逻辑

业务失败后，不能直接报错，而应该返回用户一个友好提示或者默认结果，这个就是失败降级逻辑。

给FeignClient编写失败后的降级逻辑，编写FallbackFactory，可以对远程调用的异常做处理

#### 步骤1-在feign-api中实现FallbackFactory

```java
@Slf4j
public class UserClientFallbackFactory implements FallbackFactory<UserClient> {
    @Override
    public UserClient create(Throwable throwable) {
        return new UserClient() {
            @Override
            public User findById(Long id) {
                log.error("查询用户异常", throwable);
                return new User();
            }
        };
    }
}
```

#### 步骤2-在feign-api中的DefaultFeignConfiguration类中将UserClientFallbackFactory注册为一个Bean

```java
@Bean
public UserClientFallbackFactory userClientFallbackFactory(){
    return new UserClientFallbackFactory();
}
```

#### 步骤3--在feign-api中的UserClient接口中使用UserClientFallbackFactory

```java
@FeignClient(value = "userservice", fallbackFactory = UserClientFallbackFactory.class)
public interface UserClient {

    @GetMapping("/user/{id}")
    User findById(@PathVariable("id") Long id);
}
```

## 线程隔离（仓壁模式）

线程隔离有两种方式实现：

- **线程池隔离**：给每个服务调用业务分配一个线程池，利用线程池本身实现隔离效果

- **信号量隔离（Sentinel默认采用）**：不创建线程池，而是计数器模式，记录业务使用的线程数量，达到信号量上限时，禁止新的请求。

如图：

![image-20220219191848262](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219191848262.png?raw=true)

|      | 线程池隔离                     | 信号量隔离                     |
| ---- | ------------------------------ | ------------------------------ |
| 优点 | 支持主动超时，支持异步调用     | 轻量级，无额外开销             |
| 缺点 | 线程的额外开销大               | 不支持主动超时，不支持异步调用 |
| 场景 | 低扇出（依赖服务越多扇出越高） | 高频调用，高扇出               |

### sentinel的线程隔离

**用法说明**：

在添加限流规则时，可以选择两种阈值类型：

![image-20220219192522733](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219192522733.png?raw=true)

- QPS：就是每秒的请求数，在快速入门中已经演示过

- 线程数：是该资源能使用用的tomcat线程数的最大值。也就是通过限制线程数量，实现**线程隔离**（舱壁模式）。

#### 示例：配置隔离规则

![image-20220219192647075](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219192647075.png?raw=true)

#### 示例：jmeter测试

添加线程组：

一次发生10个请求，有较大概率并发线程数超过2，而超出的请求会走之前定义的失败降级逻辑。

![image-20220219192725045](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219192725045.png?raw=true)

添加http请求：

![image-20220219192738653](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219192738653.png?raw=true)

查看运行结果：

发现虽然结果都是通过了，不过部分请求得到的响应是降级返回的null信息。

![image-20220219192822782](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219192822782.png?raw=true)

## 熔断降级

> 熔断降级是解决雪崩问题的重要手段。其思路是由**断路器**统计服务调用的异常比例、慢请求比例，如果超出阈值则会**熔断**该服务。即拦截访问该服务的一切请求；而当服务恢复时，断路器会放行访问该服务的请求。

断路器控制熔断和放行是通过状态机来完成的:

![image-20220219193914744](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219193914744.png?raw=true)

状态机包括三个状态：

- closed：关闭状态，断路器放行所有请求，并开始统计异常比例、慢请求比例。超过阈值则切换到open状态
- open：打开状态，服务调用被**熔断**，访问被熔断服务的请求会被拒绝，快速失败，直接走降级逻辑。Open状态5秒后会进入half-open状态
- half-open：半开状态，放行一次请求，根据执行结果来判断接下来的操作。
  - 请求成功：则切换到closed状态
  - 请求失败：则切换到open状态

> 断路器熔断策略有三种：慢调用、异常比例、异常数

### 熔断策略-慢调用

> **慢调用**：业务的响应时长（RT）大于指定时长的请求认定为慢调用请求。在指定时间内，如果请求数量超过设定的最小数量，慢调用比例大于设定的阈值，则触发熔断。

#### 设置慢调用

通过休眠模拟一个延迟时间：

```java
@GetMapping("/{id}")
public User queryById(@PathVariable("id") Long id,
                      @RequestHeader(value = "Truth", required = false) String truth) throws InterruptedException {
    if (id == 1) {
        // 休眠，触发熔断
        Thread.sleep(60);
    } 
    return userService.queryById(id);
}
```

#### 设置慢调用熔断规则

下面，给feign-api接口设置降级规则：

![image-20220219195101439](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219195101439.png?raw=true)

超过50ms的请求都会被认为是慢请求

### 熔断策略-异常比例、异常数

> **异常比例或异常数**：统计指定时间内的调用，如果调用次数超过指定请求数，并且出现异常的比例达到设定的比例阈值（或超过指定异常数），则触发熔断。

#### 设置异常请求

```java
@GetMapping("/{id}")
    public User queryById(@PathVariable("id") Long id,
                          @RequestHeader(value = "Truth", required = false) String truth) throws InterruptedException {
        if (id == 1) {
            // 休眠，触发熔断
            Thread.sleep(60);
        } else if (id == 2) {
            throw new RuntimeException("故意出错，触发熔断");
        }
        return userService.queryById(id);
    }
```

#### 设置异常比例、异常数熔断规则

![image-20220219195552210](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219195552210.png?raw=true)

只要异常比例超过0.4，也就是有2次以上的异常，就会触发熔断。



