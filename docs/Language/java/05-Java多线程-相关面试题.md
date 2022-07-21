# 什么是线程和进程？

## 进程

​		进程是程序的一次执行过程，是系统运行程序的基本单位，因此进程是动态的。系统运行一个程序即是一个进程从创建，运行到消亡的过程。

​		在java中，当我们启动main函数时其实就是启动了一个JVM进程，而main函数所在的线程就是进程中的一个线程，也称为主线程。

## 线程

​		线程与进程相似，单线程是一个比进程更小的执行单位。一个进程再起执行的过程中可以产生多个线程。与进程不同的是同类的多个线程共享进程的堆和方法区资源，但每个线程有自己的程序计数器、虚拟机栈、和本地方法栈，所以系统在产生一个线程，或是在各个线程之间切换工作时，负担要比进程小得多，也正因为如此，线程也被成为轻量级进程。

### 程序计数器为什么是私有的

程序计数器主要有下面两个作用：

1. 字节码解释器通过改变程序计数器来依次读取指令，从而实现代码的流程控制，如：顺序执行、选择、循环、异常处理
2. 在多线程的情况下，程序计数器用于记录当前线程执行的位置，从而当线程被切换回来的时候能够知道该线程上次运行到哪儿了

> 如果执行的是native方法，那么程序计数器记录的是undefined地址，只有执行的是java代码是程序计数器记录的才是下一条指令

**所以，程序计数器私有主要是为了线程切换后能恢复到正确的执行位置。**

### 虚拟机栈和本地方法栈为什么是私有的

- **虚拟机栈：**每个java方法在执行的同时会创建一个栈帧用于存储局部变量表、操作数栈、常量池引用等信息、从方法调用直至执行完成的过程，就对应着一个栈帧在java虚拟机栈中入栈和出栈的过程。
- **本地方法栈：**和虚拟机栈所发挥的作用非常相似，区别是：**虚拟机栈为虚拟机执行java方法服务，而本地方法栈则为虚拟机使用到的Native方法服务。**在HostSpot虚拟机中和java虚拟机栈合二为一。

> 所以，**为了保证线程中的局部变量不被别的线程访问到，**虚拟机栈和本地方法栈时线程私有的

### 堆和方法区

​		堆和方法区是所有线程共享的资源，其中堆是进程中最大的一块内存，主要用于存放新创建的对象，方法区主要用于存放已被加载的类信息、常量、静态变量、即时编译器编译后的代码等数据

# 并发和并行的区别

- 并发：同一时间段，多个任务都在执行（单位时间内不一定同时执行）
- 并行：单位时间内，多个任务同时执行

# 为什么要使用多线程

**总体上：**

1. **从计算机底层来说：**线程可以比作轻量级的进程，是程序执行的最小单位，线程间的切换和调度的成本远远小于进程。另外，多核cpu时代意味着多个线程可以同时运行，着减少了线程上下文切换的开销。
2. **从当代互联网发展趋势来说：**现在的系统动不动就要求百万级甚至千万级的并发量，而多线程并发编程正是开发高并发系统的基础，利用好多线程机制可以大大提高系统整体的并发能力以及性能。

**深入到计算机底层来讨论：**

1. **单核时代：**在单核时代多线程主要是为了提高cpu和io设备的综合利用率。当只有一个线程的时候会导致cpu计算时，io设备空闲；进行io操作时，cpu空闲。我们可以简单的说这两者的利用率目前都是50%左右。但是当有两个线程的时候就不一样了，当一个线程执行cpu计算时，另外一个线程可以进行io操作，这样两个的利用率就可以在理想情况下达到100%。
2. **多核时代：**多核时代多线程主要是为了提高cpu利用率。举个例子：假如我们要计算一个复杂的任务，我们只用一个线程的话，cpu只会有一个cpu核心被利用到，而创建多个线程就可以让多个cpu核心被利用到，这样就提高了cpu利用率。

# 使用多线程可能带来什么问题

​		并发编程的目的就是为了能提高程序的执行效率提高程序运行速度，但是并发编程并不总是能提高程序运行速度的，而且并发编程可能会遇到很多问题，比如：内存泄漏、上下文切换、死锁。

# 线程的生命周期和状态

