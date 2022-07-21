[toc]

# 1.AOP（面向切面编程思想）

## 1.1概念

​		"横切"的技术，剖解开封装的对象内部，并将那些影响了多个类的公共行为封装到一个可重用模块，并将其命名为"Aspect"，即切面。所谓"切面"，简单说就是那些与业务无关，却为业务模块所共同调用的逻辑或责任封装起来，便于减少系统的重复代码，降低模块之间的耦合度，并有利于未来的可操作性和可维护性。

​		使用"横切"技术，AOP 把软件系统分为两个部分：核心关注点和横切关注点。业务处理的主要流程是核心关注点，与之关系不大的部分是横切关注点。横切关注点的一个特点是，他们经常发生在核心关注点的多处，而各处基本相似，比如权限认证、日志、事物。AOP 的作用在于分离系统中的各种关注点，将核心关注点和横切关注点分离开来。

## 1.2核心概念

1、切面（aspect）：类是对物体特征的抽象，切面就是对横切关注点的抽象

2、横切关注点：对哪些方法进行拦截，拦截后怎么处理，这些关注点称之为横切关注点。

3、连接点（joinpoint）：被拦截到的点，因为 Spring 只支持方法类型的连接点，所以在 Spring 中连接点指的就是被拦截到的方法，实际上连接点还可以是字段或者构造器。

4、切入点（pointcut）：对连接点进行拦截的定义

5、通知（advice）：所谓通知指的就是指拦截到连接点之后要执行的代码，通知分为前置、后置、异常、最终、环绕通知五类。

6、目标对象：代理的目标对象

7、织入（weave）：将切面应用到目标对象并导致代理对象创建的过程 

8、引入（introduction）：在不修改代码的前提下，引入可以在运行期为类动态地添加一些方法或字段。

## 1.3AOP的通知类型

**前置通知（Before Advice）**
在某连接点（JoinPoint）之前执行的通知，但这个通知不能阻止连接点前的执行流程（除非抛出一个异常）。

**后置通知（After Advice）**
当某连接点退出的时候执行的通知（不论是正常返回还是异常退出）。

**返回后通知（After Return Advice）**
在某连接点正常完成后执行的通知，不包括抛出异常的情况。

**环绕通知（Around Advice）**
包围一个连接点的通知，类似 Web 中 Servlet 规范中的 Filter 的 doFilter 方法。可以在方法的调用前后完成自定义的行为，也可以选择不执行。ApplicationContext 中在aop:aspect里面使用aop:around元素进行声明。例如，ServiceAspect 中的 around 方法。

**异常通知（After Throwing Advice）**
在 方 法 抛 出 异 常 退 出 时 执 行 的 通 知 。

# 2.AOP的实现原理和场景

## 2.1场景

事务管理、安全检查、权限控制、数据校验、缓存、对象池管理等

## 2.2实现技术

AOP（这里的AOP指的是面向切面编程思想，而不是Spring AOP）主要的的实现技术主要有 `SpringAOP`和`AspectJ`。

1）AspectJ的底层技术。 AspectJ的底层技术是静态代理，即用一种AspectJ支持的特定语言编写切面，通过一个命令来编译，生成一个新的代理类，该代理类增强了业务类，这是在编译时增强，相对于下面说的运行时增强，编译时增强的性能更好。

2）Spring AOP采用的是动态代理，在运行期间对业务方法进行增强，所以不会生成新类，对于 动态代理技术，Spring AOP提供了对JDK动态代理的支持以及CGLIB的支持。

# 3.Spring AOP的两种代理模式

## 3.1JDK动态代理

​		JDK动态代理只能为接口创建动态代理实例，而不能对类创建动态代理。需要获得被代理目标类的接口信息（应用Java的反射技术），生成一个实现了代理接口的动态代理类（字节码），再通过 反射机制获得动态代理类的构造函数，利用构造函数生成动态代理类的实例对象，在调用具体方 法前调用invokeHandler方法来处理。

## 3.2CGLIB动态代理

