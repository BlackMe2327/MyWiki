[toc]

# 1.Spring特征

1. 轻量：从大小与开销方面而言Spring是轻量的。完整的Spring框架可以在一个大小只有1M多的JAR文件里发布，并且Spring所需的处理开销也是微不足道的。此外，Spring是非侵入式的：典型的，Spring应用中的对象不依赖于Spring的特定类

2. 控制反转：Spring通过一种称为控制反转IOC的技术促进了低耦合。当应用了IOC，一个对象依赖的其他对象会通过被动的方式传递进来，而不是这个对象自己创建或者查找依赖对象。

3. Spring支持面向切面编程，并且把应用业务逻辑和系统服务分开。

4. 容器：Spring包含并管理应用对象的配置和生命周期，在这个意义上他是一种容器，你可以配置你的每个bean如何被创建---基于一个可配置原型，你的bean可以创建一个单独的实例或者每次需要时都生成一个新的实例---以及它们是如何相互关联的

5. 框架：Spring可以将简单的组件配置、组合为复杂的应用。在Spring中，应用对象被声明式的组合，典型的是在一个xml文件里。Spring也提供了很多基础功能（事务管理、持久化框架集成等），将应用逻辑的开发留给开发者。

   

# 2.Spring核心组件

![image-20220324135903042](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220324135903042.png?raw=true)

## 2.1Test

对应spring-test.jar. Spring提供的测试工具, 可以整合JUnit测试, 简化测试环节.

## 2.2Core Container

1. Beans, 对应spring-beans.jar. Spring进行对象管理时依赖的jar包.
2. Core, 对应spring-core.jar, Spring核心jar包.
3. Context, 对应spring-context.jar, Spring容器上下文对象.
4. SpEL, 对应spring-expression.jar, Spring表达式语言.

## 2.3Data Access

Spring对数据访问层的封装

1. JDBC, 对应spring-jdbc.jar. Spring对jdbc的封装, 当需要使用spring连接数据库时使用. spring-jdbc.jar需要依赖spring-tx.jar.
2. Transactions, 对应spring-tx.jar. 事务管理
3. ORM, 对应spring-orm.jar. spring整合第三方orm框架需要使用的jar包, 例如Hibernate框架.
   

## 2.4AOP

面向切面编程，对应spring-aop.jar

## 2.5Web

Spring对javax下的接口或类做的扩展功能.

1. spring-web.jar, 对Servlet, filter, Listener等做的增强.
2. spring-webmvc.jar, 实际上就是SpringMVC框架. 需要依赖spring环境和spring-web.jar.

# 3.Spring常用模块

## 3.1核心容器

​		核心容器提供Spring框架的基本功能。核心容器的主要组件是BeanFactory,它是工厂模式的实现。BeanFactory使用控制反转（IOC）模式将应用程序的配置和依赖性规范与实际的应用程序代码分开。

## 3.2Spring 上下文

​		Spring上下文是一个配置文件，向Spring框架提供上下文信息。Spring上下文包括企业服务，例如JNDI、EJB、电子邮件、国际化、校验和调度服务

## 3.3Spring AOP

​		通过配置管理特性，Spring AOP模块直接将面向切面的编程功能集成到了Spring框架中。可以将一些通用任务，如安全、事务、日志等模块等集中进行管理，提高了复用性和管理的便捷性。

## 3.4Spring DAO

​		为JDBC DAO抽象层提供了有意义的异常层次结构，可用该结构来管理异常处理和不同数据库供应商抛出的错误消息，异常层次结构简化了错误处理，并且极大地降低了需要编写的异常代码数量（例如打开和关闭连接）。Spring DAO的面向JDBC的异常遵从通用的DAO异常层次结构

## 3.5Spring ORM

​		Spring框架插入了若干个ORM框架，从而提供了ORM的对象关系工具，其中包括JDO、Hibernate、和iBatis SQL map。这些都遵从Spring的通用事务和DAO异常层次结构

## 3.6Spring Web模块

​		Web上下文模块建立在应用程序上下文模块之上，为基于Web的应用程序提供了上下文。所以，Spring框架支持与Jakarta Struts的集成。Web模块还简化了处理多部分请求以及将请求参数绑定到域对象的工作。

## 3.7Spring MVC框架

​		MVC框架是一个全功能的构建Web应用程序的MVC实现。通过策略接口，MVC框架变成为高度可配的，MVC容纳了大量视图技术，其中包括JSP、Velocity、Tiles、iText和POI

# 4.Spring主要包

1. org.springframework.core：Spring的核心工具包，其他包依赖此包
2. org.springframework.beans：所有应用都用到，包含访问配置文件，创建和管理bean等
3. org.springframework.aop：Spring面向切面编程，提供AOP的实现
4. org.springframework.context：提供在基础IOC功能上的扩展服务，例如邮件服务、任务调度
5. org.springframework.web.mvc：包含SpringMVC应用开发时所需的核心类
6. org.springframework.transaction：为JDBC,Hibernate,JDO,JPA提供一致的声明式和编程式事务管理
7. org.springframework.web：包含web应用开发时，用到的Spring框架时所需要的的核心类
8. org.springframework.aspects：Spring提供的堆AspectJ框架的整合
9. org.springframework.test：对JUNIT等测试框架的简单封装
10. org.springframework.asm：Spring3.0开始提供自己独立的asm.jar包
11. org.springframework.context.support：Spring context的扩展支持，用于MVC方面
12. org.springframework.expression：Spring表达式语言
13. org.springframework.instrument.tomcat：Spring对tomcat连接池的集成
14. org.springframework.instrument：Spring对服务器的代理接口
15. org.springframework.jdbc：对JDBC的简单封装
16. org.springframework.jms：为简化jms api的使用而做的简单封装
17. org.springframework.orm：整合第三方的orm实现，如hibernate,ibatis,jdo,jpa等
18. org.springframework.oxm：Spring对于object/xml映射的支持，可以让java与xml来回切换
19. org.springframework.portlet：SpringMVC的增强
20. org.springframework.web.servlet：对J2EE6.0 servlet3.0的支持
21. org.springframework.struts：整合对struts框架的支持，更方便更容易的集成struts框架

