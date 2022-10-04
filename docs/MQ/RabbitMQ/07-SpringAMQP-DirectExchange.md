# SpringAMQP-DirectExchange
# DirectExchange(路由模式)

`Direct Exchange` 会将接收到的消息根据规则路由到指定的Queue，因此称为路由模式（routes）。

- 每一个Queue都与Exchange设置一个`BindingKey`
- 发布者发送消息时，指定消息的`RoutingKey`
- Exchange将消息路由到`BindingKey`与消息`RoutingKey`一致的队列

![image-20220211211109325](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211211109325.png?raw=true)

## 基于注解声明队列和交换机

![image-20220211211130113](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211211130113.png?raw=true)

```java
@RabbitListener(bindings = @QueueBinding(
    value = @Queue(name = "direct.queue1"),
    exchange = @Exchange(name = "bttc.direct", type = ExchangeTypes.DIRECT),
    key = {"key1", "key2"}
))
public void listenDirectQueue1(String msg){
    System.out.println("消费者接收到direct.queue1的消息：【" + msg + "】");
}

@RabbitListener(bindings = @QueueBinding(
    value = @Queue(name = "direct.queue2"),
    exchange = @Exchange(name = "bttc.direct", type = ExchangeTypes.DIRECT),
    key = {"key1", "key3"}
))
public void listenDirectQueue2(String msg){
    System.out.println("消费者接收到direct.queue2的消息：【" + msg + "】");
}
```

## 消息发送

在publisher服务的SpringAmqpTest类中添加测试方法：

```java
@Test
public void testSendDirectExchange() {
    // 交换机名称
    String exchangeName = "bttc.direct";
    // 消息
    String message = "谁把爷电动车骑走了？";
    // 发送消息
    rabbitTemplate.convertAndSend(exchangeName, "key1", message);
}
```

## 总结

描述下Direct交换机与Fanout交换机的差异？

- Fanout交换机将消息路由给每一个与之绑定的队列
- Direct交换机根据RoutingKey判断路由给哪个队列
- 如果多个队列具有相同的RoutingKey，则与Fanout功能类似

基于@RabbitListener注解声明队列和交换机有哪些常见注解？

- @Queue
- @Exchange