​		CGLIB动态代理需要依赖asm包，把被代理对象类的class文件加载进来，修改其字节码生成 子类。 但是Spring AOP基于注解配置的情况下，需要依赖于AspectJ包的标准注解。

## 3.3JDK动态代理与CGLIB动态代理的区别

| JDK Proxy    | Cglib Proxy                                   |
| ------------ | --------------------------------------------- |
| 只能代理接口 | 以继承的方式完成代理，不能代理被final修饰的类 |

​		实际上，大部分的Java类都会以接口-实现的方式来完成，因此，在这个方面上，JDK Proxy实际上是比Cglib Proxy要更胜一筹的。因为如果一个类被final修饰，则Cglib Proxy无法进行代理。

|                | JDK Proxy   | Cglib Proxy            |
| -------------- | ----------- | ---------------------- |
| 生成代理类时间 | 1'060.766   | 960.527                |
| 方法调用时间   | 0.008       | 0.003                  |
| 来源           | JDK原生代码 | 第三方库，更新频率较低 |

Cglib代理的性能是要远远好于JDK代理的。
		其实从原理也能理解，直接通过类的方法调用，肯定要比通过反射调用的时间更短。但是从来源来看的话，一个是JDK原生代码，而另一个则是第三方的开源库。JDK原生代码无疑使用的人会更多范围也更广，会更佳稳定，而且还有可能在未来的JDK版本中不断优化性能。而Cglib更新频率相对来说比较低了，一方面是因为这个代码库已经渐趋稳定，另一方面也表明后续这个库可能相对来说不会有大动作的优化维护。

# 4.Spring AOP 的两种代理方式使用

## 4.1接口使用JDK代理

### 4.1.1定义接口

```java
/**
 * Jdk Proxy Service.
 */
public interface IJdkProxyService {

    void doMethod1();

    String doMethod2();

    String doMethod3() throws Exception;
}

```

### 4.1.2实现类

```java
@Service
public class JdkProxyDemoServiceImpl implements IJdkProxyService {

    @Override
    public void doMethod1() {
        System.out.println("JdkProxyServiceImpl.doMethod1()");
    }

    @Override
    public String doMethod2() {
        System.out.println("JdkProxyServiceImpl.doMethod2()");
        return "hello world";
    }

    @Override
    public String doMethod3() throws Exception {
        System.out.println("JdkProxyServiceImpl.doMethod3()");
        throw new Exception("some exception");
    }
}
```

### 4.1.3定义切面

```java
@EnableAspectJAutoProxy
@Component
@Aspect
public class LogAspect {

    /**
     * define point cut.
     */
    @Pointcut("execution(* cn.bttc.service.*.*(..))")
    private void pointCutMethod() {
    }

    /**
     * 环绕通知.
     *
     * @param pjp pjp
     * @return obj
     * @throws Throwable exception
     */
    @Around("pointCutMethod()")
    public Object doAround(ProceedingJoinPoint pjp) throws Throwable {
        System.out.println("-----------------------");
        System.out.println("环绕通知: 进入方法");
        Object o = pjp.proceed();
        System.out.println("环绕通知: 退出方法");
        return o;
    }

    /**
     * 前置通知.
     */
    @Before("pointCutMethod()")
    public void doBefore() {
        System.out.println("前置通知");
    }


    /**
     * 后置通知.
     *
     * @param result return val
     */
    @AfterReturning(pointcut = "pointCutMethod()", returning = "result")
    public void doAfterReturning(String result) {
        System.out.println("后置通知, 返回值: " + result);
    }

    /**
     * 异常通知.
     *
     * @param e exception
     */
    @AfterThrowing(pointcut = "pointCutMethod()", throwing = "e")
    public void doAfterThrowing(Exception e) {
        System.out.println("异常通知, 异常: " + e.getMessage());
    }

    /**
     * 最终通知.
     */
    @After("pointCutMethod()")
    public void doAfter() {
        System.out.println("最终通知");
    }
}
```

### 4.1.4输出

