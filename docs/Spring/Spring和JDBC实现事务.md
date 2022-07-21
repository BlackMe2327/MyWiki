[toc]

# 1.Spring如何实现事务

Spring 事务四种实现方式：

1. 基于编程式事务管理实现
2. 基于TransactionProxyFactoryBean的声明式事务管理
3. 基于AspectJ的XML声明式事务管理
4. 基于注解的声明式事务管理

## 1.1编程式事务和声明式事务的区别

Spring提供了对编程式事务和声明式事务的支持，编程式事务允许用户在代码中精确定义事务的边界，而声明式事务（基于AOP）有助于用户将操作与事务规则进行解耦。

简单地说，编程式事务侵入到了业务代码里面，但是提供了更加详细的事务管理；而声明式事务由于基于AOP，所以既能起到事务管理的作用，又可以不影响业务代码的具体实现。

## 1.2编程式事务实现

Spring提供两种方式的编程式事务管理，分别是：使用TransactionTemplate和直接使用PlatformTransactionManager。

PlatformTransactionManager :事务管理器(用来管理事务，包含事务的提交，回滚)
TransactionDefinition :事务定义信息(隔离，传播，超时，只读)
TransactionStatus :事务具体运行状态

Spring根据事务定义信息(TransactionDefinition)由平台事务管理器(PlatformTransactionManager)真正进行事务的管理，在进行事务管理的过程中，事务会产生运行状态，状态保存在TransactionStatus中

### 1.2.1使用TransactionTemplate

采用TransactionTemplate和采用其他Spring模板，如JdbcTempalte和HibernateTemplate是一样的方法。它使用回调方法，把应用程序从处理取得和释放资源中解脱出来。如同其他模板，TransactionTemplate是线程安全的。代码片段：

```java
TransactionTemplate tt = new TransactionTemplate(); // 新建一个
TransactionTemplate Object result = tt.execute(
    new TransactionCallback(){
        public Object doTransaction(TransactionStatus status){
            updateOperation();
            return resultOfUpdateOperation();
        }
}); // 执行execute方法进行事务管理
```

使用TransactionCallback()可以返回一个值。如果使用TransactionCallbackWithoutResult则没有返回值。

### 1.2.2使用PlatformTransactionManager

Spring为不同的持久化框架提供了不同的PlatformTransactionManager如:在使用Spring JDBC或iBatis进行持久化数据时，采用DataSourceTransactionManager在使用Hibernate进行持久化数据时使用HibernateTransactionManager

```java
DataSourceTransactionManager dataSourceTransactionManager = new DataSourceTransactionManager(); //定义一个某个框架平台的TransactionManager，如JDBC、Hibernate
        dataSourceTransactionManager.setDataSource(this.getJdbcTemplate().getDataSource(
        )); // 设置数据源
        DefaultTransactionDefinition transDef = new DefaultTransactionDefinition();
// 定义事务属性
        transDef.setPropagationBehavior(DefaultTransactionDefinition.PROPAGATION_REQUIRE
                D); // 设置传播行为属性
        TransactionStatus status =
                dataSourceTransactionManager.getTransaction(transDef); // 获得事务状态
        try {
// 数据库操作
            dataSourceTransactionManager.commit(status);// 提交
        } catch (Exception e) {
            dataSourceTransactionManager.rollback(status);// 回滚
        }
```

## 1.3声明式事务实现

### 1.3.1配置方式

