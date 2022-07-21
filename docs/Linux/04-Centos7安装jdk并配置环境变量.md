# Centos7安装jdk并配置环境变量

## 下载jdk

https://www.oracle.com/java/technologies/downloads/#java8

下载时需要一个账号

Oracle账号：913898356@qq.com
密码：Oracle123.

## 上传jdk到Centos下

使用ftp或者lrzsz命令上传到centos中

## 解压jdk到/usr/local目录下

```shell
tar -zxvf /usr/local/jdk-8u162-linux-x64.tar.gz -C /usr/local
```

## 配置环境变量

```shell
vi /etc/profile
```

```shell
export JAVA_HOME=/usr/local/java/jdk1.8.0_162
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export PATH=$PATH:$JAVA_HOME/bin
```

## 生效配置

```shell
source /etc/profile
```

## 查看版本

```shell
 java -version
```

