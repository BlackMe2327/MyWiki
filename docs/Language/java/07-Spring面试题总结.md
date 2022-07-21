# 什么是Spring框架

一般说的Spring是指Spring Framework，它是很多模块的集合，使用这些模块可以很方便的协助我们进行开发。这些模块是：核心容器、数据访问/集成、Web、AOP、工具、消息、和测试模块。

Spring的6个特征：

1. 核心技术：依赖注入，aop，事件，资源，验证，数据绑定，类型转换，i18n，SpEL
2. 测试：模拟对象，TestContext框架，Spring MVC测试，WebTestClient
3. 数据访问：事务，DAO支持，JDBC，ORM，编组XML
4. Web支持：Spring MVC和Spring WebFlux Web框架
5. 集成：远程处理，JMS,JCA,JMX,电子邮件，任务，调度，缓存
6. 语言：Kotlin,Groovy,动态语言

# 重要的Spring模块

![image-20220309152249036](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220309152249036.png?raw=true)

- Spring Core：基础，Spring的其他所有功能都依赖于此库。主要提供IOC依赖注入功能
- Spring Aspects：该模块为与AspectJ的集成提供支持
- Spring AOP：提供了面向切面的编程实现
- Spring JDBC：java数据库连接
- Spring ORM：用于支持Hibernate等ORM工具
- Spring Web：为创建Web应用程序提供支持
- Spring Test：提供了对JUnit和TestNG测试的支持

# @RestController与@Controller

**Controller返回一个页面**

单独使用`@Controller`不加`@ResponseBody`的话一般使用在要返回一个视图的情况，这种情况属于比较传统的Spring MVC的应用，对应于前后端不分离的情况。

**@RestController返回Json或Xml形式数据**

但`@RestController`只返回对象，对象数据直接以Json或XML形式写入HTTP响应中，这种情况属于RESTful Web服务，这也是目前日常开发锁接触的最常用的情况（前后端分离）

# Spring IOC和Spring AOP

## IOC

IOC是一种设计思想，就是将原本在程序中手动去创建都像的控制权，交由Spring框架来管理。IOC在其他语言中也有应用，并非Spring特有的。IOC容器是Spring用来实现IOC的载体，IOC容器实际上就是个Map(key,value),Map中存放的是各种对象。

将对象之间的相互依赖关系交给IOC容器来管理，并由IOC容器完成对象的注入。这样可以很大程序撒好难过简化应用的开发，把应用从复杂的依赖关系中解放出来。IOC容器就像是一个工厂一样，当我们需要创建一个对象的时候，只需要配置好配置文件/注解即可，完全不用考虑对象是如何创建出来的。

![image-20220309153602786](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220309153602786.png?raw=true)

## AOP

AOP能够将那些与业务无关，却为业务模块所共同调用的逻辑或责任（例如事务处理，日志管理，权限控制）封装起来，便于减少系统的重复代码，降低模块间的耦合度，并有利于未来的可拓展性和可维护性

Spring AOP就是基于动态代理的，如果要代理的对象，实现了某个接口，那么Spring AOP会使用JDK Proxy，去创建代理对象，而对于没有实现接口的对象，就无法使用JDK Proxy去进行代理，这时候Spring AOP会使用Cglib，这时候Spring AOP会使用Cglib生成一个被代理的对象的子类来作为代理。

使用AOP之后我们可以把一些通用功能抽象出来，在需要的地方直接使用即可，这样大大简化了代码量。我们需要增加新功能时也方便，这样也提高了系统扩展性。日志功能、事务管理等等场景都用到了AOP。

## Spring AOP与AspectJ AOP有什么区别

Spring AOP属于运行时增强，而AspectJ是编译时增强。Spring AOP基于代理，而AspectJ基于字节码操作

Spring AOP已经集成了AspectJ,AspectJ算得上是java生态系统中最完整的AOP框架，AspectJ相比于Spring AOP功能更加强大，但是Spring AOP相对来说更简单，如果我们切面比较少，那么两者性能差异不大。但是，当切面太多的话，最好使用AspectJ,他比Spring AOP快很多。

