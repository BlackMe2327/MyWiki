# Sentinel基础、安装、雪崩问题

## 雪崩问题及解决方案

### 雪崩问题

微服务中，服务间调用关系错综复杂，一个微服务往往依赖于多个其它微服务。如果服务提供者1发生了故障，当前的应用的部分业务因为依赖于服务1，因此也会被阻塞。此时，其它不依赖于服务1的业务似乎不受影响。但是，依赖服务I的业务请求被阻塞，用户不会得到响应，则tomcat的这个线程不会释放，于是越来越多的用户请求到来，越来越多的线程会阻塞服务器支持的线程和并发数有限，请求一直阻塞，会导致服务器资源耗尽，从而导致所有其它服务都不可用，那么当前服务也就不可用了。那么，依赖于当前服务的其它服务随着时间的推移，最终也都会变的不可用，形成级联失败，雪崩就发生了。

###  雪崩问题处理方案

#### 方案一：超时处理

设定超时时间，请求超过一定时间没有响应就返回错误信息，不会无休止等待

#### 方案二：仓壁模式

限定每个业务能使用的线程数，避免耗尽整个tomcat的资源，因此也叫线程隔离。

#### 方案三：断路器

断路器模式：由**断路器**统计业务执行的异常比例，如果超出阈值则会**熔断**该业务，拦截访问该业务的一切请求。

断路器会统计访问某个服务的请求数量，异常比例：

![image-20220217201219899](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220217201219899.png?raw=true)

当发现访问服务D的请求异常比例过高时，认为服务D有导致雪崩的风险，会拦截访问服务D的一切请求，形成熔断：

![image-20220217201235396](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220217201235396.png?raw=true)

#### 方案四：限流

**流量控制**：限制业务访问的QPS(每秒钟处理请求数量)，避免服务因流量的突增而故障。

![image-20220217201316122](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220217201316122.png?raw=true)

#### 总结

**方案四：限流**是对服务的保护，避免因瞬间高并发流量而导致服务故障，进而避免雪崩。是一种**预防**措施。

**超时处理、线程隔离、降级熔断**是在部分服务故障时，将故障控制在一定范围，避免雪崩。是一种**补救**措施。

## 微服务保护技术对比

在SpringCloud当中支持多种服务保护技术：

- [Netfix Hystrix](https://github.com/Netflix/Hystrix)
- [Sentinel](https://github.com/alibaba/Sentinel)
- [Resilience4J](https://github.com/resilience4j/resilience4j)

早期比较流行Hystrix框架，目前国内使用最广泛的还是阿里巴巴的Sentinel框架

|                  | **Sentinel**                                   | **Hystrix**                   |
| ---------------- | ---------------------------------------------- | ----------------------------- |
| **隔离策略**     | 信号量隔离                                     | 线程池隔离/信号量隔离         |
| **熔断降级策略** | 基于慢调用比例或异常比例                       | 基于失败比率                  |
| 实时指标实现     | 滑动窗口                                       | 滑动窗口（基于 RxJava）       |
| 规则配置         | 支持多种数据源                                 | 支持多种数据源                |
| 扩展性           | 多个扩展点                                     | 插件的形式                    |
| 基于注解的支持   | 支持                                           | 支持                          |
| **限流**         | 基于 QPS，支持基于调用关系的限流               | 有限的支持                    |
| **流量整形**     | 支持慢启动、匀速排队模式                       | 不支持                        |
| 系统自适应保护   | 支持                                           | 不支持                        |
| **控制台**       | 开箱即用，可配置规则、查看秒级监控、机器发现等 | 不完善                        |
| 常见框架的适配   | Servlet、Spring Cloud、Dubbo、gRPC  等         | Servlet、Spring Cloud Netflix |

## Sentinel介绍和安装

### 初始Sentinel

Sentinel是阿里巴巴开源的一款微服务流量控制组件。官网地址：https://sentinelguard.io/zh-cn/index.html

Sentinel 具有以下特征:

- **丰富的应用场景**：Sentinel 承接了阿里巴巴近 10 年的双十一大促流量的核心场景，例如秒杀（即突发流量控制在系统容量可以承受的范围）、消息削峰填谷、集群流量控制、实时熔断下游不可用应用等。
- **完备的实时监控**：Sentinel 同时提供实时的监控功能。您可以在控制台中看到接入应用的单台机器秒级数据，甚至 500 台以下规模的集群的汇总运行情况。
- **广泛的开源生态**：Sentinel 提供开箱即用的与其它开源框架/库的整合模块，例如与 Spring Cloud、Dubbo、gRPC 的整合。您只需要引入相应的依赖并进行简单的配置即可快速地接入 Sentinel。
- **完善的** **SPI** **扩展点**：Sentinel 提供简单易用、完善的 SPI 扩展接口。您可以通过实现扩展接口来快速地定制逻辑。例如定制规则管理、适配动态数据源等。

### 安装Sentinel

#### 下载

github地址：https://github.com/alibaba/Sentinel/releases

#### 运行

如果要修改Sentinel的默认端口、账户、密码，可以通过下列配置：

| **配置项**                       | **默认值** | **说明**   |
| -------------------------------- | ---------- | ---------- |
| server.port                      | 8080       | 服务端口   |
| sentinel.dashboard.auth.username | sentinel   | 默认用户名 |
| sentinel.dashboard.auth.password | sentinel   | 默认密码   |

修改端口并且后台运行：

```sh
nohup java  -Dserver.port=8090 -jar sentinel-dashboard-1.8.1.jar >/dev/null  2>&1 &
```

#### 访问

访问http://localhost:8090页面，就可以看到sentinel的控制台了：账户名和密码都是sentinel,登录后，发现一片空白，什么都没有,这是因为我们还没有与微服务整合。

## 1.4.微服务整合Sentinel

我们在服务中整合sentinel，并连接sentinel的控制台，步骤如下：

1）引入sentinel依赖

```xml
<!--sentinel-->
<dependency>
    <groupId>com.alibaba.cloud</groupId> 
    <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
</dependency>
```

2）配置控制台

修改application.yaml文件，添加下面内容：

```yaml
server:
  port: 8088
spring:
  cloud: 
    sentinel:
      transport:
        dashboard: localhost:8090
```

3）访问服务的任意接口

打开浏览器，访问http://localhost:8088/order/101，这样才能触发sentinel的监控。

然后再访问sentinel的控制台，查看效果：

![image-20220217235302906](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220217235302906.png?raw=true)
