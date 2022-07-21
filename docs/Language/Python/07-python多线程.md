# Python多线程

## 多线程优点

- 使用线程可以把占据长时间的程序中的任务放到后台去处理。
- 用户界面可以更加吸引人，这样比如用户点击了一个按钮去触发某些事件的处理，可以弹出一个进度条来显示处理的进度
- 程序的运行速度可能加快
- 在一些等待的任务实现上如用户输入、文件读写和网络收发数据等，线程就比较有用了。在这种情况下我们可以释放一些珍贵的资源如内存占用等等。

## 线程与进程的区别

​		每个独立的进程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。

​		每个线程都有他自己的一组CPU寄存器，称为线程的上下文，该上下文反映了线程上次运行该线程的CPU寄存器的状态。

​		指令指针和堆栈指针寄存器是线程上下文中两个最重要的寄存器，线程总是在进程得到上下文中运行的，这些地址都用于标志拥有线程的进程地址空间中的内存。

- 线程可以被抢占（中断）。
- 在其他线程正在运行时，线程可以暂时搁置（也称为睡眠） -- 这就是线程的退让。

## 线程的实现方式

在python3中，通过该threading模块提供线程的功能。原来的thread模块已经废弃。但是，threading模块中有个Thread类是模块中最主要的线程类

### threading模块的方法和属性

| 方法与属性         | 描述                                                         |
| ------------------ | ------------------------------------------------------------ |
| current_thread()   | 返回当前线程                                                 |
| active_count()     | 返回当前活跃的线程数，1个主线程+n个子线程                    |
| get_ident()        | 返回当前线程                                                 |
| enumerate()        | 返回当前活动 Thread 对象列表                                 |
| main_thread()      | 返回主 Thread 对象                                           |
| settrace(func)     | 为所有线程设置一个 trace 函数                                |
| setprofile(func)   | 为所有线程设置一个 profile 函数                              |
| stack_size([size]) | 返回新创建线程栈大小；或为后续创建的线程设定栈大小为 size    |
| TIMEOUT_MAX        | Lock.acquire(), RLock.acquire(), Condition.wait() 允许的最大超时时间 |

### threadinf模块包含的类

| 类        | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| Thread    | 基本线程类                                                   |
| Lock      | 互斥锁                                                       |
| RLock     | 可重入锁，使单一进程再次获得已持有的锁（递归锁）             |
| Condition | 条件锁，使得一个线程等待另一个线程满足特定条件，比如改变状态或某个值 |
| Semaphore | 信号锁，为线程间共享的有限资源提供一个计数器，如果没有可用资源则会被阻塞 |
| Event     | 事件锁，任意数量的线程等待某个事件的发生，在该事件发生后所有线程被激活 |
| Timer     | 一种计时器                                                   |
| Barrier   | Python3.2新增的“阻碍”类，必须达到指定数量的线程后才可以继续执行。 |

## Thread类

```python
threading.Thread(self, group=None, target=None, name=None,agrs=(),kwargs=None, *, daemon=None)
```

- 参数group是预留的，用于将来扩展
- 参数target是一个可调用对象，在线程启动后执行；
- 参数name是线程的名字。默认值为“Thread-N“，N是一个十进制数字
- 参数args和kwargs分别表示调用target时的参数列表和关键字参数

### Thread类的方法和属性

| 方法和属性                 | 说明                                                         |
| -------------------------- | ------------------------------------------------------------ |
| start()                    | 启动线程，等待CPU调度                                        |
| run()                      | 线程被cpu调度后自动执行的方法                                |
| getName()、setName()和name | 用于获取和设置线程的名称。                                   |
| setDaemon()                | 设置为后台线程或前台线程（默认是False，前台线程）。如果是后台线程，主线程执行过程中，后台线程也在进行，主线程执行完毕后，后台线程不论成功与否，均停止。如果是前台线程，主线程执行过程中，前台线程也在进行，主线程执行完毕后，等待前台线程执行完成后，程序才停止。 |
| ident                      | 获取线程的标识符。线程标识符是一个非零整数，只有在调用了start()方法之后该属性才有效，否则它只返回None。 |
| is_alive()                 | 判断线程是否是激活的（alive）。从调用start()方法启动线程，到run()方法执行完毕或遇到未处理异常而中断这段时间内，线程是激活的。 |
| isDaemon()方法和daemon属性 | 是否为守护线程                                               |
| join([timeout])            | 调用该方法将会使主调线程堵塞，直到被调用线程运行结束或超时。参数timeout是一个数值类型，表示超时时间，如果未提供该参数，那么主调线程将一直堵塞到被调线程结束。 |

