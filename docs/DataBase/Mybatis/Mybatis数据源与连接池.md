[toc]

# Mybatis数据源与连接池

## MyBatis数据源DataSource分类

MyBatis把数据源DataSource分为三种：

1. unpooled：不适用连接池的数据源
2. pooled：使用连接池的数据源
3. JNDI：使用JNDI实现的数据源

​		MyBatis内部分别定义了实现了java.sql.DataSource接口的UnpooledDataSource，PooledDataSource类来表示UNPOOLED、POOLED类型的数据源。

​		PooledDataSource和UnpooledDataSource都实现了java.sql.DataSource接口，并且PooledDataSource持有一个UnpooledDataSource的引用，当PooledDataSource需要创建java.sql.Connection实例对象时，还是通过UnpooledDataSource来创建，PooledDataSource知识提供了一种缓存连接池机制。

​		对于JNDI类型的数据源DataSource，则是通过JNDI上下文中取值。

## 数据源DataSource的创建过程

一、MyBatis在初始化时，解析mybatis的xml配置文件，根据的type属性来创建相应类型的的数据源DataSource，即：

- type=”POOLED” ：MyBatis会创建PooledDataSource实例
- type=”UNPOOLED” ：MyBatis会创建UnpooledDataSource实例
- type=”JNDI” ：MyBatis会从JNDI服务上查找DataSource实例，然后返回使用

二、MyBatis是通过工厂模式来创建数据源DataSource对象的，MyBatis定义了抽象的工厂接口:
org.apache.ibatis.datasource.DataSourceFactory,通过其getDataSource()方法返回数据源DataSource：

```java
public interface DataSourceFactory {
    void setProperties(Properties props);
    //生产DataSource
    DataSource getDataSource();
}
```

上述三种不同类型的type，则有对应的以下dataSource工厂：

- POOLED： PooledDataSourceFactory
- UNPOOLED： UnpooledDataSourceFactory
- JNDI： JndiDataSourceFactory

三、MyBatis创建了DataSource实例后，会将其放到Configuration对象内的Environment对象中， 供以后使用

## DataSource什么时候创建Connection对象

​		当我们需要创建SqlSession对象并需要执行SQL语句时，这时候MyBatis才会去调用dataSource对象来创建

java.sql.Connection对象。也就是说，java.sql.Connection对象的创建一直延迟到执行SQL语句的时候。

比如，我们有如下方法执行一个简单的SQL语句：

```java
String resource = "mybatis-config.xml";
InputStream inputStream = Resources.getResourceAsStream(resource);
SqlSessionFactory sqlSessionFactory = new
SqlSessionFactoryBuilder().build(inputStream);
SqlSession sqlSession = sqlSessionFactory.openSession();
sqlSession.selectList("SELECT * FROM STUDENTS");
```

前4句都不会导致java.sql.Connection对象的创建，只有当第5句sqlSession.selectList("SELECT *FROM STUDENTS")，才会触发MyBatis在底层执行下面这个方法来创建java.sql.Connection对象：

```java
protected void openConnection() throws SQLException {
    if (log.isDebugEnabled()) {
    	log.debug("Opening JDBC Connection");
    }
    connection = dataSource.getConnection();
    if (level != null) {
    	connection.setTransactionIsolation(level.getLevel());
    }
    setDesiredAutoCommit(autoCommmit);
}
```

## 不使用连接池的UnpooledDataSource

​		当 的type属性被配置成了”UNPOOLED”，MyBatis首先会实例化一个UnpooledDataSourceFactory工厂实例，然后通过.getDataSource()方法返回一个UnpooledDataSource实例对象引用，我们假定为dataSource。

使用UnpooledDataSource的getConnection(),每调用一次就会产生一个新的Connection实例对象。

UnPooledDataSource的getConnection()方法实现如下：

```java
/*
UnpooledDataSource的getConnection()实现
*/
public Connection getConnection() throws SQLException
{
	return doGetConnection(username, password);
}
private Connection doGetConnection(String username, String password) throws
SQLException
{
    //封装username和password成properties
    Properties props = new Properties();
    if (driverProperties != null)
    {
    	props.putAll(driverProperties);
    }
    if (username != null)
    {
    	props.setProperty("user", username);
    }
    if (password != null)
    {
    	props.setProperty("password", password);
    }
    return doGetConnection(props);
}
/*
* 获取数据连接
*/
private Connection doGetConnection(Properties properties) throws
SQLException
{
    //1.初始化驱动
    initializeDriver();
    //2.从DriverManager中获取连接，获取新的Connection对象
    Connection connection = DriverManager.getConnection(url, properties);
    //3.配置connection属性
    configureConnection(connection);
    return connection;
}
```