| 状态名称     | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| NEW          | 初始状态，线程被构建，但是还没有调用stat()方法               |
| RUNNABLE     | 运行状态，java线程将操作系统中的就绪和运行两种状态笼统的称作“运行中” |
| BLOCKED      | 阻塞状态，表示线程阻塞于锁                                   |
| WAITING      | 等待状态，表示线程进入等待状态，进入该状态表示当前线程需要等待其他线程做出一些特定动作 |
| TIME_WAITING | 超时等待状态，该状态不同于WAITING，它是可以在指定的时间自行返回的 |
| TERMINATED   | 终止状态，表示当前线程已经执行完毕                           |

​		线程创建后将处于**NEW（新建）**状态，调用`start()`方法后开始运行，线程这时候处于**READY（可运行）**状态。可运行状态的线程获得了cpu时间片（timslice）后就处于**RUNNING（运行）**状态。

​		当线程执行了`wwait()`方法后，线程进入**WAITING（等待）**状态。进入等待状态的线程需要依靠其他线程的通知才能返回到运行状态，而**TIME_WAITING（超时等待）**状态相当于在等待状态的基础上增加了超时限制，比如通过`sleep(long mills)`方法或`wait(long millis)`方法可以将java线程置于**TIME_WAITING**状态。当超时时间到达后java线程将会返回到**RUNNABLE**状态。当线程调用同步方法时，在没有获取到锁的情况下，线程将会进入到**BLOCKED（阻塞）**状态。线程在执行Runnable的`run()`方法之后会进入到**TERMINATED（终止）**状态。

# 什么是上下文切换

​		当前人讹误执行完CPU时间片切换到另一个任务之前会先保存自己的状态，以便下次再切换回这个任务时，可以再加载这个任务的状态。**任务从保存到再加载的过程就是一次上下文切换**。

​		上下文切换通常是计算密集型的，也就是说，它需要相当客观的处理器时间，每次切换都需要纳秒量级的时间。所以，上下文切换对系统来说意味着消耗大量的CPU时间，事实上，可能操作系统中时间消耗最大的操作。

# 什么是线程死锁？如何避免死锁？

## 认识线程死锁

​		多个线程同时被阻塞，它们中的一个或者全部都在等待某个资源被释放。由于线程被无限期地阻塞，因此程序不可能正常终止。

**产生死锁必须具备一下四个条件：**

1. 互斥条件：该资源任意一个时刻只由一个线程占用
2. 请求与保持条件：一个进程因请求资源而阻塞时，对已获得的资源保持不放
3. 不剥夺条件：线程已获得的资源在未使用完之前不能被其他线程强行剥夺，只有自己使用完毕后才释放资源
4. 循环等待条件：若干进程之间形成一种头尾相接的循环等待资源关系

## 如何避免死锁

为了避免死锁我们只要破坏产生死锁的四个条件中的其中一个就可以了

1. 破坏互斥条件：这个条件我们没有办法破坏，因为我们用锁本来就是想让他们互斥
2. 破坏请求与保持条件：一次性申请所有的资源
3. 破坏不剥夺条件：占用部分资源的线程进一步申请其他资源时，如果申请不到，可以主动释放它本身占有的资源
4. 破坏循环等待条件：靠按序申请资源来预防。按某一顺序申请资源，释放资源则反序释放。破坏循环等待条件

# sleep()方法和wait()方法区别和共同点

1. 两者主要区别在于：`sleep()`方法没有释放锁，而`wait()`方法释放了锁
2. 两者度可以暂停线程的执行
3. `wait()`通常被用于线程间交互/通信，`sleep()`通常被用于暂停执行
4. `wait()`方法被调用后，线程不会自动苏醒，需要别的线程调用同一个对象上的`notify()`或者`notifyAll()`方法。`sleep()`方法执行后，线程会自动苏醒。或者可以使用`wait(long timeout)`超时后线程会自动苏醒

# 为什么调用start()方法时会执行run()方法，为什么我们不能直接调用run()方法

​		new一个Thread，线程进入了新建状态。调用`start()`方法，会启动一个线程并使线程进入了就绪状态，当分配到时间片就可以开始运行了。`start()`会执行线程的相应准备工作，然后自动执行`run()`方法的内容，这是真正的多线程工作。但是，直接执行`run()`方法，会把`run()`方法当成一个main线程下的普通方法去执行，并不会在某个线程中执行它，所以并不是多线程工作

​		**总结：**调用start()方法可启动线程并使线程进入就绪状态，直接执行run()方法的话不会以多线程的方式执行。

# 对于synchronized关键字的了解

