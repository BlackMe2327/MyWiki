# Cenots7换源
# 163源

## 备份当前yum源

```shell
cd /etc/yum.repos.d/
cp /CentOS-Base.repo /CentOS-Base-repo.bak
```

## 使用wget下载163yum源

```shell
wget http://mirrors.163.com/.help/CentOS7-Base-163.repo
```

##  清理旧包

```shell
yum clean all
```

## 把下载的163repo文件设置成为默认源

```shell
mv CentOS7-Base-163.repo CentOS-Base.repo
```

## 生成163yum源缓存并更新yum源

```shell
yum makecache
yum update
```

# 阿里云源

## 备份当前yum源

```shell
cd /etc/yum.repos.d/
cp /CentOS-Base.repo /CentOS-Base-repo.bak
```

## 使用wget下载阿里yum源repo文件

```shell
wget http://mirrors.aliyun.com/repo/Centos-7.repo
```

##  清理旧包

```shell
yum clean all
```

## 把下载下来阿里云repo文件设置成为默认源

```shell
mv Centos-7.repo CentOS-Base.repo
```

## 生成阿里云yum源缓存并更新yum源

```shell
yum makecache
yum update
```