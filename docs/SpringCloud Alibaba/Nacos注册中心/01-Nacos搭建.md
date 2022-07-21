# Windows安装

开发阶段采用单机安装即可。

## 下载安装包

在Nacos的GitHub页面，提供有下载链接，可以下载编译好的Nacos服务端或者源代码：

GitHub主页：https://github.com/alibaba/nacos

GitHub的Release下载页：https://github.com/alibaba/nacos/releases

![image-20220131165603617](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220131165603617.png?raw=true)

windows版本使用`nacos-server-1.4.1.zip`包即可。

## 解压

将这个`nacos-server-1.4.1.zip`解压到任意非中文目录下，如图：

Nacos的默认端口是8848，如果你电脑上的其它进程占用了8848端口，请先尝试关闭该进程。

**如果无法关闭占用8848端口的进程**，也可以进入nacos的conf目录，修改配置文件中的端口：

![image-20220131165627907](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220131165627907.png?raw=true)

## 启动

进入bin目录

执行命令：

```sh
startup.cmd -m standalone
```

## 启动时遇到的问题

### db.num is null

将 Nacos 下的 conf/application.properties 文件修改如下图所示

![image-20220131164626245](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220131164626245.png?raw=true)

新建本地数据库 nacos，执行 conf/nacos-mysql.sql 文件，确保本地数据库有此信息。

![image-20220131164818746](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220131164818746.png?raw=true)

### Unable to start embedded Tomcat

**打开启动脚本文件 startup.cmd，修改如图所示即可**

![image-20220131164936752](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220131164936752.png?raw=true)

## 访问

在浏览器中访问下图中所示地址，初始用户和密码都是nacos

![image-20220131165047854](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220131165047854.png?raw=true)

# Linux安装

Linux或者Mac安装方式与Windows类似。

## 安装jdk

```shell
tar -xvf jdk-8u144-linux-x64.tar.gz
```

配置环境变量：

```shell
export JAVA_HOME=/usr/local/java
export PATH=$PATH:$JAVA_HOME/bin
```

设置环境变量：

```shell
source /etc/profile
```

## 上传安装包

![image-20220131165655525](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220131165655525.png?raw=true)

## 解压

命令解压缩安装包：

```sh
tar -xvf nacos-server-1.4.1.tar.gz
```

然后删除安装包：

```sh
rm -rf nacos-server-1.4.1.tar.gz
```

目录中最终样式：

![image-20220131165720284](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220131165720284.png?raw=true)

目录内部：

![image-20220131165736493](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220131165736493.png?raw=true)

## 端口配置

与Windows安装时类似

## 启动

在nacos/bin目录中，输入命令启动Nacos：

```sh
sh startup.sh -m standalone
```

# Nacos的依赖

父工程：

```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-alibaba-dependencies</artifactId>
    <version>2.2.5.RELEASE</version>
    <type>pom</type>
    <scope>import</scope>
</dependency>
```



客户端：

```xml
<!-- nacos客户端依赖包 -->
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```



