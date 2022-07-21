[TOC]

# Spring Boot概述

## 什么是SpringBoot

​		Spring Boot 是 Spring 开源组织下的子项目，是 Spring 组件一站式解决方案，主要是简化了使用Spring 的难度，简省了繁重的配置，提供了各种启动器，开发者能快速上手。

## SpringBoot的优点

1. 容易上手，提升开发效率，为Spring开发提供了一个更快、更广泛的入门体验
2. 开箱即用，远离繁琐的配置。
3. 提供了一系列大型项目通用的非业务性功能，例如：内嵌服务器、安全管理、运行数据监控、运行状况检查和外部化配置等。
4. 没有代码生成，也不需要XML配置。
5. 避免大量的 Maven 导入和各种版本冲突。

## SpringBoot的核心注解

启动类上面的注解是@SpringBootApplication，它也是 Spring Boot 的核心注解，主要组合包含了以下3 个注解：

1. @SpringBootConfiguration：组合了 @Configuration 注解，实现配置文件的功能。
2. @EnableAutoConfiguration：打开自动配置的功能，也可以关闭某个自动配置的选项，如关闭数据源自动配置功能： @SpringBootApplication(exclude= { DataSourceAutoConfiguration.class })。
3. @ComponentScan：Spring组件扫描。

# 配置

## JavaConfig

Spring JavaConfig 是 Spring 社区的产品，它提供了配置 Spring IoC 容器的纯Java 方法。因此它有助于避免使用 XML 配置。使用 JavaConfig 的优点在于：

1. 面向对象的配置。由于配置被定义为 JavaConfig 中的类，因此用户可以充分利用 Java 中的面向对象功能。一个配置类可以继承另一个，重写它的@Bean 方法等。
2. 减少或消除 XML 配置。基于依赖注入原则的外化配置的好处已被证明。
3. 类型安全和重构友好。JavaConfig 提供了一种类型安全的方法来配置Spring容器。由于 Java 5.0 对泛型的支持，现在可以按类型而不是按名称检索 bean，不需要任何强制转换或基于字符串的查找。

## SpringBoot自动配置原理

注解 @EnableAutoConfiguration, @Configuration, @ConditionalOnClass 就是自动配置的核心，

@EnableAutoConfiguration 给容器导入META-INF/spring.factories 里定义的自动配置类。筛选有效的自动配置类。

每一个自动配置类结合对应的 xxxProperties.java 读取配置文件进行自动配置功能

## SpringBoot配置加载顺序

优先级从高到低，高优先级的配置覆盖低优先级的配置，所有的配置会形成互补配置 。

1. 类路径下的配置文件
2. 类路径内config子目录的配置文件
3. 当前项目根目录下的配置文件
4. 当前项目根目录下config子目录的配置文件

```java
. project-sample
├── config
│   ├── application.yml （4）
│   └── src/main/resources
|   │   ├── application.yml （1）
|   │   └── config
|   |   │   ├── application.yml （2）
├── application.yml （3）
```

**启动时加载配置文件顺序：1 > 2 > 3 > 4**

## YAML配置

YAML 现在可以算是非常流行的一种配置文件格式了，无论是前端还是后端，都可以见到 YAML 配置。那么 YAML 配置和传统的 properties 配置相比到底有哪些优势呢？
1. 配置有序，在一些特殊的场景下，配置有序很关键
2. 支持数组，数组中的元素可以是基本数据类型也可以是对象
3. 简洁

相比 properties 配置文件，YAML 还有一个缺点，就是不支持 @PropertySource 注解导入自定义的YAML 配置。

## bootstrap.properties 和 application.properties 

spring boot 核心的两个配置文件：
		bootstrap (. yml 或者 . properties)：boostrap 由父 ApplicationContext 加载的，比 applicaton 优先加载，配置在应用程序上下文的引导阶段生效。一般来说我们在 Spring Cloud Config 或者 Nacos 中会用到它。且 boostrap 里面的属性不能被覆盖；

​		application (. yml 或者 . properties)： 由ApplicatonContext 加载，用于 spring boot 项目的自动化配置。

## Spring Profiles

​		Spring Profiles 允许用户根据配置文件（dev，test，prod 等）来注册 bean。因此，当应用程序在开发中运行时，只有某些 bean 可以加载，而在PRODUCTION中，某些其他 bean 可以加载。假设我们的要求是 Swagger 文档仅适用于 QA 环境，并且禁用所有其他文档。这可以使用配置文件来完成。Spring Boot 使得使用配置文件非常简单。

# 安全

## 实现SpringBoot应用程序的安全性

​		为了实现 Spring Boot 的安全性，我们使用 spring-boot-starter-security 依赖项，并且必须添加安全配置。它只需要很少的代码。配置类将必须扩展WebSecurityConfigurerAdapter 并覆盖其方法。

spring-boot-starter-security 默认会提供一个基于 HTTP Basic 认证的安全防护策略，默认用户名为 user，访问密码则在当前 Web 应用启动的时候，打印到控制台。用户可以自行设置。

