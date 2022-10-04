# SpringAMQP-FanoutExchange
# 发布/订阅

![image-20220211201131779](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211201131779.png?raw=true)

可以看到，在订阅模型中，多了一个exchange角色，而且过程略有变化：

- Publisher：生产者，也就是要发送消息的程序，但是不再发送到队列中，而是发给交换机
- Exchange：交换机。一方面，接收生产者发送的消息。另一方面，知道如何处理消息，例如递交给某个特别队列、递交给所有队列、或是将消息丢弃。到底如何操作，取决于Exchange的类型。
- Exchange有以下3种类型：
  - Fanout：广播，将消息交给所有绑定到交换机的队列
  - Direct：定向，把消息交给符合指定routing key 的队列
  - Topic：通配符，把消息交给符合routing pattern（路由模式） 的队列
- Consumer：消费者，与以前一样，订阅队列，没有变化
- Queue：消息队列也与以前一样，接收消息、缓存消息。

Exchange（交换机）只负责转发消息，不具备存储消息的能力，因此`如果没有任何队列与Exchange绑定，或者没有符合路由规则的队列，那么消息会丢失！`

## Fanout(广播)

Fanout Exchange 会将接收到的消息广播到每一个跟其绑定的queue

![image-20220211201400035](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211201400035.png?raw=true)

### Fanout消息发送流程

1. 可以有多个队列
2. 每个队列都要绑定到Exchange（交换机）
3. 生产者发送的消息，只能发送到交换机，交换机来决定要发给哪个队列，生产者无法决定
4. 交换机把消息发送给绑定过的所有队列
5. 订阅队列的消费者都能拿到消息

### 声明交换机和队列

- 创建一个交换机 bttc.fanout，类型是Fanout
- 创建两个队列fanout.queue1和fanout.queue2，绑定到交换机bttc.fanout

![image-20220211201754026](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211201754026.png?raw=true)

Spring提供了一个接口Exchange，来表示所有不同类型的交换机：

![image-20220211202352527](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211202352527.png?raw=true)

在consumer中创建一个配置类，声明队列和交换机：

```java
@Configuration
public class FanoutConfig {
    /**
     * 声明交换机
     * @return Fanout类型交换机
     */
    @Bean
    public FanoutExchange fanoutExchange(){
        return new FanoutExchange("bttc.fanout");
    }

    /**
     * 第1个队列
     */
    @Bean
    public Queue fanoutQueue1(){
        return new Queue("fanout.queue1");
    }

    /**
     * 绑定队列和交换机
     */
    @Bean
    public Binding bindingQueue1(Queue fanoutQueue1, FanoutExchange fanoutExchange){
        return BindingBuilder.bind(fanoutQueue1).to(fanoutExchange);
    }

    /**
     * 第2个队列
     */
    @Bean
    public Queue fanoutQueue2(){
        return new Queue("fanout.queue2");
    }

    /**
     * 绑定队列和交换机
     */
    @Bean
    public Binding bindingQueue2(Queue fanoutQueue2, FanoutExchange fanoutExchange){
        return BindingBuilder.bind(fanoutQueue2).to(fanoutExchange);
    }
}
```

### 消息发送

publisher服务的SpringAmqpTest类中添加测试方法：

```java
@Test
public void testFanoutExchange() {
    // 队列名称
    String exchangeName = "bttc.fanout";
    // 消息
    String message = "hello, everyone!";
    rabbitTemplate.convertAndSend(exchangeName, "", message);
}
```

### 消息接收

在consumer服务的SpringRabbitListener中添加两个方法，作为消费者：

```java
@RabbitListener(queues = "fanout.queue1")
public void listenFanoutQueue1(String msg) {
    System.out.println("消费者1接收到Fanout消息：【" + msg + "】");
}

@RabbitListener(queues = "fanout.queue2")
public void listenFanoutQueue2(String msg) {
    System.out.println("消费者2接收到Fanout消息：【" + msg + "】");
}
```