如上代码所示，UnpooledDataSource会做以下事情：
1. 初始化驱动： 判断driver驱动是否已经加载到内存中，如果还没有加载，则会动态地加载
driver类，并实例化一个Driver对象，使用DriverManager.registerDriver()方法将其注册到
内存中，以供后续使用。
2. 创建Connection对象： 使用DriverManager.getConnection()方法创建连接。
3. 配置Connection对象： 设置是否自动提交autoCommit和隔离级别isolationLevel。
4. 返回Connection对象。

## 使用了连接池的PooledDataSource

同样地，我们也是使用PooledDataSource的getConnection()方法来返回Connection对象。现在让我们看一下它的基本原理：

 PooledDataSource将java.sql.Connection对象包裹成PooledConnection对象放到了PoolState类型的容器中维护。MyBatis将连接池中的PooledConnection分为两种状态： 空闲状态（idle）和活动状态(active)，这两种状态的PooledConnection对象分别被存储到PoolState容器内的idleConnections和activeConnections两个List集合中：

idleConnections:空闲(idle)状态PooledConnection对象被放置到此集合中，表示当前闲置的没有被使用的PooledConnection集合，调用PooledDataSource的getConnection()方法时，会优先从此集合中取PooledConnection对象。当用完一个java.sql.Connection对象时，MyBatis会将其包裹成PooledConnection对象放到此集合中。

activeConnections:活动(active)状态的PooledConnection对象被放置到名为activeConnections的ArrayList中，表示当前正在被使用的PooledConnection集合，调用PooledDataSource的getConnection()方法时，会优先从idleConnections集合中取PooledConnection对象,如果没有，则看此集合是否已满，如果未满，PooledDataSource会创建出一个PooledConnection，添加到此集合中，并返回。

### 获取java.sql.Connection对象的过程

PooledDataSource 的getConnection()方法获取Connection对象的实现：

```java
public Connection getConnection() throws SQLException {
        return popConnection(dataSource.getUsername(), dataSource.getPassword()).getProxyConnection();
    }

    public Connection getConnection(String username, String password) throws SQLException {
        return popConnection(username, password).getProxyConnection();
    }
```

上述的popConnection()方法，会从连接池中返回一个可用的PooledConnection对象，然后再调getProxyConnection()方法最终返回Conection对象。

### popConnection()方法

1.  先看是否有空闲(idle)状态下的PooledConnection对象，如果有，就直接返回一个可用的PooledConnection对象；否则进行第2步。
2.  查看活动状态的PooledConnection池activeConnections是否已满；如果没有满，则创建一个新的PooledConnection对象，然后放到activeConnections池中，然后返回此PooledConnection对象；否则进行第三步；
3.  看最先进入activeConnections池中的PooledConnection对象是否已经过期：如果已经过期，从activeConnections池中移除此对象，然后创建一个新的PooledConnection对象，添加到activeConnections中，然后将此对象返回；否则进行第4步。
4.  线程等待，循环2步

对于PooledDataSource的getConnection()方法内，先是调用类PooledDataSource的popConnection()方法返回了一PooledConnection对象，然后调用了PooledConnection的getProxyConnection()来返回Connection对象。

