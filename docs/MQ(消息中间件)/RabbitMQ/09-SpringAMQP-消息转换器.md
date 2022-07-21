# 消息转换器

Spring会把消息序列化为字节发送给MQ，接收消息的时候，还会把字节反序列化为Java对象。

默认情况下Spring采用的序列化方式是JDK序列化。众所周知，JDK序列化存在下列问题：

- 数据体积过大
- 有安全漏洞
- 可读性差

## 测试JDK默认转换器

我们修改消息发送的代码，发送一个Map对象：

```java
@Test
public void testSendMap() throws InterruptedException {
    // 准备消息
    Map<String,Object> msg = new HashMap<>();
    msg.put("name", "blackme");
    msg.put("age", 21);
    // 发送消息
    rabbitTemplate.convertAndSend("object.queue","", msg);
}
```

停止consumer服务

发送消息后查看RabbirMQ控制台：

![image-20220211212612425](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211212612425.png?raw=true)

## 配置JSON转换器

JDK序列化方式并不合适。我们希望消息体的体积更小、可读性更高，因此可以使用JSON方式来做序列化和反序列化。

在publisher和consumer两个服务中都引入依赖：

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
</dependency>
```

配置消息转换器。

在启动类中添加一个Bean即可：

```java
@Bean
public MessageConverter jsonMessageConverter(){
    return new Jackson2JsonMessageConverter();
}
```

测试发送消息：

```java
 @Test
 public void testSendObjectQueue(){
     HashMap<Object, Object> msg = new HashMap<>();
     msg.put("name","blackme");
     msg.put("age",21);
     rabbitTemplate.convertAndSend("object.queue", msg);
 }
```

查看RabbitMQ控制台：

![image-20220211212914706](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211212914706.png?raw=true)

编写消费者代码：

```java
@RabbitListener(queues = "object.queue")
public void listenObjectQueue(Map<String,Object> msg){
    System.out.println("接收到object.queue的消息：" + msg);
}
```

启动消费者服务后查看控制台：

![image-20220211213232212](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211213232212.png?raw=true)