# Spring Bean

## Spring Bean的作用域

- singleton：唯一bean实例，Spring中默认bean是单例的
- prototype：每次请求都会创建一个新的bean实例
- request：每一次HTTP请求都会产生一个新的bean，该bean仅在当前HTTP request内有效
- session：每一次http请求都会产生一个新的bean，该bean仅在当前的http session内有效
- global-session：全局session作用域，仅仅在基于portlet的web应用中才有意义，Spring5已经没有了。Portlet是能够生成语义代码片段的小型java web插件。他们基于portlet容器，可以像servlet一样处理http请求。但是，与servlet不同，每个portlet都有不同的会话

## Spring中的单例Bean的线程安全问题

单例bean存在线程问题，主要是因为当多个线程操作同一个对象的时候，对这个对象的非静态成员变量的写操作会存在线程安全问题。

常见的有两种解决办法：

1. 在bean对象中劲量避免定义可变的成员变量（不太现实）
2. 在类中定义一个ThreadLocal成员的变量，将需要的可变成员变量保存在Threadlocal中

## @Component和@Bean的区别

1. 作用对象不同：`@Component`注解作用于类，而`@Bean`作用于方法
2. `@Component`通常是通过类路径扫描来自动侦测以及自动装配搭配Spring容器中（我们可以通过使用`ComponentScan`注解定义要扫描的路径从中找出表示了需要装配的类自动装配到Spring的bean容器）`@Bean`注解通常是我们在标有该注解的方法中定义产生这个bean,`@Bean`告诉了Spring这是某个类的示例，当我需要用它的时候还给我
3. `@Bean`注解比`@Component`注解的自定义性更强，而且很多地方我们只能通过`@Bean`注解来注册bean，比如当我们引用第三方库中的类需要装配到spring容器时，则只能通过`@Bean`来实现

**`@Bean`注解的使用示例：**

```java
@Configuration
public class AppConfig{
    @Bean
    public TransferService transferService(){
        return new TransferServiceImpl();
    }
}
```

上面代码相当于下面的xml配置:

```xml
<beans>
    <bean id="transferService" calss="cn.bttc.TransferServiceImpl">
</beans>
```

## 将一个类声明为Spring的bean的注解有哪些

一般使用`@Autowired`注解自动装配bean，要想把类表示成可用于`@Autowired`注解自动装配的bean的类，采用以下注解可实现：

- `@Component`通用的注解，可标注任意类为Spring组件。如果一个bean不知道属于那个层，可以使用`@Component`注解标注
- `@Repository`：对应持久层，主要用于数据库相关操作
- `@Service`：对应服务层，主要涉及一些复杂的逻辑
- `@Controller`：对应Spring MVC控制层，主要接受用户请求并调用Service层返回数据给前端页面

## Spring中bean的生命周期

1. Bean容器找到配置文件中Spring Bean的定义
2. Bean容器利用Java Reflection API创建一个Bean的实例
3. 如果涉及到一些属性值利用set()方法设置一些属性值
4. 如果Bean实现了BeanNameAware接口，调用setBeanName()方法，传入Bean的名字
5. 如果Bean实现了BeanClassLoaderAware接口，调用setBeanClassLoader()方法，传入ClassLoader对象的实例
6. 与上面的类似，如果实现了其他*.Aware接口，就调用相应的方法
7. 如果有和加载这个Bean的Spring容器相关的BeanPostProcessor对象，执行postProcessBeforeInitialization()方法
8. 如果Bean实现了InitializingBean接口，执行afterPropertiesSet()方法
9. 如果Bean在配置文件中的定义包含init-method属性，执行指定方法
10. 如果有和加载这个Bean的Spring容器相关的BeanPostProcessor对象，执行postProcessAfterInitialization()方法
11. 当要销毁Bean的时候，如果Bean实现了DisposableBean接口，执行destroy()方法
12. 当要销毁Bean的时候，如果Bean在配置文件中的定义包含destroy-method属性，执行指定的方法