​		`synchronized`关键字解决的是多个线程之间访问资源的同步性，`synchronized`关键字可以保证被他修饰的方法或者代码块在任意时刻只能有一个线程执行。

## synchronized修饰实例方法

​		作用于当前对象实例加锁，进入同步代码前要获得当前都像实例的锁

```java
synchronized void method(){
    
}
```

## synchronized修饰静态方法

​		给当前类加锁，会作用于类的所有对象实例，进入同步代码前要获得当前class的锁。因为静态成员不属于任何一个实例对象，是类成员（static表明这是该类的一个静态资源，不管new了多少个对象，只有一份）所以，如果一个线程A调用一个实例对象的非静态`synchronized`方法，而线程B需要调用这个实例对象所属类的静态`synchronized`方法，是允许的，不会发生互斥现象，因为访问静态`synchronized`方法占用到的锁是当前类的锁，而访问非静态`synchronized`方法占用的锁是当前实例对象的锁

```java
synchronized void static method(){
    
}
```

## synchronized修饰代码块

​		指定加锁对象，对给定的对象/类加锁。`synchronized(this|object)`表示进入同步代码块前要获得给定对象的锁。`synchronized(类.class)`表示进入同步代码块前要获得当前class的锁

```java
synchronized(this){
    
}
```

# 构造方法可以使用synchronized关键字修饰吗？

结论：构造方法不能使用synchronized关键字修饰

构造方法本身就属于线程安全，不存在同步的构造方法这一说。

# synchronized关键字的底层原理

## synchronized同步语句块

```java
public class SynchronizedDemo{
    public void method(){
        synchronized(this){
            System.out.println("synchronized 代码块");
        }
    }
}
```

​		`synchronized`同步语句块的实现使用的是`monitorenter`和`monitorexit`指令，其中`monitorenter`指令指向同步代码块的开始位置，`monitorexit`指令则指明同步代码块的结束位置。

当执行`monitorenter`指令时，线程试图获取锁也就是获取对象监视器`monitor`的持有权。

在执行`monitorenter`时，会尝试获取对象的锁，如果锁的计数器为0则表示锁可以被获取，获取后将锁计数器设为1也就是加1.

在执行`montiorexit`指令后，将锁计数器设为0，表明锁被释放。如果获取对象锁失败，那当前线程就要阻塞等待，知道锁被另外一个线程释放为止。

## synchronized修饰方法的情况

```java
public class SynchronizedDemo{
    public synchronized void method(){
        System.out.println("synchronized 方法");
    }
}
```

​		`synchronized`修饰的方法并没有`monitorenter`和`monitorexit`指令，取而代之的是`ACC_SYNCHRONIZED`标识，该标识指明了该方法是一个同步方法。JVM通过`ACC_SYNCHRONIZED`访问标志来辨别一个方法是否声明为同步方法，从而执行相应的同步调用。

## synchronized关键字和volatile关键字的区别

`synchronized`和`volatile`关键字是两个互补的存在，而不是对立的存在

- `volatile`关键字是线程同步的轻量级实现，所以`volatile`性能肯定比`synchronized`关键字要好。但是`volatile`关键字只能用于变量，而`synchronized`关键字可以修饰方法以及代码块。
- `volatile`关键字能保证数据的可见性，但不能保证数据的原子性。`synchronized`关键字两者都能保证。
- `volatile`关键字主要用于解决变量在多个线程间的可见性，而`synchronized`关键字解决的是多个线程之间访问资源的同步性。

# ThreadLocal基础

​		通常情况下我们创建的变量是可以被任何一个线程访问并修改的。如果想实现每一个线程都有自己的专属本地变量该如何解决呢？JDK中提供的`ThreadLocal`类正是为了解决这样的问题。`ThreadLocal`类主要解决的就是让每个线程绑定自己的值，可以将`ThradLocal`类形象比喻成存放数据的盒子，盒子中可以存储每个线程的私有数据。

​		如果你创建了一个`ThreadLocal`变量，那么访问这个变量的每个线程都会有这个变量的本地副本，这也是`ThradLocal`变量名的由来。他们可以使用`get()`和`set()`方法来获取默认值或将其更改为当前线程所存在的副本的值，从而避免了线程安全的问题。

# ThreadLocal原理

**Thread类源码：**

