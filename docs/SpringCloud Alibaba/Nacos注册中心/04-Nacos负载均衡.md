# Nacos负载均衡

## 修改服务消费者的配置文件实现负载均衡

在服务消费者中设置负载均衡的IRule为NacosRule，这个规则优先会寻找与自己同集群的服务

在同集群中如果服务提供者有多个实例，NacosRule会采用随机方式达到负载均衡的效果

在同集群中没有要访问的服务提供者时，NacosRules会跨集群寻找要访问的服务：

```yaml
userservice:	# 服务提供者名称
  ribbon:
    NFLoadBalancerRuleClassName: com.alibaba.cloud.nacos.ribbon.NacosRule # 负载均衡规则
```

## 使用Nacos的权重配置实现负载均衡

服务器设备性能有差异，部分实例所在机器性能较好，另一些较差，我们希望性能好的机器承担更多的用户请求

Nacos提供了权重配置来控制访问频率，**权重越大则访问频率越高**

### 在Nacos控制台设置实例的权重值

①Nacos控制台可以设置实例的权重值，0~1之间

②同集群内的多个实例，权重越高被访问的频率越高

③权重设置为0则完全不会被访问

第一步：

![image-20220131181204935](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220131181204935.png?raw=true)

第二步：

![image-20220131181247080](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220131181247080.png?raw=true)

结果：将权重设置为0.1，测试可以发现8081被访问到的频率大大降低