```java
/*
 * 传递一个用户名和密码，从连接池中返回可用的PooledConnection
 */


import java.sql.SQLException;

public class WaitNotifyTest {
    private PooledConnection popConnection(String username, String password) throws SQLException {
        boolean countedWait = false;
        PooledConnection conn = null;
        long t = System.currentTimeMillis();
        int localBadConnectionCount = 0;

        while (conn == null) {
            synchronized (state) {
                if (state.idleConnections.size() > 0) {
                    // 连接池中有空闲连接，取出第一个
                    conn = state.idleConnections.remove(0);
                    if (log.isDebugEnabled()) {
                        log.debug("Checked out connection " + conn.getRealHashCode() + " from pool.");
                    }
                } else {
                    // 连接池中没有空闲连接，则取当前正在使用的连接数小于最大限定值，
                    if (state.activeConnections.size() < poolMaximumActiveConnections) {
                        // 创建一个新的connection对象
                        conn = new PooledConnection(dataSource.getConnection(), this);
                        @SuppressWarnings("unused")
//used in logging, if enabled
                        Connection realConn = conn.getRealConnection();
                        if (log.isDebugEnabled()) {
                            log.debug("Created connection " + conn.getRealHashCode() + ".");
                        }
                    } else {
                        // Cannot create new connection 当活动连接池已满，不能创建时，取出活动连接池的第一个，即最先进入连接池的PooledConnection对象
                        // 计算它的校验时间，如果校验时间大于连接池规定的最大校验时间，则认为它已经过期了，利用这个PoolConnection内部的realConnection重新生成一个PooledConnection
                        //
                        PooledConnection oldestActiveConnection = state.activeConnections.get(0);
                        long longestCheckoutTime = oldestActiveConnection.getCheckoutTime();
                        if (longestCheckoutTime > poolMaximumCheckoutTime) {
                            // Can claim overdue connection
                            state.claimedOverdueConnectionCount++;
                            state.accumulatedCheckoutTimeOfOverdueConnections += longestCheckoutTime;
                            state.accumulatedCheckoutTime += longestCheckoutTime;
                            state.activeConnections.remove(oldestActiveConnection);
                            if (!oldestActiveConnection.getRealConnection().getAutoCommit()) {
                                oldestActiveConnection.getRealConnection().rollback();
                            }
                            conn = new PooledConnection(oldestActiveConnection.getRealConnection(), this);
                            oldestActiveConnection.invalidate();
                            if (log.isDebugEnabled()) {
                                log.debug("Claimed overdue connection " + conn.getRealHashCode() + ".");
                            }
                        } else {

                            //如果不能释放，则必须等待有
                            // Must wait
                            try {
                                if (!countedWait) {
                                    state.hadToWaitCount++;
                                    countedWait = true;
                                }
                                if (log.isDebugEnabled()) {
                                    log.debug("Waiting as long as " + poolTimeToWait + " milliseconds for connection.");
                                }
                                long wt = System.currentTimeMillis();
                                state.wait(poolTimeToWait);
                                state.accumulatedWaitTime += System.currentTimeMillis() - wt;
                            } catch (InterruptedException e) {
                                break;
                            }
                        }
                    }
                }

                //如果获取PooledConnection成功，则更新其信息

                if (conn != null) {
                    if (conn.isValid()) {
                        if (!conn.getRealConnection().getAutoCommit()) {
                            conn.getRealConnection().rollback();
                        }
                        conn.setConnectionTypeCode(assembleConnectionTypeCode(dataSource.getUrl(), username, password));
                        conn.setCheckoutTimestamp(System.currentTimeMillis());
                        conn.setLastUsedTimestamp(System.currentTimeMillis());
                        state.activeConnections.add(conn);
                        state.requestCount++;
                        state.accumulatedRequestTime += System.currentTimeMillis() - t;
                    } else {
                        if (log.isDebugEnabled()) {
                            log.debug("A bad connection (" + conn.getRealHashCode() + ") was returned from the pool, getting another connection.");
                        }
                        state.badConnectionCount++;
                        localBadConnectionCount++;
                        conn = null;
                        if (localBadConnectionCount > (poolMaximumIdleConnections + 3)) {
                            if (log.isDebugEnabled()) {
                                log.debug("PooledDataSource: Could not get a good connection to the database.");
                            }
                            throw new SQLException("PooledDataSource: Could not get a good connection to the database.");
                        }
                    }
                }
            }

        }

        if (conn == null) {
            if (log.isDebugEnabled()) {
                log.debug("PooledDataSource: Unknown severe error condition.  The connection pool returned a null connection.");
            }
            throw new SQLException("PooledDataSource: Unknown severe error condition.  The connection pool returned a null connection.");
        }

        return conn;
    }
}
```

### java.sql.Connection对象的回收

**当我们的程序中使用完Connection对象时，如果不使用数据库连接池，我们一般会调用 connection.close()方法，关闭connection连接，释放资源。如下所示：**