根据代理机制的不同，总结了五种Spring事务的配置方式，配置文件如下：
（1）每个Bean都有一个代理

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans-2.5.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context-2.5.xsd
http://www.springframework.org/schema/aop
http://www.springframework.org/schema/aop/spring-aop-2.5.xsd">
    <bean id="sessionFactory"
          class="org.springframework.orm.hibernate3.LocalSessionFactoryBean">
        <property name="configLocation" value="classpath:hibernate.cfg.xml"/>
        <property name="configurationClass"
                  value="org.hibernate.cfg.AnnotationConfiguration"/>
    </bean>
    <!-- 定义事务管理器（声明式的事务） -->
    <bean id="transactionManager"
          class="org.springframework.orm.hibernate3.HibernateTransactionManager">
        <property name="sessionFactory" ref="sessionFactory"/>
    </bean>
    <!-- 配置DAO -->
    <bean id="userDaoTarget" class="com.bluesky.spring.dao.UserDaoImpl">
        <property name="sessionFactory" ref="sessionFactory"/>
    </bean>
    <bean id="userDao"
          class="org.springframework.transaction.interceptor.TransactionProxyFactoryBean">
        <!-- 配置事务管理器 -->
        <property name="transactionManager" ref="transactionManager"/>
        <property name="target" ref="userDaoTarget"/>
        <property name="proxyInterfaces"
                  value="com.bluesky.spring.dao.GeneratorDao"/>
        <!-- 配置事务属性 -->
        <property name="transactionAttributes">
            <props>
                <prop key="*">PROPAGATION_REQUIRED</prop>
            </props>
        </property>
    </bean>
</beans>
```

（2）所有Bean共享一个代理基类

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans-2.5.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context-2.5.xsd
http://www.springframework.org/schema/aop
http://www.springframework.org/schema/aop/spring-aop-2.5.xsd">
    <bean id="sessionFactory"
          class="org.springframework.orm.hibernate3.LocalSessionFactoryBean">
        <property name="configLocation" value="classpath:hibernate.cfg.xml"/>
        <property name="configurationClass"
                  value="org.hibernate.cfg.AnnotationConfiguration"/>
    </bean>
    <!-- 定义事务管理器（声明式的事务） -->
    <bean id="transactionManager"
          class="org.springframework.orm.hibernate3.HibernateTransactionManager">
        <property name="sessionFactory" ref="sessionFactory"/>
    </bean>
    <bean id="transactionBase"
          class="org.springframework.transaction.interceptor.TransactionProxyFactoryBean"
          lazy-init="true" abstract="true">
        <!-- 配置事务管理器 -->
        <property name="transactionManager" ref="transactionManager"/>
        <!-- 配置事务属性 -->
        <property name="transactionAttributes">
            <props>
                <prop key="*">PROPAGATION_REQUIRED</prop>
            </props>
        </property>
    </bean>
    <!-- 配置DAO -->
    <bean id="userDaoTarget" class="com.bluesky.spring.dao.UserDaoImpl">
        <property name="sessionFactory" ref="sessionFactory"/>
    </bean>
    <bean id="userDao" parent="transactionBase">
        <property name="target" ref="userDaoTarget"/>
    </bean>
</beans>
```

（3）使用拦截器

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans-2.5.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context-2.5.xsd
http://www.springframework.org/schema/aop
http://www.springframework.org/schema/aop/spring-aop-2.5.xsd">
    <bean id="sessionFactory"
          class="org.springframework.orm.hibernate3.LocalSessionFactoryBean">
        <property name="configLocation" value="classpath:hibernate.cfg.xml"/>
        <property name="configurationClass"
                  value="org.hibernate.cfg.AnnotationConfiguration"/>
    </bean>
    <!-- 定义事务管理器（声明式的事务） -->
    <bean id="transactionManager"
          class="org.springframework.orm.hibernate3.HibernateTransactionManager">
        <property name="sessionFactory" ref="sessionFactory"/>
    </bean>
    <bean id="transactionInterceptor"
          class="org.springframework.transaction.interceptor.TransactionInterceptor">
        <property name="transactionManager" ref="transactionManager"/>
        <!-- 配置事务属性 -->
        <property name="transactionAttributes">
            <props>
                <prop key="*">PROPAGATION_REQUIRED</prop>
            </props>
        </property>
    </bean>
    <bean
            class="org.springframework.aop.framework.autoproxy.BeanNameAutoProxyCreator">
        <property name="beanNames">
            <list>
                <value>*Dao</value>
            </list>
        </property>
        <property name="interceptorNames">
            <list>
                <value>transactionInterceptor</value>
            </list>
        </property>
    </bean>
    <!-- 配置DAO -->
    <bean id="userDao" class="com.bluesky.spring.dao.UserDaoImpl">
        <property name="sessionFactory" ref="sessionFactory"/>
    </bean>