```java
-----------------------
环绕通知: 进入方法
前置通知
JdkProxyServiceImpl.doMethod1()
最终通知
环绕通知: 退出方法
-----------------------
环绕通知: 进入方法
前置通知
JdkProxyServiceImpl.doMethod2()
后置通知, 返回值: hello world
最终通知
环绕通知: 退出方法
-----------------------
环绕通知: 进入方法
前置通知
JdkProxyServiceImpl.doMethod3()
异常通知, 异常: some exception
最终通知
```

## 4.2非接口使用CGLIB代理

### 4.2.1类定义

```java
@Service
public class CglibProxyDemoServiceImpl {

    public void doMethod1() {
        System.out.println("CglibProxyDemoServiceImpl.doMethod1()");
    }

    public String doMethod2() {
        System.out.println("CglibProxyDemoServiceImpl.doMethod2()");
        return "hello world";
    }

    public String doMethod3() throws Exception {
        System.out.println("CglibProxyDemoServiceImpl.doMethod3()");
        throw new Exception("some exception");
    }
}

```

### 4.2.2定义切面

```java
@EnableAspectJAutoProxy
@Component
@Aspect
public class LogAspect {

    /**
     * define point cut.
     */
    @Pointcut("execution(* cn.bttc.service.*.*(..))")
    private void pointCutMethod() {
    }

    /**
     * 环绕通知.
     *
     * @param pjp pjp
     * @return obj
     * @throws Throwable exception
     */
    @Around("pointCutMethod()")
    public Object doAround(ProceedingJoinPoint pjp) throws Throwable {
        System.out.println("-----------------------");
        System.out.println("环绕通知: 进入方法");
        Object o = pjp.proceed();
        System.out.println("环绕通知: 退出方法");
        return o;
    }

    /**
     * 前置通知.
     */
    @Before("pointCutMethod()")
    public void doBefore() {
        System.out.println("前置通知");
    }


    /**
     * 后置通知.
     *
     * @param result return val
     */
    @AfterReturning(pointcut = "pointCutMethod()", returning = "result")
    public void doAfterReturning(String result) {
        System.out.println("后置通知, 返回值: " + result);
    }

    /**
     * 异常通知.
     *
     * @param e exception
     */
    @AfterThrowing(pointcut = "pointCutMethod()", throwing = "e")
    public void doAfterThrowing(Exception e) {
        System.out.println("异常通知, 异常: " + e.getMessage());
    }

    /**
     * 最终通知.
     */
    @After("pointCutMethod()")
    public void doAfter() {
        System.out.println("最终通知");
    }
}
```

### 4.2.3输出

```java
-----------------------
环绕通知: 进入方法
前置通知
CglibProxyDemoServiceImpl.doMethod1()
最终通知
环绕通知: 退出方法
-----------------------
环绕通知: 进入方法
前置通知
CglibProxyDemoServiceImpl.doMethod2()
后置通知, 返回值: hello world
最终通知
环绕通知: 退出方法
-----------------------
环绕通知: 进入方法
前置通知
CglibProxyDemoServiceImpl.doMethod3()
异常通知, 异常: some exception
最终通知
```

# 5.Spring AOP的切入点（pointcut）申明规则

Spring AOP 用户可能会经常使用 execution切入点指示符。执行表达式的格式如下：

```java
execution(modifiers-pattern? ret-type-pattern declaring-type-pattern? name-pattern(param-pattern) throws-pattern?)
```

- ret-type-pattern 返回类型模式, name-pattern名字模式和param-pattern参数模式是必选的， 其它部分都是可选的。返回类型模式决定了方法的返回类型必须依次匹配一个连接点。 你会使用的最频繁的返回类型模式是`*`，**它代表了匹配任意的返回类型**。
- declaring-type-pattern, 一个全限定的类型名将只会匹配返回给定类型的方法。
- name-pattern 名字模式匹配的是方法名。 你可以使用`*`通配符作为所有或者部分命名模式。
- param-pattern 参数模式稍微有点复杂：()匹配了一个不接受任何参数的方法， 而(..)匹配了一个接受任意数量参数的方法（零或者更多）。 模式（*）匹配了一个接受一个任何类型的参数的方法。 模式(\*,String)匹配了一个接受两个参数的方法，第一个可以是任意类型， 第二个则必须是String类型。

