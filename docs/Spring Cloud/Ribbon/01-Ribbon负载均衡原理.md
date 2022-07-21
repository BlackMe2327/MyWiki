# Ribbon负载均衡流程

## 总体流程

1. 当我们直接用服务名+端口在浏览器访问时，浏览器不认识这种地址
2. 所以当Ribbon得到一个请求是服务名+端口的形式的时候就会取eureka-server中拉取服务
3. eureka-server会返回一个服务列表给Ribbon
4. Ribbon在服务列表中的挑选服务

![image-20220130182224227](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220130182224227.png?raw=true)

## 详细流程

![image-20220130190204181](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220130190204181.png?raw=true)

# Ribbon负载均衡策略

![image-20220130230759256](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220130230759256.png?raw=true)

| 内置负载均衡规则类        | 规则描述                                                     |
| ------------------------- | ------------------------------------------------------------ |
| RoundRobinRule            | 简单轮询服务列表来选择服务器。它是Ribbon默认的负载均衡规则。 |
| AvailabilityFilteringRule | 对以下两种服务器进行忽略：   （1）在默认情况下，这台服务器如果3次连接失败，这台服务器就会被设置为“短路”状态。短路状态将持续30秒，如果再次连接失败，短路的持续时间就会几何级地增加。  （2）并发数过高的服务器。如果一个服务器的并发连接数过高，配置了AvailabilityFilteringRule规则的客户端也会将其忽略。并发连接数的上限，可以由客户端的clientName.clientConfigNameSpace.ActiveConnectionsLimit属性进行配置。 |
| WeightedResponseTimeRule  | 为每一个服务器赋予一个权重值。服务器响应时间越长，这个服务器的权重就越小。这个规则会随机选择服务器，这个权重值会影响服务器的选择。 |
| ZoneAvoidanceRule         | 以区域可用的服务器为基础进行服务器的选择。使用Zone对服务器进行分类，这个Zone可以理解为一个机房、一个机架等。而后再对Zone内的多个服务做轮询。 |
| BestAvailableRule         | 忽略那些短路的服务器，并选择并发数较低的服务器。             |
| RandomRule                | 随机选择一个可用的服务器。                                   |
| RetryRule                 | 重试机制的选择逻辑                                           |

## 调整Ribbon的负载均衡规则（即不适用默认的ZoneAvoidanceRule）

### 通过定义IRule实现修改负载均衡规则（全局的配置负载均衡策略）   

在启动类中定义一个新的IRule。

```java
@SpringBootApplication
public class OrderApplication {

    public static void main(String[] args) {
        SpringApplication.run(OrderApplication.class, args);
    }

    /*
     * @Author chenbo6
     **/
    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
    
    @Bean
    public IRule randomRule(){
        return new RandomRule();
    }
}
```

### 配置文件方式修改负载均衡规则（单个的配置负载均衡策略）

在服务消费者的application.yml文件中，添加新的配置也可以修改规则

```yaml
userservice:	#服务提供者的服务名称
  ribbon:
    NFLoadBalancerRuleClassName: com.netflix.loadbalancer.RandomRule
```

# Ribbon的饥饿加载

Ribbon默认是采用懒加载，即第一次访问时才会去创建LoadBalanceClient，请求时间会很长。而饥饿加载则会在项目启动时创建，降低第一次访问的耗时，通过在服务消费者的配置文件中开启饥饿加载：

```yaml
ribbon:
  eager-load:
    enabled: true #开启饥饿加载
    clients: userservice #指定饥饿加载的服务名称,可以配置多个以列表的形式
```

