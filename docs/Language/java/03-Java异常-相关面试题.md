# Java异常

> 在Java中，所有异类都有一个共同的祖先java.lang包中的Throwable类。
>
> Throwable：有两个重要的子类Exception和Error
>
> 异常类层次结构图如下：

![image-20220304160754613](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220304160754613.png?raw=true)

![image-20220304161650744](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220304161650744.png?raw=true)

## Error

​		Error是指程序无法处理的错误，表示运行程序中较为严重的问题。大多数错误与代码编写者的执行操作无关，而表示代码运行时JVM出现的问题。

## Exception

​		Exception是程序本身可以处理的异常。

## Throwable类常用方法

- public String getMessage()：返回异常发生时的简要描述
- public String toString()：返回异常发生时的详细信息
- public String getLocalizedMessage()：返回异常对象的本地化信息。使用Throwable的子类覆盖这个方法，可以生成本地化信息。如果子类没有覆盖该方法，则该方法返回的信息与getMessage()返回的结果相同。
- public void printStackTrace()：在控制台上打印Throwable对象封装的异常信息

## try-catch-finally

- try:用于捕获异常。其后可以不接或接多个catch异常块，如果没有catch块，则必须跟一个finally块
- catch：用于处理try捕获到的异常
- finally：无论是否捕获或处理异常，finally块里的语句都会被执行。当try块或catch块中遇到return语句时，finally语句块将在方法返回之前被执行

**以下四种情况finally不会被执行：**

1. 在finally语句块第一行发生了异常
2. 在前面的代码中使用了System.exit(int)已退出程序；若该语句在异常语句之后，finally会执行
3. 程序所在线程死亡
4. 关闭cpu

## try-with-resources代替try-catch-finally

​		当程序中有必须要关闭的资源时，应该用try-with-resources代替try-catch-finally，随之代码会更加简短，清晰，产生的异常对我们更有用。

​		Java中的类似于InputStream、OutputStream、Scanner、PrintWriter等资源都需要调用close()方法来手动关闭。

**try-catch-finally方式：**

```java
Scanner scanner = null;
try{
    scanner = new Scanner(new File("D://read.txt"));
    while(scanner.hasNext()){
        System.out.println(scanner.nextLine());
    }
}catch(FileNotFoundException e){
    e.printStackTrace();
}finally{
    if(scanner!=null){
        scanner.close();
    }
}
```

**try-with-resources方式：**

```java
try(Scanner scanner = = new Scanner(new File("D://read.txt"))){
    while(scanner.hasNext()){
        System.out.println(scanner.nextLine());
    }
}catch(FileNotFoundException e){
    e.printStackTrace();
}
```

> try-with-resources方式，当有多个资源需要关闭时，在try()的参数中用分号分割不同资源即可