## 5.1例子

```java
// 任意公共方法的执行：
execution（public * *（..））

// 任何一个名字以“set”开始的方法的执行：
execution（* set*（..））

// AccountService接口定义的任意方法的执行：
execution（* com.xyz.service.AccountService.*（..））

// 在service包中定义的任意方法的执行：
execution（* com.xyz.service.*.*（..））

// 在service包或其子包中定义的任意方法的执行：
execution（* com.xyz.service..*.*（..））

// 在service包中的任意连接点（在Spring AOP中只是方法执行）：
within（com.xyz.service.*）

// 在service包或其子包中的任意连接点（在Spring AOP中只是方法执行）：
within（com.xyz.service..*）

// 实现了AccountService接口的代理对象的任意连接点 （在Spring AOP中只是方法执行）：
this（com.xyz.service.AccountService）// 'this'在绑定表单中更加常用

// 实现AccountService接口的目标对象的任意连接点 （在Spring AOP中只是方法执行）：
target（com.xyz.service.AccountService） // 'target'在绑定表单中更加常用

// 任何一个只接受一个参数，并且运行时所传入的参数是Serializable 接口的连接点（在Spring AOP中只是方法执行）
args（java.io.Serializable） // 'args'在绑定表单中更加常用; 请注意在例子中给出的切入点不同于 execution(* *(java.io.Serializable))： args版本只有在动态运行时候传入参数是Serializable时才匹配，而execution版本在方法签名中声明只有一个 Serializable类型的参数时候匹配。

// 目标对象中有一个 @Transactional 注解的任意连接点 （在Spring AOP中只是方法执行）
@target（org.springframework.transaction.annotation.Transactional）// '@target'在绑定表单中更加常用

// 任何一个目标对象声明的类型有一个 @Transactional 注解的连接点 （在Spring AOP中只是方法执行）：
@within（org.springframework.transaction.annotation.Transactional） // '@within'在绑定表单中更加常用

// 任何一个执行的方法有一个 @Transactional 注解的连接点 （在Spring AOP中只是方法执行）
@annotation（org.springframework.transaction.annotation.Transactional） // '@annotation'在绑定表单中更加常用

// 任何一个只接受一个参数，并且运行时所传入的参数类型具有@Classified 注解的连接点（在Spring AOP中只是方法执行）
@args（com.xyz.security.Classified） // '@args'在绑定表单中更加常用

// 任何一个在名为'tradeService'的Spring bean之上的连接点 （在Spring AOP中只是方法执行）
bean（tradeService）

// 任何一个在名字匹配通配符表达式'*Service'的Spring bean之上的连接点 （在Spring AOP中只是方法执行）
bean（*Service）
```

# 6.Spring AOP 和 AspectJ 之间的关键区别

| **Spring AOP**                                   | **AspectJ**                                                  |
| ------------------------------------------------ | ------------------------------------------------------------ |
| 在纯 Java 中实现                                 | 使用 Java 编程语言的扩展实现                                 |
| 不需要单独的编译过程                             | 除非设置 LTW，否则需要 AspectJ 编译器 (ajc)                  |
| 只能使用运行时织入                               | 运行时织入不可用。支持编译时、编译后和加载时织入             |
| 功能不强-仅支持方法级编织                        | 更强大 - 可以编织字段、方法、构造函数、静态初始值设定项、最终类/方法等......。 |
| 只能在由 Spring 容器管理的 bean 上实现           | 可以在所有域对象上实现                                       |
| 仅支持方法执行切入点                             | 支持所有切入点                                               |
| 代理是由目标对象创建的, 并且切面应用在这些代理上 | 在执行应用程序之前 (在运行时) 前, 各方面直接在代码中进行织入 |
| 比 AspectJ 慢多了                                | 更好的性能                                                   |
| 易于学习和应用                                   | 相对于 Spring AOP 来说更复杂                                 |

