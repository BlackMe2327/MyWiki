# mysql和ES实现数据同步

## 思路分析

常见的数据同步方案有三种：

- 同步调用
- 异步通知
- 监听binlog

### 同步调用

基本步骤如下：

- 服务1对外提供接口，用来修改elasticsearch中的数据
- 服务2在完成数据库操作后，直接调用服务1提供的接口，

![image-20220216151212163](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220216151212163.png?raw=true)

### 异步通知

- 服务2对mysql数据库数据完成增、删、改后，发送MQ消息
- 服务1监听MQ，接收到消息后完成elasticsearch数据修改

![image-20220216151519384](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220216151519384.png?raw=true)

### 监听binlog

- 给mysql开启binlog功能
- mysql完成增、删、改操作都会记录在binlog中
- 服务1基于canal监听binlog变化，实时更新elasticsearch中的内容

![image-20220216151809022](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220216151809022.png?raw=true)

### 选择方案

方式一：同步调用

- 优点：实现简单，粗暴
- 缺点：业务耦合度高

方式二：异步通知

- 优点：低耦合，实现难度一般
- 缺点：依赖mq的可靠性

方式三：监听binlog

- 优点：完全解除服务间耦合
- 缺点：开启binlog增加数据库负担、实现复杂度高

