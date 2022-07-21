# Sentinel规则持久化

> sentinel的所有规则都是内存存储，重启后所有规则都会丢失。在生产环境下，我们必须确保这些规则的持久化，避免丢失。

## 规则管理模式

规则是否能持久化，取决于规则管理模式，sentinel支持三种规则管理模式：

| **推送模式**                                                 | **说明**                                                     | **优点**                     | **缺点**                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------------ |
| [原始模式](https://github.com/alibaba/Sentinel/wiki/在生产环境中使用-Sentinel) | API 将规则推送至客户端并直接更新到内存中，扩展写数据源（[WritableDataSource](https://github.com/alibaba/Sentinel/wiki/动态规则扩展)），默认就是这种 | 简单，无任何依赖             | 不保证一致性；规则保存在内存中，重启即消失。严重不建议用于生产环境 |
| [Pull   ](https://github.com/alibaba/Sentinel/wiki/在生产环境中使用-Sentinel)[模式](https://github.com/alibaba/Sentinel/wiki/在生产环境中使用-Sentinel) | 扩展写数据源（[WritableDataSource](https://github.com/alibaba/Sentinel/wiki/动态规则扩展)），  客户端主动向某个规则管理中心定期轮询拉取规则，这个规则中心可以是 RDBMS、文件 等 | 简单，无任何依赖；规则持久化 | 不保证一致性；实时性不保证，拉取过于频繁也可能会有性能问题。 |
| **[Push   ](https://github.com/alibaba/Sentinel/wiki/在生产环境中使用-Sentinel)****[模式](https://github.com/alibaba/Sentinel/wiki/在生产环境中使用-Sentinel)** | 扩展读数据源（[ReadableDataSource](https://github.com/alibaba/Sentinel/wiki/动态规则扩展)），规则中心统一推送，客户端通过注册监听器的方式时刻监听变化，比如使用  Nacos、Zookeeper  等配置中心。这种方式有更好的实时性和一致性保证。**生产环境下一般采用**  **push**  **模式的数据源。** | 规则持久化；一致性；         | 引入第三方依赖                                               |

## 原始模式

> 原始模式：控制台配置的规则直接推送到Sentinel客户端，也就是我们的应用。然后保存在内存中，服务重启则丢失

![image-20220219202426827](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219202426827.png?raw=true)

## pull模式

> pull模式：控制台将配置的规则推送到Sentinel客户端，而客户端会将配置规则保存在本地文件或数据库中。以后会定时去本地文件或数据库中查询，更新本地规则。

![image-20220219202825678](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219202825678.png?raw=true)

## push模式

> push模式：控制台将配置规则推送到远程配置中心，例如Nacos。Sentinel客户端监听Nacos，获取配置变更的推送消息，完成本地配置更新。

![image-20220219204407983](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219204407983.png?raw=true)

### 引入依赖

在服务中引入sentinel监听nacos的依赖：

```xml
<dependency>
    <groupId>com.alibaba.csp</groupId>
    <artifactId>sentinel-datasource-nacos</artifactId>
</dependency>
```

### 配置nacos地址

在服务中的application.yml文件配置nacos地址及监听的配置信息：

```yaml
spring:
  cloud:
    sentinel:
      datasource:
        flow:
          nacos:
            server-addr: localhost:8848 # nacos地址
            dataId: orderservice-flow-rules
            groupId: SENTINEL_GROUP
            rule-type: flow # 还可以是：degrade、authority、param-flow
```

### 修改sentinel-dashboard源码

> SentinelDashboard默认不支持nacos的持久化，需要修改源码。

####  修改nacos依赖

在sentinel-dashboard源码的pom文件中，nacos的依赖默认的scope是test，只能在测试时使用，这里要去除：

```xml
<dependency>
    <groupId>com.alibaba.csp</groupId>
    <artifactId>sentinel-datasource-nacos</artifactId>
    <scope>test</scope>
</dependency>
```

将sentinel-datasource-nacos依赖的scope去掉：

```xml
<dependency>
    <groupId>com.alibaba.csp</groupId>
    <artifactId>sentinel-datasource-nacos</artifactId>
</dependency>
```

#### 添加nacos支持

在sentinel-dashboard的test包下，已经编写了对nacos的支持，我们需要将其拷贝到main下。

![image-20220219220210968](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219220210968.png?raw=true)

#### 修改nacos地址

然后，还需要修改测试代码中的NacosConfig类：

![image-20220219211236701](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219211236701.png?raw=true)

修改其中的nacos地址，让其读取application.properties中的配置：

```java
@Configuration
@ConfigurationProperties(prefix = "nacos")
public class NacosConfig {

    //nacos地址
    private String addr;

    @Bean
    public ConfigService nacosConfigService() throws Exception {
        //修改获取配置文件地址为addr
        return ConfigFactory.createConfigService(addr);
    }
	//添加set方法
    public void setAddr(String addr) {
        this.addr = addr;
    }
	//添加get方法
    public String getAddr() {
        return addr;
    }

    @Bean
    public Converter<List<FlowRuleEntity>, String> flowRuleEntityEncoder() {
        return JSON::toJSONString;
    }

    @Bean
    public Converter<String, List<FlowRuleEntity>> flowRuleEntityDecoder() {
        return s -> JSON.parseArray(s, FlowRuleEntity.class);
    }

}

```

在sentinel-dashboard的application.properties中添加nacos地址配置：

```properties
nacos.addr=localhost:8848
```

#### 配置nacos数据源

另外，还需要修改com.alibaba.csp.sentinel.dashboard.controller.v2包下的FlowControllerV2类：

![image-20220219211850482](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219211850482.png?raw=true)

使添加的Nacos数据源生效：

原来的样子：

```java
@Autowired
@Qualifier("flowRuleDefaultProvider")
private DynamicRuleProvider<List<FlowRuleEntity>> ruleProvider;
@Autowired
@Qualifier("flowRuleDefaultPublisher")
private DynamicRulePublisher<List<FlowRuleEntity>> rulePublisher;
```

修改后的模样：

```java
@Autowired
@Qualifier("flowRuleNacosProvider")
private DynamicRuleProvider<List<FlowRuleEntity>> ruleProvider;
@Autowired
@Qualifier("flowRuleNacosPublisher")
private DynamicRulePublisher<List<FlowRuleEntity>> rulePublisher;
```

#### 修改前端页面

接下来，还要修改前端页面，添加一个支持nacos的菜单。

修改src/main/webapp/resources/app/scripts/directives/sidebar/目录下的sidebar.html文件：

![image-20220219212223849](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219212223849.png?raw=true)

将其中的这部分注释打开：

![image-20220219212300595](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219212300595.png?raw=true)

修改其中的文本：

```html
<li ui-sref-active="active" ng-if="entry.appType==0">
    <a ui-sref="dashboard.flow({app: entry.app})">
    <i class="glyphicon glyphicon-filter"></i>&nbsp;&nbsp;流控规则 V1</a>
</li>
```

#### 重新编译、打包项目

运行IDEA中的maven插件，编译和打包修改好的Sentinel-Dashboard：

![image-20220219212457703](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219212457703.png?raw=true)

### 启动

启动方式跟官方一样：

```sh
java -jar sentinel-dashboard.jar
```

如果要修改nacos地址，需要添加参数：

```sh
java -jar -Dnacos.addr=localhost:8848 sentinel-dashboard.jar
```

### 硬性刷新

在浏览器中打开调试控制台，右键刷新按钮选择“清空缓存并强制重新加载”

![image-20220219220811538](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219220811538.png?raw=true)

只有在流控规则-Nacos中添加的规则才会在nacos中查看

添加流控规则:

![image-20220219221113936](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219221113936.png?raw=true)

到Nacos查看规则：

![image-20220219221136552](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219221136552.png?raw=true)

频繁刷新浏览器访问服务，出现限流，说明配置成功：

![image-20220219221532897](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220219221532897.png?raw=true)