spring-boot-starter-security 还会默认启用一些必要的 Web 安全防护，比如针对 XSS、CSRF 等常见针对 Web 应用的攻击，同时，也会将一些常见的静态资源路径排除在安全防护之外。

## Spring Security 和 Shiro 各自的优缺点

​		由于 Spring Boot 官方提供了大量的非常方便的开箱即用的 Starter ，包括Spring Security 的 Starter ，使得在 Spring Boot 中使用 Spring Security 变得更加容易，甚至只需要添加一个依赖就可以保护所有的接口，所以，如果是Spring Boot 项目，一般选择 Spring Security 。当然这只是一个建议的组合，单纯从技术上来说，无论怎么组合，都是没有问题的。

Shiro 和 SpringSecurity 相比，主要有如下一些特点：

1. Spring Security 是一个重量级的安全管理框架；Shiro 则是一个轻量级的安全管理框架
2. Spring Security 概念复杂，配置繁琐；Shiro 概念简单、配置简单
3. Spring Security 功能强大；Shiro 功能简单

## Spring Boot 中如何解决跨域问题

​		跨域可以在前端通过 JSONP 来解决，但是 JSONP 只可以发送 GET 请求，无法发送其他类型的请求，在RESTful 风格的应用中，就显得非常鸡肋，因此我们推荐在后端通过 （CORS，Cross-origin resourcesharing） 来解决跨域问题。这种解决方案并非 Spring Boot 特有的，在传统的 SSM 框架中，就可以通过 CORS 来解决跨域问题，只不过之前我们是在 XML 文件中配置 CORS ，现在可以通过实现WebMvcConfigurer接口然后重写addCorsMappings方法解决跨域问题。

```java
@Configuration
public class CorsConfig implements WebMvcConfigurer { 
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("*")
            .allowCredentials(true)
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
            .maxAge(3600);
     }
 }
```

项目中前后端分离部署，所以需要解决跨域的问题。
		我们使用cookie存放用户登录的信息，在spring拦截器进行权限控制，当权限不符合时，直接返回给用户固定的json结果。
		当用户登录以后，正常使用；当用户退出登录状态时或者token过期时，由于拦截器和跨域的顺序有问题，出现了跨域的现象。
		我们知道一个http请求，先走filter，到达servlet后才进行拦截器的处理，如果我们把cors放在filter里，就可以优先于权限拦截器执行。

```java
@Configuration
 public class CorsConfig { 
     @Bean
     public CorsFilter corsFilter() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin("*");
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.addAllowedMethod("*");
        corsConfiguration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new U
        rlBasedCorsConfigurationSource();
        urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsCo
nfiguration);
         return new CorsFilter(urlBasedCorsConfigurationSource);
    }
}
```

## CSRF攻击

​		CSRF 代表跨站请求伪造。这是一种攻击，迫使用户在当前通过身份验证的 Web 应用程序上执行不需要的操作。CSRF 攻击专门针对状态改变请求，而不是数据窃取，因为攻击者无法查看对伪造请求的响应。

# 监视器

## SpringBoot中的监视器

​		Spring boot actuator 是 spring 启动框架中的重要功能之一。Spring boot 监视器可帮助您访问生产环境中正在运行的应用程序的当前状态。有几个指标必须在生产环境中进行检查和监控。即使一些外部应用程序可能正在使用这些服务来向相关人员触发警报消息。监视器模块公开了一组可直接作为 HTTPURL 访问 的REST 端点来检查状态。

## 在 Spring Boot 中禁用 Actuator 端点安全性

​		默认情况下，所有敏感的 HTTP 端点都是安全的，只有具有 ACTUATOR 角色的用户才能访问它们。安全性是使用标准的 HttpServletRequest.isUserInRole 方法实施的。 我们可以使用来禁用安全性。只有在执行机构端点在防火墙后访问时，才建议禁用安全性。

## 如何监视所有 Spring Boot 微服务

​		Spring Boot 提供监视器端点以监控各个微服务的度量。这些端点对于获取有关应用程序的信息（如它们是否已启动）以及它们的组件（如数据库等）是否正常运行很有帮助。但是，使用监视器的一个主要缺点或困难是，我们必须单独打开应用程序的知识点以了解其状态或健康状况。想象一下涉及 50 个应用程序的微服务，管理员将不得不击中所有 50 个应用程序的执行终端。为了帮助我们处理这种情况，我们将使用spring-boot-admin 的开源项目。 它建立在 Spring Boot Actuator 之上，它提供了一个 Web UI，使我们能够可视化多个应用程序的度量。

# 整合第三方项目

## 什么是WebSockets

WebSocket 是一种计算机通信协议，通过单个 TCP 连接提供全双工通信信道。

1、 WebSocket 是双向的 -使用 WebSocket 客户端或服务器可以发起消息发送。

2、 WebSocket 是全双工的 -客户端和服务器通信是相互独立的。

3、 单个 TCP 连接 -初始连接使用 HTTP，然后将此连接升级到基于套接字的连接。然后这个单一连接用于所有未来的通信

4、与 http 相比，WebSocket 消息数据交换要轻得多。

## 什么是 Spring Data

​		Spring Data 是 Spring 的一个子项目。用于简化数据库访问，支持NoSQL 和 关系数据存储。其主要目标是使数据库的访问变得方便快捷。

