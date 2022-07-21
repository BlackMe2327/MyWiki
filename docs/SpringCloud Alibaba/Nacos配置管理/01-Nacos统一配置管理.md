# Nacos实现配置管理

①在Nacos中添加配置文件

②在微服务中引入nacos的config依赖

③在微服务中添加bootstrap.yml，配置nacos地址、当前环境、服务名称、文件后缀名、命名空间。这些决定了程序启动时去nacos读取哪个文件

## 在Nacos中添加配置信息

![image-20220201174502717](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220201174502717.png?raw=true)

![image-20220201175734139](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220201175734139.png?raw=true)

## 配置获取的流程

### 没有Nacos时的配置文件读取流程

![image-20220201180305736](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220201180305736.png?raw=true)

### 交由Nacos进行统一配置管理后的读取流程

![image-20220201180633560](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220201180633560.png?raw=true)

## 操作步骤

### 引入Nacos的配置管理客户端的依赖

```xml
 <!--nacos配置管理依赖-->
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
</dependency>
```

### 在服务中的resource目录下新建bootstrap.yml

bootstrap.yml文件是一个引导文件，优先级高于application.yml，在bootstrap.yml中配置的内容在application.yml中无需再次配置，bootstrap.yml的内容如下：

```yaml
spring:
  application:
    name: userservice # 服务名称
  profiles:
    active: dev # 开发环境
  cloud:
    nacos:
      config:
        file-extension: yaml # 文件后缀
        server-addr: localhost:8848
        namespace: ad04ea8d-50ee-4dd6-bf38-a71f8337c117 #配置如果在namespace下要填写namespace的id,不然无法读取bootstrap.yml的配置
```

### 验证是否从Nacos拉取到了配置

将pattern.dateformat这个属性注入到UserController中做测试：

```java
@Slf4j
@RestController
@RequestMapping("/user")
public class UserController {

    @Value("${pattern.dateformat}")
    private String dateformat;

    @GetMapping("/now")
    public String now(){
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(dateformat, Locale.CHINA));
    }
}
```

# Nacos配置热更新

Nacos配置更改后，微服务可以实现热更新，方式：

①通过@Value注解注入，结合@RefreshScope来刷新

②通过@ConfigurationProperties注入，自动刷新

注意事项：

- 不是所有的配置都适合放到配置中心，维护起来比较麻烦
- 建议将一些关键参数，需要运行时调整的参数放到nacos配置中心，一般都是自定义配置

Nacos中的配置文件变更后，微服务无需重启就可以感知。可以通过下面两种配置实现：

## 在@Value注入的变量所在类上添加注解@RefreshScope

```java
@Slf4j
@RestController
@RequestMapping("/user")
@RefreshScope
public class UserController {

    //nacos管理的配置属性
    @Value("${pattern.dateformat}")
    private String dateformat;

    @GetMapping("/now")
    public String now(){
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(dateformat, Locale.CHINA));
    }
}
```

## 使用@ConfigurationProperties注解(推荐使用)

新建一个配置类PatternProperties

```java
@Data
@Component
@ConfigurationProperties(prefix = "pattern")
public class PatternProperties {
    private String dateformat;
}
```

```java
@Slf4j
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private PatternProperties properties;

    @GetMapping("/now")
    public String now(){
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(properties.getDateformat(), Locale.CHINA));
    }
}
```

# Nacos多环境配置共享

**微服务会从nacos读取的配置文件：**

- [服务名]-[spring.profile.active].yaml，环境配置
- [服务名].yaml，默认配置，多环境共享

**优先级：**

1. [服务名]-[环境].yaml 
2. [服务名].yaml 
3.  本地配置

![image-20220203143627826](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220203143627826.png?raw=true)

## Nacos新建多环境共享配置

![image-20220202141012465](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220202141012465.png?raw=true)

![image-20220202141128515](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220202141128515.png?raw=true)

## 修改配置类

```java
@Data
@Component
@ConfigurationProperties(prefix = "pattern")
public class PatternProperties {
    private String dateformat;	
    private String envSharedValue;	//多环境共享配置
}
```

## 添加测试接口

```java
@Slf4j
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private PatternProperties properties;

    @GetMapping("/prop")
    public PatternProperties properties(){
        return properties;
    }
}
```

## 验证结果

![image-20220203142614174](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220203142614174.png?raw=true)