## 线程的实现方式

### 继承Thread类，重写run()方法

```python
import threading


class MyThread(threading.Thread):
    def __init__(self, thread_name):
        # 注意：一定要显式的调用父类的初始化函数。
        super(MyThread, self).__init__(name=thread_name)

    def run(self):
        print("%s正在运行中......" % self.name)


if __name__ == '__main__':
    for i in range(10):
        MyThread("thread-" + str(i)).start()
```

### 实例化threading.Thread对象时，将线程要执行的任务函数作为参数传入线程

```python
import threading
import time

def show(arg):
    time.sleep(1)
    print("thread " + str(arg) + " running......")

for i in range(10):
    t = threading.Thread(target=show, args=(i,))  # 注意传入的参数一定是一个元组!
    t.start()
```

## join()方法

多线程执行过程中，每个线程各自执行自己的任务，不等待其他线程

```python
import time
import threading

def doWaiting():
    print("开始等待：", time.strftime('%H:%M:%S'))
    time.sleep(3)
    print("结束等待：", time.strftime("%H:%M:%S"))

t = threading.Thread(target=doWaiting)
t.start()

time.sleep(1)  # 确保线程已经启动
print("开始工作")
print("结束工作")
```

执行结果：

```python
开始等待： 17:17:10
开始工作
结束工作
结束等待： 17:17:13
```

上述代码，主线程没有等待子线程t执行完毕，而是一直往下执行自己的代码，执行完毕后也没有结束了整个程序，而是等待子线程t执行完毕，整个程序才结束

当我们希望主线程等等子线程t的时候，我们可以使用join()方法

```python
import threading
import time

def doWaiting():
    print("开始等待: ", time.strftime("%H:%M:%S"))
    time.sleep(3)
    print("结束等待：", time.strftime("%H:%M:%S"))

t = threading.Thread(target=doWaiting)
t.start()
# 确保线程t已经启动
time.sleep(1)

print("开始阻塞主线程，等待子线程执行")
t.join()  # 主线程不要着急走，等等子线程吧!!! 将一直堵塞，直到t运行结束
print("子线程执行完，结束阻塞，主线程继续执行！")
```

执行结果：

```python
开始等待:  17:15:46
开始阻塞主线程，等待子线程执行
结束等待： 17:15:49
子线程执行完，结束阻塞，主线程继续执行！
```

## setDaemon()方法

setDaemon(True)把所有的子线程都变成主线程的守护进程。当主线程结束后，守护子进程也会随之结束，整个程序也跟着退出。

如果存在多个子线程，假设有守护线程B，又有非守护线程C，则主线程会等待非守护线程C执行完，守护线程B如果还没执行完则会被终止。

```python
import threading
import time


def run():
    print(threading.current_thread().getName(), "开始工作")
    time.sleep(2)  # 子线程停两秒
    print("子线程工作执行完成！")


for i in range(3):
    t = threading.Thread(target=run)
    t.setDaemon(True)  # 把子线程设置为守护进程，必须在start()之前设置!!!
    t.start()

time.sleep(1)  # 主线程停1s
print("主线程结束运行...")
print(threading.active_count())  # 输出活跃的线程数量
```

输出结果：

```python
Thread-1 开始工作
Thread-2 开始工作
Thread-3 开始工作
主线程结束运行...
4
```

## 自定义线程类

对于threading模块的Thread类，本质上是执行了它的run()方法。因此可以字定义线程类，让它继承Thread类，然后重新run()方法即可。

```python
import threading


class MyThreading(threading.Thread):
    def __init__(self, func, arg):
        super(MyThreading, self).__init__()
        self.func = func
        self.arg = arg

    # 重写run()方法
    def run(self):
        self.func(self.arg)


def my_func(args):
    '''
    此处可以把你想让线程做的事定义在这里
    '''
    print("我是业务函数...", args)
    

obj = MyThreading(my_func, 123)
obj.start()
```

执行结果：

```python
我是业务函数... 123
```

# 线程锁

## 线程不安全