SpringData 项目支持 NoSQL 存储：

1. MongoDB （文档数据库）
2. Neo4j（图形数据库）
3. Redis（键/值存储）
4. Hbase（列族数据库）

SpringData 项目所支持的关系数据存储技术：

1. JDBC
2. JPA

​		Spring Data Jpa 致力于减少数据访问层 (DAO) 的开发量. 开发者唯一要做的，就是声明持久层的接口，其他都交给 Spring Data JPA 来帮你完成！Spring Data JPA 通过规范方法的名字，根据符合规范的名字来确定方法需要实现什么样的逻辑。

## 什么是 Spring Batch

​		Spring Boot Batch 提供可重用的函数，这些函数在处理大量记录时非常重要，包括日志/跟踪，事务管理，作业处理统计信息，作业重新启动，跳过和资源管理。它还提供了更先进的技术服务和功能，通过优化和分区技术，可以实现极高批量和高性能批处理作业。简单以及复杂的大批量批处理作业可以高度可扩展的方式利用框架处理重要大量的信息。

## 什么是 FreeMarker 模板

​		FreeMarker 是一个基于 Java 的模板引擎， 专注于使用 MVC 软件架构进行动态网页生成。使用Freemarker 的主要优点是表示层和业务层的完全分离。程序员可以处理应用程序代码，而设计人员可以处理 html 页面设计。 后使用 freemarker 可以将这些结合起来，给出最终的输出页面。

# spring-boot-starter-parent 主要作用

1. 定义了 Java 编译版本为 1.8 。
2. 使用 UTF-8 格式编码。
3. 继承自 spring-boot-dependencies，这个里边定义了依赖的版本，也正是因为继承了这个依赖，所以我们在写依赖时才不需要写版本号。
4. 执行打包操作的配置。
5. 自动化的资源过滤。
6. 自动化的插件配置。

7. 针对 application.properties 和 application.yml 的资源过滤，包括通过 profile 定义的不同环境的配置文件，例如 application-dev.properties 和 application-dev.yml。

# Spring Boot 打成的 jar 和普通的 jar 的区别 

​		Spring Boot 项目 终打包成的 jar 是可执行 jar ，这种 jar 可以直接通过 java jar xxx.jar 命令来运行，这种 jar 不可以作为普通的 jar 被其他项目依赖，即使依赖了也无法使用其中的类。

​		Spring Boot 的 jar 无法被其他项目依赖，主要还是他和普通 jar 的结构不同。普通的 jar 包，解压后直
接就是包名，包里就是我们的代码，而 Spring Boot打包成的可执行 jar 解压后，在 \BOOT-INF\classes 目录下才是我们的代码，因此无法被直接引用。

​		如果非要引用，可以在 pom.xml 文件中增加配置，将 Spring Boot 项目打包成两个 jar ，一个可执行，一个可引用。

# SpringBoot的原理

​		Spring Boot 是由 Pivotal 团队提供的全新框架，其设计目的是用来简化新 Spring 应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置。通过这种方式，Spring Boot 致力于在蓬勃发展的快速应用开发领域(rapid application development)成为领导者。其特点如下：
1. 创建独立的 Spring 应用程序
2. 嵌入的 Tomcat，无需部署 WAR 文件
3. 简化 Maven 配置
4. 自动配置 Spring
5. 提供生产就绪型功能，如指标，健康检查和外部配置
6. 绝对没有代码生成和对 XML 没有要求配置 

# Spring Boot比Spring做了哪些改进

1. Spring Boot可以建立独立的Spring应用程序；
2. 内嵌了如Tomcat，Jetty和Undertow这样的容器，也就是说可以直接跑起来，用不着再做部署工作了；
3. 无需再像Spring那样搞一堆繁琐的xml文件的配置；
4. 可以自动配置Spring。SpringBoot将原有的XML配置改为Java配置，将bean注入改为使 用注解注入的方式(@Autowired)，并将多个xml、properties配置浓缩在一个appliaction.yml 配置文件中。
5. 提供了一些现有的功能，如量度工具，表单数据验证以及一些外部配置这样的一些第三方功 能；
6. 整合常用依赖（开发库，例如spring-webmvc、jackson-json、validation-api和tomcat 等），提供的POM可以简化Maven的配置。当我们引入核心依赖时，SpringBoot会自引入其 他依赖。

# SpringBoot热加载

在项目中，我们需要在 `pom.xml` 中，引入 `spring-boot-devtools` 依赖如下：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <optional>true</optional> <!-- 可选 -->
</dependency>
```

如果要自定义一些排除项，您可以使用该spring.devtools.restart.exclude属性。例如，仅排除 /static和/public你设置如下:

`spring.devtools.restart.exclude=static/,public/`

当您对不在类路径中的文件进行更改时，可能需要重新启动或重新加载应用程序。为此，请使用

`spring.devtools.restart.additional-paths`

```yaml
spring:
    devtools:
        restart:
            enabled: true  #设置开启热部署
            additional-paths: src/main/java #重启目录
            exclude: WEB-INF/**
```

