# 雪崩问题解决方案-Sentinel流量控制（限流）

## 簇点链路

项目内的调用链路，链路中被监控的每个接口就是一个资源。默认情况下sentinel会监控SpringMVC的每一个端点（Endpoint），因此SpringMVC的每一个端点（Endpoint）就是调用链路中的一个资源。

![image-20220218145939877](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218145939877.png?raw=true)

流控、熔断等都是针对簇点链路中的资源来设置的，因此我们可以点击对应资源后面的按钮来设置规则：

- 流控：流量控制
- 降级：降级熔断
- 热点：热点参数限流，是限流的一种
- 授权：请求的权限控制

### 示例

![image-20220218150136382](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218150136382.png?raw=true)

添加限流规则：

![image-20220218150224991](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218150224991.png?raw=true)

其含义是限制 /order/{orderId}这个资源的单机QPS为5，即每秒只允许1次请求，超出的请求会被拦截并报错。

### 用jmeter测试

#### 配置线程组

![image-20220218150439768](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218150439768.png?raw=true)

#### 添加http请求

![image-20220218150514450](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218150514450.png?raw=true)

> 注意，不要点击菜单中的执行按钮来运行。

![image-20220218150552656](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218150552656.png?raw=true)

#### 结果

![image-20220218150637717](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218150637717.png?raw=true)

可以看到，成功的请求每次只有5个

## 流控模式

流控模式有三种：

- 直接：统计当前资源的请求，触发阈值时对当前资源直接限流，也是默认的模式
- 关联：统计与当前资源相关的另一个资源，触发阈值时，对当前资源限流
- 链路：统计从指定链路访问到本资源的请求，触发阈值时，对指定链路限流

### 关联模式

**关联模式**：统计与当前资源相关的另一个资源，触发阈值时，对当前资源限流

**配置规则**：

对哪个端点限流，就点击哪个端点后面的按钮。我们是对订单查询/order/query限流，因此点击它后面的按钮：

![image-20220218151246065](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218151246065.png?raw=true)

**语法说明**：当/order/update资源访问量触发阈值时，就会对/order/query资源限流，避免影响/order/update资源。

**使用场景**：比如用户支付时需要修改订单状态，同时用户要查询订单。查询和修改操作会争抢数据库锁，产生竞争。业务需求是优先支付和更新订单的业务，因此当修改订单业务触发阈值时，需要对查询订单业务限流。

#### 添加新端点

/order/query端点，模拟订单查询

```java
@GetMapping("/query")
public String queryOrder() {
    return "查询订单成功";
}
```

/order/update端点，模拟订单更新

```java
@GetMapping("/update")
public String updateOrder() {
    return "更新订单成功";
}
```

#### 用jmeter测试关联模式

添加线程组：

![image-20220218151513635](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218151513635.png?raw=true)

1000个用户，100秒，因此QPS为10，超过了我们设定的阈值：5

添加http请求：

![image-20220218151528626](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218151528626.png?raw=true)

请求的目标是/order/update，这样这个断点就会触发阈值。

但限流的目标是/order/query，我们在浏览器访问，可以发现：

![image-20220218151719010](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218151719010.png?raw=true)

### 链路模式

**链路模式**：只针对从指定链路访问到本资源的请求做统计，判断是否超过阈值。

有查询订单和创建订单业务，两者都需要查询商品。针对从查询订单进入到查询商品的请求统计，并设置限流。

步骤：

1. 在OrderService中添加一个queryGoods方法，不用实现业务
2. 在OrderController中，改造/order/query端点，调用OrderService中的queryGoods方法
3. 在OrderController中添加一个/order/save的端点，调用OrderService的queryGoods方法
4. 给queryGoods设置限流规则，从/order/query进入queryGoods的方法限制QPS必须小于2

#### 添加查询商品方法

在order-service服务中，给OrderService类添加一个queryGoods方法：

```java
public void queryGoods(){
    System.err.println("查询商品");
}
```

#### 查询订单时，查询商品