```java
public class Thread implements Runnable{
    ......
	//与此线程有关的ThreadLocal的值。由ThreadLocal类维护
    ThradLocal.ThreadLocalMap threadLocals = null;
    //与此线程有关的InheritableThreadLocal值。由InheritableThreadLocal维护
    ThreadLocal.ThreadLocalMap inheritableThreadLocal = null;
    ......
}
```

从上面的Thread类源码可以看出，Thread类中有一个thradLocals和一个inheritableThreadLocals变量，他们都是ThreadLocalMap类型的变量，我们可以把ThreadLocalMap理解为ThradLocal类实现的定制化的HashMap。默认情况下这两个变量都是null，只有当前线程调用ThreadLocal类的set或get方法才创建他们，实际上调用这两个方法时，我们调用的是ThreadLocalMap类对应的get()、set()方法。

**ThreadLocal的set()方法和getMap(Thread t)方法：**

```java
public void set(T value){
    Thread t = Thread.currentThread();
    ThreadLocalMap map = getMap(t);
    if(map!=null){
        map.set(this,value);
    }else{
        createMap(t,value);
    }
    ThreadLocalMap getMap(Thread t){
        return t.threadLocals;
    }
}
```

我们可以发现调用ThreadLocal的set方法时，传入的参数value会存入到一个ThreadLocalMap对象中。接着，我们找找ThreadLocalMap是从哪里来的，通过getMap方法，我们也不难发现。ThreadLocalMap对象，就是当前线程的一个成员变量threadLocals。

​		总结，也就是说，每次我们每次往ThreadLocal中set值就是存入了当前线程对象的threadLocals属性里，而threadLocals的类型是ThreadLocalMap。ThreadLocalMap 可以理解为 ThreadLocal 类实现的定制化的 HashMap。

**ThreadLocal的get()方法：**

```java
public T get() {
    Thread t = Thread.currentThread();
    ThreadLocalMap map = getMap(t);
 if (map != null) {
        ThreadLocalMap.Entry e = map.getEntry(this);
 if (e != null) {
 T result = (T)e.value;
 return result;
        }
    }
 return setInitialValue();
}
```

同set方法一样，也是先根据当前线程获取ThreadLocalMap对象，然后在map中取值

# ThreadLocal内存泄漏问题

**弱引用介绍：**

> 如果一个对象只具有弱引用，那就类似于可有可无的生活用品。弱引用和软引用的区别在于：只具有弱引用的对象拥有更短暂的生命周期。在垃圾回收器线程扫描它所管辖的内存区域的过程中，一旦发现了只具有弱引用的对象，不管当前内存空间足够与否，都会回收它的内存。不过，由于垃圾回收器是一个优先级很低的线程，因此不一定会很快发现那些值具有弱引用的对象。
>
> 弱引用可以和一个引用队列联合使用，如果弱引用所引用的对象被垃圾回收，java虚拟机就会把这个弱引用加入到与之关联的引用队列中。

​		ThreadLocalMap中使用的key为ThreadLocal的弱引用，而value是强引用。所以，如果ThreadLocal没有被外部强引用的情况下，在垃圾回收的时候，key会被清理掉，而value不会被清理掉。这样一来，ThreadLocalMap中就会出现key为null的Entry，假如我们不做任何措施的话，value永远无法被GC回收，这个时候可能会产生内存泄漏。ThreadLoacalMap实现中已经考虑了这种情况，在调用set()、get()、remove()方法的时候，会清理掉key为null的记录。使用完ThreadLocal方法后最好手动调用remove()方法。

```java
static class Entry extends WeakReference<ThreadLocal<?>>{
    Object value;
    Entry(ThreadLocal<?> k,Object v){
        super(k);
        value = v;
    }
}
```

# 线程池

## 为什么要使用线程池

**线程池**提供了一种限制和管理资源（包括执行一个任务）。每个线程池还维护一些基本统计信息，例如已完成任务的数量。

**线程池的好处：**

- 降低资源消耗。通过重复利用已创建的线程降低线程创建和销毁造成的消耗
- 提高响应速度。当任务到达时，任务可以不需要等到线程创建就能立即执行
- 提高线程的可管理性。线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还回降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控



## 实现Runnable接口和Callable接口的区别

Runnable接口不会返回结果或抛出异常，但是Callable接口可以。所以，如果任务不需要返回结果或抛出异常推荐使用Runnable接口，这样代码开起来会更加简洁。

工具类Executors可以实现Runnable和Callable对象之间的相互转换。

