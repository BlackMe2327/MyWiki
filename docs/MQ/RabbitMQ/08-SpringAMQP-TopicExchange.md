# SpringAMQP-TopicExchange
# TopicExchange(主题模式)

## 说明

`Topic`类型的`Exchange`与`Direct`相比，都是可以根据`RoutingKey`把消息路由到不同的队列。只不过`Topic`类型`Exchange`可以让队列在绑定`Routing key` 的时候使用通配符！

`Routingkey` 一般都是有一个或多个单词组成，多个单词之间以`.`分割，例如： `bttc.insert`

 通配符规则：

`#`：匹配一个或多个词

`*`：匹配1个词

举例：

`item.#`：能够匹配`item.spu.insert` 或者 `item.spu`

`item.*`：只能匹配`item.spu`

![image-20220211211201756](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211211201756.png?raw=true)

## 声明交换机和队列

![image-20220211211216377](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211211216377.png?raw=true)

## 消息发送

在publisher服务的SpringAmqpTest类中添加测试方法：

```java
@Test
public void testSendTopicExchange() {
    // 交换机名称
    String exchangeName = "bttc.topic";
    // 消息
    String message = "谁把爷电动车骑走了？!";
    // 发送消息
    rabbitTemplate.convertAndSend(exchangeName, "china.news", message);
}
```

## 消息接收

在consumer服务的SpringRabbitListener中添加方法：

```java
@RabbitListener(bindings = @QueueBinding(
    value = @Queue(name = "topic.queue1"),
    exchange = @Exchange(name = "bttc.topic", type = ExchangeTypes.TOPIC),
    key = "china.#"
))
public void listenTopicQueue1(String msg){
    System.out.println("消费者接收到topic.queue1的消息：【" + msg + "】");
}

@RabbitListener(bindings = @QueueBinding(
    value = @Queue(name = "topic.queue2"),
    exchange = @Exchange(name = "bttc.topic", type = ExchangeTypes.TOPIC),
    key = "#.news"
))
public void listenTopicQueue2(String msg){
    System.out.println("消费者接收到topic.queue2的消息：【" + msg + "】");
}
```

