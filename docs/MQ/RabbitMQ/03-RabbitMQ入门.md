# RabbitMQ入门

## 安装RabbitMQ

参考：https://editor.csdn.net/md/?articleId=122882190

## RabbitMQ的结构和概念

RabbitMQ中的一些角色：

- publisher：生产者
- consumer：消费者
- exchange：交换机，负责消息路由
- queue：队列，存储消息
- virtualHost：虚拟主机，隔离不同租户的exchange、queue、消息的隔离

![image-20220211161813572](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211161813572.png?raw=true)

## RabbitMQ消息模型

### 基本消息队列

![image-20220211162357223](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211162357223.png?raw=true)

### 工作消息队列

![image-20220211162404782](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211162404782.png?raw=true)

### 根据交换机类型不同又划分三种

#### Fanout Exchange(广播)

![image-20220211162421081](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211162421081.png?raw=true)

#### Direct Exchange(路由)

![image-20220211162427076](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211162427076.png?raw=true)

#### Topic Exchange(主题)

![image-20220211162432909](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220211162432909.png?raw=true)

## RabbitMQ入门案例实现

### publisher实现

- 建立连接
- 创建Channel通道
- 声明队列
- 发送消息
- 关闭连接和channel

```java
public class PublisherTest {
    @Test
    public void testSendMessage() throws IOException, TimeoutException {
        // 1.建立连接
        ConnectionFactory factory = new ConnectionFactory();
        // 1.1.设置连接参数，分别是：主机名、端口号、vhost、用户名、密码
        factory.setHost("192.168.116.131");
        factory.setPort(5672);
        factory.setVirtualHost("/");
        factory.setUsername("blackme");
        factory.setPassword("123456");
        // 1.2.建立连接
        Connection connection = factory.newConnection();

        // 2.创建通道Channel
        Channel channel = connection.createChannel();

        // 3.创建队列
        String queueName = "simple.queue";
        channel.queueDeclare(queueName, false, false, false, null);

        // 4.发送消息
        String message = "hello, rabbitmq!";
        channel.basicPublish("", queueName, null, message.getBytes());
        System.out.println("发送消息成功：【" + message + "】");

        // 5.关闭通道和连接
        channel.close();
        connection.close();
    }
}
```

### consumer实现

- 建立连接
- 创建Channel通道
- 声明队列，防止队列不存在
- 订阅消息

```java
public class ConsumerTest {
    public static void main(String[] args) throws IOException, TimeoutException {
        // 1.建立连接
        ConnectionFactory factory = new ConnectionFactory();
        // 1.1.设置连接参数，分别是：主机名、端口号、vhost、用户名、密码
        factory.setHost("192.168.116.131");
        factory.setPort(5672);
        factory.setVirtualHost("/");
        factory.setUsername("blackme");
        factory.setPassword("123456");
        // 1.2.建立连接
        Connection connection = factory.newConnection();

        // 2.创建通道Channel
        Channel channel = connection.createChannel();

        // 3.创建队列,防止队列不存在
        String queueName = "simple.queue";
        channel.queueDeclare(queueName, false, false, false, null);

        // 4.订阅消息
        channel.basicConsume(queueName, true, new DefaultConsumer(channel){
            @Override
            public void handleDelivery(String consumerTag, Envelope envelope,
                                       AMQP.BasicProperties properties, byte[] body) throws IOException {
                // 5.处理消息
                String message = new String(body);
                System.out.println("接收到消息：【" + message + "】");
            }
        });
        System.out.println("等待接收消息。。。。");
    }
}
```