![image-20220309191054173](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220309191054173.png?raw=true)

# Spring MVC

## Spring MVC工作原理

1. 客户端发送请求，直接请求到DispatcherServlet
2. DispatcherServlet根据请求信息调用HandlerMapping,解析请求对应的Handler
3. 解析到对应的Handler后，开始由HandlerAdapter适配器处理
4. HandlerAdapter会根据Handler来调用真正的处理器处理请求，并处理相应的业务逻辑
5. 处理器处理完业务后，会返回一个ModelAndView对象，Model是返回的数据对象，View是个逻辑上的View
6. ViewResolver会根据逻辑View查找实际的View
7. DispaterServlet把返回的Model传给View
8. 把View返回给请求者

# Spring事务

## Spring管理事务的方式

1. 编程式事务，在代码中硬编码（不推荐）
2. 声明式事务，在配置文件中配置（推荐）

**声明式事务分两种：**

1. 基于xml的声明式事务
2. 基于注解的声明式事务

## Spring事务中的隔离级别有哪几种

**TransactionDefinition接口中定义了五个表示隔离级别的常量：**

1. TransactionDefinition.ISOLATION_DEFAULT：使用后端数据库默认的隔离级别，Mysql默认采用的REPEATABLE_READ隔离级别
2. TransactionDefinition.ISOLATION_READ_UNCOMMITTED：最低的隔离级别，允许读取尚未提交的数据变更，可能会导致脏读、幻读或不可重复读
3. TransactionDefinition.ISOLATION_READ_COMMITTED：允许读取并发事务已经提交的数据，可以组织脏读，但是幻读或不可重复读仍有可能发生
4. TransactionDefinition.ISOLATION_REPEATABLE_READ：对同一字段多次读取结果都是一致的，除非数据是被本身事务自己所修改的，可以阻止脏读和不可重复读，但幻读仍有可能发生
5. TransactionDefinition.ISOLATION_SERIALIZABLE：最高的隔离级别，完全服从ACID的隔离级别。所有的事务一次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，该级别可以防止脏读、不可重复读以及幻读。但是这将严重影响程序性能。通常情况下也不会用到该级别。

## Spring事务中的事务传播行为

### 支持当前事务的情况

- TransactionDefinition.PROPAGATION_REQUIRED：如果当前存在事务，则加入该事务；如果没有事务，则创建一个新的事务
- TransactionDefinition.PROPAGATION_SUPPORTS：如果当前存在事务，则加入该事务；如果没有事务，则以非事务的方式继续运行
- TransactionDefinition.PROPAGATION_MANDATORY：如果当前存在事务，则加入该事务；如果当前没有事务，则抛出异常

### 不支持当前事务的情况

- TransactionDefinition.PROPAGATION_REQUIRES_NEW：创建一个新的事务，如果当前存在事务，则把当前事务挂起
- TransactionDefinition.PROPAGATION_NOT_SUPPORTED：以非事务方式运行，如果当前存在事务，则把当前事务挂起
- TransactionDefinition.PROPAGATION_NEVER：以非事务方式运行，如果当前存在事务，则抛出异常

### 其他情况

TransactionDefinition.PROPAGATION_NESTED：如果当前存在事务，则创建一个事务作为当前事务的嵌套事务来运行；如果当前没有事务，则该取值等价于TransactionDefinition.PROPAGATION_REQUIRED

## Transactional(roolbackFor=Exception.class)注解

当`@Transactional`注解作用于类上时，该类的所有public方法都具有该类型的事务属性，同时，我们也可以在方法级别使用该标注来覆盖类级别的定义。如果类或者方法加了这个注解，那么这个类里面的方法抛出异常，就会回滚，数据库里面的数据也会回滚。

在`@Transactional`注解中如果不配置rollbackFor属性，那么事务只会在遇到RuntimeException的时候才会回滚，加上rollbackFor=Exception.class，可以让事务在遇到非运行时异常时也回滚。