</beans>
```

（4）使用tx标签配置的拦截器

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans-2.5.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context-2.5.xsd
http://www.springframework.org/schema/aop
http://www.springframework.org/schema/aop/spring-aop-2.5.xsd
http://www.springframework.org/schema/tx
http://www.springframework.org/schema/tx/spring-tx-2.5.xsd">
    <context:annotation-config/>
    <context:component-scan base-package="com.bluesky"/>
    <bean id="sessionFactory"
          class="org.springframework.orm.hibernate3.LocalSessionFactoryBean">
        <property name="configLocation" value="classpath:hibernate.cfg.xml"/>
        <property name="configurationClass"
                  value="org.hibernate.cfg.AnnotationConfiguration"/>
    </bean>
    <!-- 定义事务管理器（声明式的事务） -->
    <bean id="transactionManager"
          class="org.springframework.orm.hibernate3.HibernateTransactionManager">
        <property name="sessionFactory" ref="sessionFactory"/>
    </bean>
    <tx:advice id="txAdvice" transaction-manager="transactionManager">
        <tx:attributes>
            <tx:method name="*" propagation="REQUIRED"/>
        </tx:attributes>
    </tx:advice>
    <aop:config>
        <aop:pointcut id="interceptorPointCuts"
                      expression="execution(* com.bluesky.spring.dao.*.*(..))"/>
        <aop:advisor advice-ref="txAdvice"
                     pointcut-ref="interceptorPointCuts"/>
    </aop:config>
</beans>
```

（5）全注解

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans-2.5.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context-2.5.xsd
http://www.springframework.org/schema/aop
http://www.springframework.org/schema/aop/spring-aop-2.5.xsd
http://www.springframework.org/schema/tx
http://www.springframework.org/schema/tx/spring-tx-2.5.xsd">
    <context:annotation-config/>
    <context:component-scan base-package="com.bluesky"/>
    <tx:annotation-driven transaction-manager="transactionManager"/>
    <bean id="sessionFactory"
          class="org.springframework.orm.hibernate3.LocalSessionFactoryBean">
        <property name="configLocation" value="classpath:hibernate.cfg.xml"/>
        <property name="configurationClass"
                  value="org.hibernate.cfg.AnnotationConfiguration"/>
    </bean>
    <!-- 定义事务管理器（声明式的事务） -->
    <bean id="transactionManager"
          class="org.springframework.orm.hibernate3.HibernateTransactionManager">
        <property name="sessionFactory" ref="sessionFactory"/>
    </bean>
</beans>
```

此时在DAO上需加上@Transactional注解，如下：

```java
@Transactional
@Component("userDao")
public class UserDaoImpl extends HibernateDaoSupport implements UserDao {
    public List<User> listUsers() {
    	return this.getSession().createQuery("from User").list();
    }
}
```

# 2.JDBC如何实现事务

在JDBC中处理事务，都是通过Connection完成的。同一事务中所有的操作，都在使用同一个Connection对象。
**JDBC中的事务**
Connection的三个方法与事务有关：

- setAutoCommit（boolean）:设置是否为自动提交事务，如果true（默认值为true）表示自动提交，也就是每条执行的SQL语句都是一个单独的事务，如果设置为false，那么相当于开启了事务了； con.setAutoCommit(false) 表示开启事务。
- commit（）：提交结束事务。
- rollback（）：回滚结束事务。

```java
//示例代码
try{
    con.setAutoCommit(false);//开启事务
    ......
    con.commit();//try的最后提交事务
} catch（） {
	con.rollback();//回滚事务
}
```