在order-service的OrderController中，修改/order/query端点的业务逻辑：

```java
@GetMapping("/query")
public String queryOrder() {
    // 查询商品
    orderService.queryGoods();
    // 查询订单
    System.out.println("查询订单");
    return "查询订单成功";
}
```

#### 新增订单，查询商品

在order-service的OrderController中，修改/order/save端点，模拟新增订单：

```java
@GetMapping("/save")
public String saveOrder() {
    // 查询商品
    orderService.queryGoods();
    // 查询订单
    System.err.println("新增订单");
    return "新增订单成功";
}
```

#### 给查询商品添加资源标记

默认情况下，OrderService中的方法是不被Sentinel监控的，需要我们自己通过注解来标记要监控的方法。

给OrderService的queryGoods方法添加@SentinelResource注解：

```java
@SentinelResource("goods")
public void queryGoods(){
    System.err.println("查询商品");
}
```

链路模式中，是对不同来源的两个链路做监控。但是sentinel默认会给进入SpringMVC的所有请求设置同一个root资源，会导致链路模式失效。

我们需要关闭这种对SpringMVC的资源聚合，修改order-service服务的application.yml文件：

```yaml
spring:
  cloud:
    sentinel:
      web-context-unify: false # 关闭context整合
```

重启服务，访问/order/query和/order/save，可以查看到sentinel的簇点链路规则中，出现了新的资源：

![image-20220218152548448](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218152548448.png?raw=true)

#### 添加流控规则

点击goods资源后面的流控按钮，在弹出的表单中填写下面信息：

![image-20220218152754400](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218152754400.png?raw=true)

只统计从/order/query进入/goods的资源，QPS阈值为2，超出则被限流。

#### jmeter测试

添加线程组：
![image-20220218152834767](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218152834767.png?raw=true)

200个用户，50秒内发完，QPS为4，超过了我们设定的阈值2

添加/order/save的http请求：

![image-20220218152919223](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218152919223.png?raw=true)

添加/order/query的http请求：

![image-20220218152943348](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218152943348.png?raw=true)

运行结果：

![image-20220218153022820](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218153022820.png?raw=true)

> /order/save的http请求完全不受影响。

![image-20220218153033701](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218153033701.png?raw=true)

> /order/query的http请求每次只有两个通过

## 流控效果

流控效果是指请求达到流控阈值时应该采取的措施，包括三种：

- 快速失败：达到阈值后，新的请求会被立即拒绝并抛出FlowException异常。是默认的处理方式。

- warm up：预热模式，对超出阈值的请求同样是拒绝并抛出异常。但这种模式阈值会动态变化，从一个较小值逐渐增加到最大阈值。

- 排队等待：让所有的请求按照先后次序排队执行，两个请求的间隔不能小于指定时长

### warm up

> 阈值一般是一个微服务能承担的最大QPS，但是一个服务刚刚启动时，一切资源尚未初始化（**冷启动**），如果直接将QPS跑到最大值，可能导致服务瞬间宕机。

> warm up也叫**预热模式**，是应对服务冷启动的一种方案。请求阈值初始值是 maxThreshold / coldFactor，持续指定时长后，逐渐提高到maxThreshold值。而coldFactor的默认值是3.

> 例如，我设置QPS的maxThreshold为10，预热时间为5秒，那么初始阈值就是 10 / 3 ，也就是3，然后在5秒后逐渐增长到10.

#### 配置流控规则

![image-20220218153531139](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218153531139.png?raw=true)

#### jmeter测试

添加线程组：

![image-20220218153607582](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218153607582.png?raw=true)

QPS为10.

添加http请求：

![image-20220218153630438](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218153630438.png?raw=true)

测试结果：

刚刚启动时，大部分请求失败，成功的只有3个，说明QPS被限定在3：

![image-20220218153702057](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218153702057.png?raw=true)

随着时间推移，成功比例越来越高：

![image-20220218153906584](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218153906584.png?raw=true)

