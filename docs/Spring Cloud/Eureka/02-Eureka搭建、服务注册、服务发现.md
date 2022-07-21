# Eureka注册中心搭建

## 创建项目，引入依赖

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```

## 编写启动类，添加@EnableEurekaServer注解

```java
package cn.bttc.eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class EurekaApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaApplication.class, args);
    }
}

```

## 添加application.yml文件，编写下面的配置：

```yaml
server:
  port: 10086 # 服务端端口
spring:
  application:
    name: eurekaserver  # eureka的服务名称
eureka:
  client:
    service-url:  # eureka的地址信息
      defaultZone: http://127.0.0.1:10086/eureka
```

## 启动Eureka服务查看注册到Eureka的实例

![image-20220129180206745](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220129180206745.png?raw=true)

# Eureka的服务注册

## 在需要注册的服务中引入依赖

```xml
 <dependency>
     <groupId>org.springframework.cloud</groupId>
     <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
 </dependency>
```

## 编写配置文件

```yaml
spring:
  application:
    name: userservice
eureka:
  client:
    service-url:
      defaultZone: http://127.0.0.1:10086/eureka/
```

## 启动服务、查看是否注册成功

![image-20220129181159833](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220129181159833.png?raw=true)

## idea中模拟一个服务多实例部署

1.为了避免端口冲突，需要更改端口设置

![image-20220130174659607](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220130174659607.png?raw=true)

![image-20220130174845251](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220130174845251.png?raw=true)

2.验证多实例是否启动成功

![image-20220130175014520](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220130175014520.png?raw=true)

![image-20220130175031818](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220130175031818.png?raw=true)

# Eureka服务发现和拉取

服务拉取是基于服务名称获取服务列表，然后在对服务列表做负载均衡

## 修改服务消费者的代码，修改访问的url路径，用服务名代替ip、端口

```java
String url = "http://userservice/user/" + order.getUserId();
```

## 在服务消费者的启动类中的RestTemplate添加**负载均衡**注解@LoadBalanced

```java
package cn.bttc.order;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@MapperScan("cn.bttc.order.mapper")
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
}
```