​		线程之间的任务执行是CPU进行随机调度的，并且每个线程可能只执行了n条指令后就切换到别的线程了。当多个线程同时操作一个对象时，如果没有很好地保护该对象，会造成程序结果不可预期。如下例

```python
import threading
import time

number = 0


def plus():
    global number  # global声明此处的number是外面的全局变量number
    for _ in range(1000000):  # 进行一个大数级别的循环加一运算
        number += 1
    print("子线程%s运算结束后，number = %s" % (threading.current_thread().getName(), number))


for i in range(2):  # 用2个子线程，就可以观察到脏数据
    t = threading.Thread(target=plus)
    t.start()

time.sleep(2)  # 等待2秒，确保2个子线程都已经结束运算。
print("主线程执行完毕后，number = ", number)
```

执行结果：每次数值可能都不一样

```python
子线程Thread-1运算结束后，number = 1000000
子线程Thread-2运算结束后，number = 1218969
主线程执行完毕后，number =  1218969
```

结果不是想要的2,000,000，可以很明显的看出脏数据的情况。这是因为两个线程在运行过程中，cpu随机调度，在没有对number进行保护的情况下。发生了数据错误。

## threading模块中的锁

- Lock 互斥锁
- RLock 可重入锁
- Semaphore 信号
- Event 事件
- Condition 条件
- Barrier “阻碍”

### Lock(互斥锁)

同一时刻只有一个线程可以访问共享的数据，初始化所对象，然后将锁当做参数传递给任务函数，在人物中加锁，使用后释放锁。

```python
import threading
import time

number = 0
lock = threading.Lock()


def plus(lk):
    global number  # global声明此处的number是外面的全局变量number
    lk.acquire()  # 开始加锁
    for _ in range(1000000):  # 进行一个大数级别的循环加一运算
        number += 1
    print("子线程%s运算结束后，number = %s" % (threading.current_thread().getName(), number))
    lk.release()  # 释放锁，让别的线程也可以访问number


if __name__ == '__main__':
    for i in range(2):  # 用2个子线程，就可以观察到脏数据
        t = threading.Thread(target=plus, args=(lock,))  # 需要把锁当做参数传递给plus函数
        t.start()
    time.sleep(2)  # 等待2秒，确保2个子线程都已经结束运算。
    print("主线程执行完毕后，number = ", number)
```

执行结果：

```python
子线程Thread-1运算结束后，number = 1000000
子线程Thread-2运算结束后，number = 2000000
主线程执行完毕后，number =  2000000
```

### RLock(可重入锁)

​		Lock在锁定时不属于特定线程，也就是说，Lock可以在一个线程中上锁，在另一个线程中解锁。而对于RLock来说，只有当前线程才能释放本线程上的锁。

​		RLock允许在同一线程中被多次acquire。而Lock却不允许这种情况。

```python
import threading

rlock = threading.RLock()


def func():
    if rlock.acquire():  # 第一把锁
        print("first lock")
        if rlock.acquire():  # 第一把锁没解开的情况下接着上第二把锁
            print("second lock")
            rlock.release()  # 解开第二把锁
        rlock.release()  # 解开第一把锁


t = threading.Thread(target=func)
t.start()
```

执行结果：

```python
first lock
second lock
```

注意上面强调的同一线程中，因为对于RLock来说只有当前线程才能释放本线程上的锁，并不能在t1线程中已经执行rlock.acquire，且未释放锁的情况下，在另一个t2线程中还能执行rlock.acquire（这种情况会导致t2阻塞）

那么，既然一个线程可以通过Lock来获得一把锁，干嘛还要使用RLock去锁上加锁？考虑一下这种情况：

```python
import threading
import time

lock1 = threading.RLock()


def inner():
    with lock1:
        print("inner1 function:%s" % threading.current_thread())


def outer():
    print("outer function:%s" % threading.current_thread())
    with lock1:
        inner()


if __name__ == "__main__":
    t1 = threading.Thread(target=outer)
    t2 = threading.Thread(target=outer)
    t1.start()
    t2.start()
```

执行结果：

```python
outer function:<Thread(Thread-1, started 21108)>
inner1 function:<Thread(Thread-1, started 21108)>
outer function:<Thread(Thread-2, started 21384)>
inner1 function:<Thread(Thread-2, started 21384)>
```