到Sentinel控制台查看实时监控：

![image-20220218154003709](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218154003709.png?raw=true)

### 排队等待

> 排队等待是让所有请求进入一个队列中，然后按照阈值允许的时间间隔依次执行。后来的请求必须等待前面执行完成，如果请求预期的等待时间超出最大时长，则会被拒绝。

例如：QPS = 5，意味着每200ms处理一个队列中的请求；timeout = 2000，意味着**预期等待时长**超过2000ms的请求会被拒绝并抛出异常。

那什么叫做预期等待时长呢？

比如现在一下子来了12 个请求，因为每200ms执行一个请求，那么：

- 第6个请求的**预期等待时长** =  200 * （6 - 1） = 1000ms
- 第12个请求的预期等待时长 = 200 * （12-1） = 2200ms



现在，第1秒同时接收到10个请求，但第2秒只有1个请求，此时QPS的曲线这样的：

![image-20220218154143778](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218154143778.png?raw=true)

如果使用队列模式做流控，所有进入的请求都要排队，以固定的200ms的间隔执行，QPS会变的很平滑：

![image-20220218154159242](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218154159242.png?raw=true)

平滑的QPS曲线，对于服务器来说是更友好的。

#### 添加流控规则

给/order/{orderId}这个资源设置限流，最大QPS为10，利用排队的流控效果，超时时长设置为5000ms

![image-20220218154309681](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218154309681.png?raw=true)

#### jmeter测试

添加线程组：

QPS为15，已经超过了我们设定的10。

如果是之前的 快速失败、warmup模式，超出的请求应该会直接报错。

![image-20220218154411569](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218154411569.png?raw=true)

添加http请求：

![image-20220218154425906](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218154425906.png?raw=true)

测试结果：

全部都通过了。

![image-20220218154504565](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218154504565.png?raw=true)

sentinel查看实时监控的QPS曲线：

![image-20220218154529269](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218154529269.png?raw=true)

QPS非常平滑，一致保持在10，但是超出的请求没有被拒绝，而是放入队列。因此**响应时间**（等待时间）会越来越长。

当队列满了以后，才会有部分请求失败：

![image-20220218154627666](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218154627666.png?raw=true)

## 热点参数限流

之前的限流是统计访问某个资源的所有请求，判断是否超过QPS阈值。而热点参数限流是**分别统计参数值相同的请求**，判断是否超过QPS阈值。

### 全局参数限流

一个根据id查询商品的接口：

![image-20220218154814101](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218154814101.png?raw=true)

访问/goods/{id}的请求中，id参数值会有变化，热点参数限流会根据参数值分别统计QPS，统计结果：

![image-20220218154845453](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218154845453.png?raw=true)

当id=1的请求触发阈值被限流时，id值不为1的请求不受影响。

配置示例：

![image-20220218154919480](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218154919480.png?raw=true)

代表的含义是：对hot这个资源的0号参数（第一个参数）做统计，每1秒**相同参数值**的请求数不能超过5

### 热点参数限流

刚才的配置中，对查询商品这个接口的所有商品一视同仁，QPS都限定为5.

而在实际开发中，可能部分商品是热点商品，例如秒杀商品，我们希望这部分商品的QPS限制与其它商品不一样，高一些。那就需要配置热点参数限流的高级选项了：

#### 标记资源

给order-service中的OrderController中的/order/{orderId}资源添加注解：

![image-20220218155419890](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218155419890.png?raw=true)

#### 添加热点参数限流规则

![image-20220218155549723](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218155549723.png?raw=true)

#### jmeter测试

添加线程组：

这里发起请求的QPS为5.

![image-20220218155622500](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218155622500.png?raw=true)

添加三个http请求：

普通参数，QPS阈值为2

例外项，QPS阈值为4

例外项，QPS阈值为10

![image-20220218155725150](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218155725150.png?raw=true)

运行结果：

例外项，QPS阈值为10的http请求

![image-20220218155846383](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220218155846383.png?raw=true)