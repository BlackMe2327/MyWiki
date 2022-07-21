# SpringAMQP

SpringAMQP是基于RabbitMQ封装的一套模板，并且还利用SpringBoot对其实现了自动装配，使用起来非常方便。

SpringAmqp的官方地址：https://spring.io/projects/spring-amqp

SpringAMQP提供了三个功能：

- 自动声明队列、交换机及其绑定关系
- 基于注解的监听器模式，异步接收消息
- 封装了RabbitTemplate工具，用于发送消息 

# Basic Queue 简单队列模型

## 在项目中引入依赖

```xml
<!--AMQP依赖，包含RabbitMQ-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
<!--单元测试-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
</dependency>
```

## 消息发送

### 配置MQ地址（publisher）

```yaml
spring:
  rabbitmq:
    host: 192.168.116.131 # rabbitMQ的ip地址
    port: 5672 # 端口
    username: blackme	# 用户名
    password: 123456 # 密码
    virtual-host: / #虚拟主机
```

### 编写测试代码

利用RabbitTemplate实现消息发送：

```java
@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringAmqpTest {
    @Autowired
    private RabbitTemplate rabbitTemplate;
    @Test
    public void testSimpleQueue() {
        //队列名称
        String queueName = "simple.queue";
        //消息内容
        String message = "hello, spring amqp!";
        //发送消息
        rabbitTemplate.convertAndSend(queueName, message);
    }
}
```

## 消息接收

### 配置MQ地址（consumer）

```yaml
spring:
  rabbitmq:
    host: 192.168.116.131 # rabbitMQ的ip地址
    port: 5672 # 端口
    username: blackme	# 用户名
    password: 123456 # 密码
    virtual-host: / #虚拟主机
```

### 编写测试代码

在consumer服务的包中新建一个类SpringRabbitListener，代码如下：

```java

@Component
public class SpringRabbitListener {

    @RabbitListener(queues = "simple.queue")
    public void listenSimpleQueueMessage(String msg) throws InterruptedException {
        System.out.println("spring 消费者接收到消息：【" + msg + "】");
    }
}
```

### 测试

启动consumer服务，然后在publisher服务中运行测试代码，发送MQ消息