## 执行execute()方法和submit()方法的区别是什么

1. execute()方法用于提交不需要返回值的任务，所以无法判断任务时否被线程池执行成功与否
2. submit()方法用于提交需要返回值得任务。线程池会返回一个Future类型的对象，通过这个Future对象可以判断任务是否执行成功，并且可以通过Future的get()方法来获取返回值，get()方法会阻塞当前线程直到任务完成，而使用get(long timeout,TimeUnit unit)方法则会阻塞线程一段时间后立即返回，这个时候可能任务没有执行完。

**AbstractExecutorService接口中的sumbit()方法为例子来看源码：**

```java
public Future<?> submit(Runnable task){
    if(ask==null) throw new NullPointerException();
    RunnableFuture<Void> ftask = newTaskFor(task,null);
    execute(ftask);
    return task;
}
```

上面的方法调用的newTaskFor返回了一个FutureTask对象

```java
protected <T> RunnableFuture<T> newTaskFor(Runnable runnable,T value){
    return new FutureTask<T>(runnable,value);
}
```

**excute()方法：**

```java
public void execute(Runnable command){
    ......
}
```

## 如何创建线程池

《阿里巴巴java开发手册》中强制线程池不允许使用Executors去创建，而是通过ThreadPoolExecutor的方式，这样的处理方式更加明确线程池运行规则，规避资源耗尽的风险。

> Executors返回线程池对象的弊端：
>
> - FixedThreadPool和SingleThreadExecutor：允许请求的队列长度为Integer.MAX_VALUE，可能堆积大量的请求，从而导致OOM
> - CachedThreadPool和ScheduledThreadPool：允许创建的线程数量为Integer.MAX_VALUE，可能会创建大量线程，从而导致OOM

**方法一：通过构造方法实现**

![image-20220307154625480](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220307154625480.png?raw=true)

**方法二：通过Executor框架的工具类Executors来实现**

- FixedThreadPool：该方法返回一个固定线程数量的线程池。该线程池中的线程数量始终不变。当有一个新的任务提交时，线程池中若有空闲进程，则立即执行。若没有，则新的任务会被暂存在一个任务队列中，带有线程空闲时，便处理在任务队列中的任务。
- SingleThreadExecutor：方法返回一个只有一个线程的线程池。若多余一个任务被提交到该线程池，任务会被保存在一个任务队列中，带线程空闲，按先入先出的顺序执行队列中的任务。
- CachedThreadPool：该方法返回一个可根据实际情况调整线程数量的线程池。线程池的线程数量不确定，但若有空闲线程可以复用，则会优先使用可复用的线程。若所有线程均在工作，又有新的任务提交，则会创建新的线程处理任务。所有线程在当前任务执行完毕后，将返回线程池进行复用。

## ThreadPoolExecutor类分析

### ThreadPoolExecutor构造函数重要参数分析

ThreadPoolExecutor 3个最重要的参数：

- corePoolSize：核心线程数定义了最小可以同时运行的线程数量
- maximumPoolSize：当队列中存放的任务达到队列容量的时候，当前可以同时运行的线程数量变为最大线程数
- workQueue：当新任务来的时候会先判断当前运行的线程数量是否达到核心线程数，如果达到，新任务就会被存放在队列中

ThreadPoolExecutor  其他参数：

- keepAliveTime：当线程池中的线程数量大于corePoolSize的时候，如果这时没有新的任务提交，核心线程外的线程不会立即销毁，而是会等待，知道等待时间超过了。
- unit：keepAliveTime参数的时间单位
- threadFactory：executor创建新线程的时候会用到
- handler：饱和策略。

### ThreadPoolExecutor 饱和策略

**定义：**如果当前同时运行的线程数量达到最大线程数量并且队列也已经被放满了时，ThreadPoolTaskExecutor定义了一些策略：

- ThreadPoolExecutor.AbortPolicy：抛出RejectedExecutionException来拒绝新任务的处理。
- ThreadPoolExecutor.CallerRunsPolicy：调用执行自己的线程运行任务。这个策略喜欢增加队列容量。如果应用程序可以承受此延迟并且你不能丢弃任何一个任务请求的话，可以选择这个策略。
- ThreadPoolExecutor.DiscardPolicy：不处理新任务，直接丢弃掉
- ThreadPoolExecutor.DiscardOldestPolicy：此策略将丢弃最早的未处理的任务请求





























