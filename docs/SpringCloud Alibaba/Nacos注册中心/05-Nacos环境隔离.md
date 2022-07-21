# Nacos环境隔离

## 环境隔离 - namespace

Nacos中服务存储和数据存储的最外层都是一个名为namespace的东西，用来做最外层隔离

![image-20220201144026658](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220201144026658.png?raw=true)

## Nacos环境隔离实际操作

①每个namespace都有唯一id

②服务设置namespace时要写id而不是名称

③不同namespace下的服务互相不可见

### 创建namespace，用来隔离不同环境

public(保留空间)是Nacos默认产生的命名空间

![image-20220201163303494](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220201163303494.png?raw=true)

### 编辑新的命名空间信息

命名空间ID为选填项，不填则默认为UUID

![image-20220201163503908](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220201163503908.png?raw=true)

### 保存后可以在控制台看见新的命名空间

![image-20220201163641650](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220201163641650.png?raw=true)

此时dev命名空间中没有任何服务

![image-20220201163748768](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220201163748768.png?raw=true)

### 在服务消费者的配置文件中设置命名空间

```yaml
spring:
  application:
    name: orderservice
  cloud:
    nacos:
      server-addr: localhost:8848
      discovery:
        cluster-name: BJ # 集群名称
        namespace: ad04ea8d-50ee-4dd6-bf38-a71f8337c117 # 命名空间 填ID
```

### 重启服务消费者

![image-20220201164148304](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220201164148304.png?raw=true)

![image-20220201164208720](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220201164208720.png?raw=true)

### 访问服务消费者

此时因为namespace的不同，会找不到服务提供者，服务消费者控制台会报错

![image-20220201164334947](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220201164334947.png?raw=true)



