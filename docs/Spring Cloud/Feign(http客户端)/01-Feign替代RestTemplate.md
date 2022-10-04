# Feign介绍
# RestTemplate方式调用存在的问题

先来看我们以前利用RestTemplate发起远程调用的代码：

```java
String url = "http://userservice/user/" + order.getUserId();
User user = restTemplate.getForObject(url, User.class);
```

存在下面的问题：

- 代码可读性差，编程体验不统一
- 参数复杂URL难以维护

# Feign的介绍

Feign是一个声明式的http客户端，官方地址：https://github.com/OpenFeign/feign

其作用就是帮助我们优雅的实现http请求的发送，解决上面提到的问题。

![image-20220205150547661](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220205150547661.png?raw=true)

# 定义和使用Feign客户端

## 引入依赖

```xml
<dependency>
	<groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId> 
</dependency>
```

## 在服务的启动类中添加注解@EnableFeignClients开启Feign的功能

```java
@EnableFeignClients	//开启Feign
@MapperScan("cn.bttc.order.mapper")
@SpringBootApplication
public class OrderApplication {
    public static void main(String[] args) {
        SpringApplication.run(OrderApplication.class, args);
    }
}
```

## 编写Feign客户端

```java
@FeignClient("userservice")
public interface UserClient {
    @GetMapping("/user/{id}")
    User findById(@PathVariable("id") Long id);
}
```

主要是基于SpringMVC的注解来声明远程调用的信息，比如：

- 服务名称：userservice
- 请求方式：GET
- 请求路径：/user/{id}
- 请求参数：Long id
- 返回值类型：User

```java
@Service
public class OrderService {

    @Autowired
    private OrderMapper orderMapper;

    @Autowired
    private UserClient userClient;
    
    public Order queryOrderById(Long orderId) {
        Order order = orderMapper.findById(orderId);
        User user=userClient.findById(order.getUserId());
        order.setUser(user);
        return order;
    }
}
```