# 5.Spring中用到的设计模式

1. 工厂模式：BeanFactory就是简单工厂模式的体现，用来创建对象的实 例；

2. 单例模式：Bean默认为单例模式。
3. 代理模式：Spring的AOP功能用到了JDK的动态代理和CGLIB字节码生 成技术；
4. 模板方法：用来解决代码重复的问题。比如. RestTemplate, JmsTemplate, JpaTemplate。
5. 观察者模式：定义对象键一种一对多的依赖关系，当一个对象的状态发 生改变时，所有依赖于它的对象都会得到通知被自动更新，如Spring中 listener的实现–ApplicationListener。

# 6.Spring中不同类型的事件

Spring 提供了以下5种标准的事件：
1. 上下文更新事件（ContextRefreshedEvent）：在调用 ConfigurableApplicationContext 接口中的refresh()方法时被触发。
2. 上下文开始事件（ContextStartedEvent）：当容器调用 ConfigurableApplicationContext的Start()方法开始/重新开始容器时触 发该事件。
3. 上下文停止事件（ContextStoppedEvent）：当容器调用 ConfigurableApplicationContext的Stop()方法停止容器时触发该事件。
4. 上下文关闭事件（ContextClosedEvent）：当ApplicationContext被 关闭时触发该事件。容器被关闭时，其管理的所有单例Bean都被销毁。
5. 请求处理事件（RequestHandledEvent）：在Web应用中，当一个 http请求（request）结束触发
该事件。如果一个bean实现了 ApplicationListener接口，当一个ApplicationEvent 被发布以后，bean 会自动被通知。

# 7.Spring中不同组件

Spring 应用一般有以下组件：

- 接口 - 定义功能。
- Bean 类 - 它包含属性，setter 和 getter 方法，函数等。
- Bean 配置文件 - 包含类的信息以及如何配置它们。
- Spring 面向切面编程（AOP） - 提供面向切面编程的功能。
- 用户程序 - 它使用接口。

# 8.Spring bean的作用域和生命周期

## 8.1作用域

| 类别        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| singleton   | 在spring IoC容器仅存在一个Bean实例，Bean以单例方式存在，bean作用域范围的默认值。 |
| prototype   | 每次从容器中调用Bean时，都返回一个新的实例，即每次调用getBean()时，相当于执行newXxxBean()。 |
| request     | 每次HTTP请求都会创建一个新的Bean，该作用域仅适用于web的Spring WebApplicationContext环境。 |
| session     | 同一个HTTP Session共享一个Bean，不同Session使用不同的Bean。该作用域仅适用于web的Spring WebApplicationContext环境。 |
| application | 限定一个Bean的作用域为`ServletContext`的生命周期。该作用域仅适用于web的Spring WebApplicationContext环境。 |

## 8.2生命周期

![image-20220324144125484](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220324144125484.png?raw=true)

Bean 生命周期的整个执行过程描述如下。

1. Spring 启动，查找并加载需要被 Spring 管理的 Bean，对 Bean 进行实例化。
2. 对 Bean 进行属性注入。
3. 如果 Bean 实现了 BeanNameAware 接口，则 Spring 调用 Bean 的 setBeanName() 方法传入当前 Bean 的 id 值。
4. 如果 Bean 实现了 BeanFactoryAware 接口，则 Spring 调用 setBeanFactory() 方法传入当前工厂实例的引用。
5. 如果 Bean 实现了 ApplicationContextAware 接口，则 Spring 调用 setApplicationContext() 方法传入当前 ApplicationContext 实例的引用。
6. 如果 Bean 实现了 BeanPostProcessor 接口，则 Spring 调用该接口的预初始化方法 postProcessBeforeInitialzation() 对 Bean 进行加工操作，此处非常重要，Spring 的 AOP 就是利用它实现的。
7. 如果 Bean 实现了 InitializingBean 接口，则 Spring 将调用 afterPropertiesSet() 方法。
8. 如果在配置文件中通过 init-method 属性指定了初始化方法，则调用该初始化方法。
9. 如果 BeanPostProcessor 和 Bean 关联，则 Spring 将调用该接口的初始化方法 postProcessAfterInitialization()。此时，Bean 已经可以被应用系统使用了。
10. 如果在 bean 中指定了该 Bean 的作用域为 singleton，则将该 Bean 放入 Spring IoC 的缓存池中，触发 Spring 对该 Bean 的生命周期管理；如果在bean 中指定了该 Bean 的作用域为 prototype，则将该 Bean 交给调用者，调用者管理该 Bean 的生命周期，Spring 不再管理该 Bean。
11. 如果 Bean 实现了 DisposableBean 接口，则 Spring 会调用 destory() 方法销毁 Bean；如果在配置文件中通过 destory-method 属性指定了 Bean 的销毁方法，则 Spring 将调用该方法对 Bean 进行销毁。