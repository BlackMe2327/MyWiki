# 使用yum安装Wget命令出现错误：could not retrieve mirrorlist

## 执行ping命令

```shell
ping 127.0.0.1
ping www.baidu.com
```

## 启用网络连接

```shell
sudo vi /etc/sysconfig/network-scripts/ifcfg-ens33
```

修改配置：

ONBOOT=yes

保存退出

```shell
service network restart
```

## 如果ping通百度，还是出现同样的问题

DNS解析有问题

```shell
vi /etc/resolv.conf
```

nameserver 改成如下所示：

```shell
nameserver 8.8.8.8
```