​		首先只看t1线程，当执行到outer函数时，首先打印outer function:<Thread(Thread-1, started 21108)>，然后用lock1给当前线程上了一把锁，然后执行inner函数，在inner里面又需要用lock1来上一把锁，如果此时用Lock的话，由于已经上了一把锁，程序会因为第二次无法获得锁而导致t1阻塞，程序阻塞之后又没法释放锁，所以会导致程序死锁。这种情况下，RLock就派上用场了。t2线程执行过程和t1一样，这里只是多加个线程看起来酷炫一些

### Semaphore(信号)

类名：BoundedSemaphore。这种锁允许一定数量的线程同时更改数据，它不是互斥锁。比如地铁安检，排队人很多，工作人员只允许一定数量的人进入安检区，其它的人继续排队。

```python
import time
import threading


def run(n, se):
    se.acquire()
    print("run the thread: %s" % n)
    time.sleep(1)
    se.release()


# 设置允许5个线程同时运行
semaphore = threading.BoundedSemaphore(5)
for i in range(20):
    t = threading.Thread(target=run, args=(i, semaphore))
    t.start()
```

### Event(事件)

类名：Event

事件线程锁的运行机制：全局定义了一个Flag，如果Flag的值为False，那么当程序执行wait()方法时就会阻塞，如果Flag值为True，线程不再阻塞。这种锁，类似交通红绿灯（**默认是红灯**），它属于在红灯的时候一次性阻挡所有线程，在绿灯的时候，**一次性放行所有**排队中的线程。

| 方法     | 作用                                       |
| -------- | ------------------------------------------ |
| clear()  | 调用clear()方法会将事件的Flag设置为False。 |
| set()    | 调用set()方法会将Flag设置为True            |
| wait()   | 调用wait()方法将等待“红绿灯”信号。         |
| is_set() | is_set():判断当前是否"绿灯放行"状态        |

下面是一个模拟红绿灯，然后汽车通行的例子：

```python
# 利用Event类模拟红绿灯
import threading
import time

event = threading.Event()


def lighter():
    green_time = 5  # 绿灯时间
    red_time = 5  # 红灯时间
    event.set()  # 初始设为绿灯
    while True:	# 这里我写成了死循环，按需可以改造
        print("绿灯亮...")
        time.sleep(green_time)
        event.clear()  # 程序执行wait()方法时阻塞所有线程
        print("红灯亮...")
        time.sleep(red_time)
        event.set()  # 红灯时间完毕，设为绿灯


def run(name):
    while True:	# 这里我写成了死循环，按需可以改造
        if event.is_set():  # 判断当前是否"放行"状态，true表示绿灯，可以放行
            print("一辆[%s] 开过..." % name)
            time.sleep(1)
        else:
            print("一辆[%s]开来，看到红灯，停下了..." % name)
            event.wait()
            print("[%s] 看到绿灯亮，瞬间飞起....." % name)


if __name__ == '__main__':

    light = threading.Thread(target=lighter, )
    light.start()

    for name in ['奔驰', '宝马', '奥迪']:
        car = threading.Thread(target=run, args=(name,))
        car.start()
```

执行结果：

```python
绿灯亮...
一辆[奔驰] 开过...
一辆[宝马] 开过...
一辆[奥迪] 开过...
一辆[奥迪] 开过...一辆[奔驰] 开过...一辆[宝马] 开过...


一辆[奥迪] 开过...一辆[宝马] 开过...一辆[奔驰] 开过...


一辆[奔驰] 开过...一辆[奥迪] 开过...一辆[宝马] 开过...


一辆[奥迪] 开过...一辆[奔驰] 开过...
一辆[宝马] 开过...

红灯亮...
一辆[奥迪]开来，看到红灯，停下了...一辆[宝马]开来，看到红灯，停下了...

一辆[奔驰]开来，看到红灯，停下了...
.......
```

### Condition(条件)

类名：Condition

Condition称作条件锁，依然是通过acquire()/release()加锁/解锁。

| 方法            | 作用                                                         |
| --------------- | ------------------------------------------------------------ |
| wait([timeout]) | 方法将使线程进入Condition的等待池等待通知，并释放锁。使用前线程必须已获得锁定，否则将抛出异常。 |
| notify()        | 方法将从等待池挑选一个线程并通知，收到通知的线程将自动调用acquire()尝试获得锁定（进入锁定池），其他线程仍然在等待池中。调用这个方法不会释放锁定。使用前线程必须已获得锁定，否则将抛出异常。 |
| notifyAll()     | 方法将通知等待池中所有的线程，这些线程都将进入锁定池尝试获得锁定。调用这个方法不会释放锁定。使用前线程必须已获得锁定，否则将抛出异常。 |

