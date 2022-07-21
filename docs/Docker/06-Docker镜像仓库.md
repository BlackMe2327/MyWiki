# Docker镜像仓库 

## 搭建私有镜像仓库

参考：https://blog.csdn.net/qq_41167306/article/details/122842916

## 推送、拉取镜像

推送镜像到私有镜像服务必须先tag，步骤如下：

1.重新tag本地镜像，名称前缀为私有仓库的地址：xxx.xxx.xxx.xxx:8080/

 ```sh
docker tag nginx:latest xxx.xxx.xxx.xxx:8080/nginx:1.0 
 ```

2.推送镜像

```sh
docker push xxx.xxx.xxx.xxx:8080/nginx:1.0 
```

3.拉取镜像

```sh
docker pull xxx.xxx.xxx.xxx:8080/nginx:1.0 
```





