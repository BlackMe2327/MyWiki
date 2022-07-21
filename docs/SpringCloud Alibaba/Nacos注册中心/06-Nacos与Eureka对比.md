# Nacos与Eureka对比

## Nacos与eureka的共同点

①都支持服务注册和服务拉取

②都支持服务提供者心跳方式做健康检测

## Nacos与Eureka的区别

①Nacos支持服务端主动检测提供者状态：临时实例采用心跳模式，非临时实例采用主动检测模式

②临时实例心跳不正常会被剔除，非临时实例则不会被剔除

③Nacos支持服务列表变更的消息推送模式，服务列表更新比Eureka及时

④Nacos集群默认采用AP（强调服务可用性）方式，当集群中存在非临时实例时，采用CP（强调数据可靠性和一致性）模式；Eureka采用AP方式

## Nacos注册中心细节分析

![image-20220201170152267](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220201170152267.png?raw=true)

## 临时实例和非临时实例

服务注册到Nacos时，可以选择注册为临时或非临时实例，默认为临时实例，通过下面的配置来设置为非临时实例

```yaml
spring:
  cloud:
    nacos:
      server-addr: localhost:8848
      discovery:
        cluster-name: BJ # 集群名称
        namespace: ad04ea8d-50ee-4dd6-bf38-a71f8337c117 # dev环境，命名空间 填ID
        ephemeral: false #设置为非临时实例
```