下面这个例子，如果不强制停止则会一直从1加到5再从5 减到0，num是一个全局变量，如果不加锁程序无法按预定逻辑执行

```python
import threading
import time

num = 0
con = threading.Condition()


class Foo(threading.Thread):

    def __init__(self, name, action):
        super(Foo, self).__init__()
        self.name = name
        self.action = action

    def run(self):
        global num
        con.acquire()   # 上锁
        print("%s开始执行..." % self.name)
        while True:
            if self.action == "add":
                num += 1
            elif self.action == 'reduce':
                num -= 1
            else:
                exit(1)
            print("num当前为：", num)
            time.sleep(1)
            if num == 5 or num == 0:
                print("暂停执行%s！" % self.name)
                con.notify()
                con.wait()
                print("%s开始执行..." % self.name)
        con.release()   # 解锁


if __name__ == '__main__':
    a = Foo("线程A", 'add')
    b = Foo("线程B", 'reduce')
    a.start()
    b.start()
```

执行结果：

```python
线程A开始执行...
num当前为： 1
num当前为： 2
num当前为： 3
num当前为： 4
num当前为： 5
暂停执行线程A！
线程B开始执行...
num当前为： 4
num当前为： 3
num当前为： 2
num当前为： 1
num当前为： 0
暂停执行线程B！
线程A开始执行...
num当前为： 1
num当前为： 2
num当前为： 3
num当前为： 4
```

## threading模块中的定时器（Timer）

定时器Timer类是threading模块中的一个小工具，用于指定n秒后执行某操作。

```python
from threading import Timer

def hello():
    print("hello, world")

# 表示1秒后执行hello函数
t = Timer(1, hello)
t.start()
```

## 通过with语句使用线程锁

线程锁都有一个加锁和释放锁的动作，非常类似文件的打开和关闭。在加锁后，如果线程执行过程中出现异常或者错误，没有正常的释放锁，那么其他的线程会造到致命性的影响。通过with上下文管理器，可以确保锁被正常释放。其格式如下：

```python
with some_lock:
    # 执行任务...
```

这相当于：

```python
some_lock.acquire()
try:
    # 执行任务..
finally:
    some_lock.release()
```

# 生产者消费者模式

## 生产者和消费者模式来源

在线程世界里, 生产者就是生产数据的线程，消费者就是消费数据的线程。

在多线程开发当中，如果生产者处理速度很快，而消费者处理速度很慢，

那么生产者就必须等待消费者处理完，才能继续生产数据。

同样的道理，如果消费者的处理能力大于生产者，那么消费者就必须等待生产者。

为了解决这个问题于是引用了生产者和消费者模式。

##  生产者消费者模式详解

生产者消费者模式是通过一个容器来解决生产者和消费者的强耦合问题。

生产者和消费者彼此之间不直接通讯，而通过阻塞队列来进行通讯，所以生产者生产完数据之后不用等待消费者处理，

直接扔给阻塞队列，消费者不找生产者要数据，而是直接从阻塞队列里取，阻塞队列就相当于一个缓冲区，

平衡了生产者和消费者的处理能力。

![image-20220124150921828](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220124150921828.png?raw=true)

生产者消费者模式的核心是`阻塞队列`，也称`消息队列`，分布式消息队列有RabbitMQ，RocketMq，Kafka等等。

## 示例

```python
#!/usr/bin/env python
# -*- coding:utf-8 -*-
import time
import queue
import threading

q = queue.Queue(10)  # 阻塞队列，用来保存“大饼”，最大数量为10


def productor(i):
    # 产品经理不停地每2秒画一个饼
    while True:
        q.put("产品经理 %s 做的大饼！" % i)
        time.sleep(2)


def consumer(j):
    # 程序员不停地每秒吃一个大饼
    while True:
        print("程序员 %s 吃了一个 %s" % (j, q.get()))
        time.sleep(1)


# 实例化了3个生产者（产品经理）
for i in range(3):
    t = threading.Thread(target=productor, args=(i,))
    t.start()
# 实例化了10个消费者（程序员）
for j in range(10):
    v = threading.Thread(target=consumer, args=(j,))
    v.start()
```