```java
private void test() throws ClassNotFoundException, SQLException
{
    String sql = "select * from hr.employees where employee_id < ? and employee_id >= ?";
    PreparedStatement st = null;
    ResultSet rs = null;
 
    Connection con = null;
    Class.forName("oracle.jdbc.driver.OracleDriver");
    try
    {
        con = DriverManager.getConnection("jdbc:oracle:thin:@127.0.0.1:1521:xe", "louluan", "123456");
        st = con.prepareStatement(sql);
        //设置参数
        st.setInt(1, 101);
        st.setInt(2, 0);
        //查询，得出结果集
        rs = st.executeQuery();
        //取数据，省略
        //关闭，释放资源
        con.close();
    }
    catch (SQLException e)
    {
        con.close();
        e.printStackTrace();
    }
}
```

**调用过close()方法的Connection对象所持有的资源会被全部释放掉，Connection对象也就不能再使用。**

**那么，如果我们使用了连接池，我们在用完了Connection对象时，需要将它放在连接池中，该怎样做呢？**

### 怎样实现Connection对象调用了close()方法，而实际是将其添加到连接池中

这是要使用代理模式，为真正的Connection对象创建一个代理对象，代理对象所有的方法都是调用相应的真正Connection对象的方法实现。当代理对象执行close()方法时，要特殊处理，不调用真正Connection对象的close()法，而是将Connection对象添加到连接池中。

MyBatis的PooledDataSource的PoolState内部维护的对象是PooledConnection类型的对象，而PooledConnection则是对真正的数据库连接java.sql.Connection实例对象的包裹器。

PooledConnection对象内持有一个真正的数据库连接java.sql.Connection实例对象和一个java.sql.Connection的代理：

```java
class PooledConnection implements InvocationHandler {
  
  //......
  //所创建它的datasource引用
  private PooledDataSource dataSource;
  //真正的Connection对象
  private Connection realConnection;
  //代理自己的代理Connection
  private Connection proxyConnection;
  
  //......
}
```

PooledConenction 实现了 InvocationHandler 接口，并且， proxyConnection 对象也是根据这个它来生成的代理对象：

```java
public PooledConnection(Connection connection, PooledDataSource dataSource) {
    this.hashCode = connection.hashCode();
    this.realConnection = connection;
    this.dataSource = dataSource;
    this.createdTimestamp = System.currentTimeMillis();
    this.lastUsedTimestamp = System.currentTimeMillis();
    this.valid = true;
    this.proxyConnection = (Connection) Proxy.newProxyInstance(Connection.class.getClassLoader(), IFACES, this);
  }
```

实际上，我们调用PooledDataSource的getConnection()方法返回的就是这个proxyConnection对象。

当我们调用此proxyConnection对象上的任何方法时，都会调用PooledConnection对象内invoke()方法。

让我们看一下PooledConnection类中的invoke()方法定义：
```java
public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
    String methodName = method.getName();
    //当调用关闭的时候，回收此Connection到PooledDataSource中
    if (CLOSE.hashCode() == methodName.hashCode() && CLOSE.equals(methodName)) {
      dataSource.pushConnection(this);
      return null;
    } else {
      try {
        if (!Object.class.equals(method.getDeclaringClass())) {
          checkConnection();
        }
        return method.invoke(realConnection, args);
      } catch (Throwable t) {
        throw ExceptionUtil.unwrapThrowable(t);
      }
    }
  }
```

从上述代码可以看到，当我们使用了pooledDataSource.getConnection()返回的Connection对象的close()方法时，不会调用真正Connection的close()方法，而是将此Connection对象放到连接池中。

## JNDI类型的数据源DataSource

对于JNDI类型的数据源DataSource的获取就比较简单，MyBatis定义了一个JndiDataSourceFactory工厂来创建通过JNDI形式生成的DataSource。
下面让我们看一下JndiDataSourceFactory的关键代码：

```java
if (properties.containsKey(INITIAL_CONTEXT)
        && properties.containsKey(DATA_SOURCE))
{
    //从JNDI上下文中找到DataSource并返回
    Context ctx = (Context) initCtx.lookup(properties.getProperty(INITIAL_CONTEXT));
    dataSource = (DataSource) ctx.lookup(properties.getProperty(DATA_SOURCE));
}
else if (properties.containsKey(DATA_SOURCE))
{
    // //从JNDI上下文中找到DataSource并返回
    dataSource = (DataSource) initCtx.lookup(properties.getProperty(DATA_SOURCE));
}
```

