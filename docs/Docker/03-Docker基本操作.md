# Docker的基本操作

## 镜像操作

### 镜像名称

镜像的名称组成：

- 镜名称一般分两部分组成：[repository]:[tag]。
- 在没有指定tag时，默认是latest，代表最新版本的镜像

例如：

`mysql:5.7`,这里mysql是`repository`，5.7是`tag`，合在一起就是镜像名称，代表5.7版本的`MySQL`镜像

### 镜像命令

![image-20220209172309552](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220209172309552.png?raw=true)

### 拉取、查看镜像

从DockerHub中拉取一个nginx镜像并查看

#### 搜索nginx镜像

![image-20220209172442634](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220209172442634.png?raw=true)

#### docker pull nginx 拉取镜像

![image-20220209172544721](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220209172544721.png?raw=true)

#### docker images 查看拉取到的镜像

![image-20220209172616114](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220209172616114.png?raw=true)

### 保存、导入镜像

利用docker save将nginx镜像导出磁盘，然后再通过load加载回来

![image-20220209172835251](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220209172835251.png?raw=true)

#### 保存镜像为压缩包

```sh
docker save -o [保存的目标文件名称] [镜像名称]
docker save -o nginx.tar nginx:latest
```

#### 加载镜像

先删除本地的nginx镜像：

```sh
docker rmi nginx:latest
```

然后运行命令，加载本地文件：

```sh
docker load -i nginx.tar
```

结果：

![image-20220209172929181](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220209172929181.png?raw=true)

## 容器命令

### 容器相关命令

容器保护三个状态：

- 运行：进程正常运行
- 暂停：进程暂停，CPU不再运行，并不释放内存
- 停止：进程终止，回收进程占用的内存、CPU等资源



其中：

- docker run：创建并运行一个容器，处于运行状态

  --name：指定容器名称

  -p：指定端口映射

  -d：让容器后台运行

- docker pause：让一个运行的容器暂停

- docker unpause：让一个容器从暂停状态恢复运行

- docker stop：停止一个运行的容器

- docker start：让一个停止的容器再次运行

- docker rm：删除一个容器

- docker logs

  添加 -f 参数可以持续查看日志

- docker ps

  docker ps -a 查看所有容器，包括已经停止的

### 创建并运行一个容器

创建并运行`nginx`容器的命令：

```sh
docker run --name containerName -p 80:80 -d nginx
```

命令解读：

- docker run ：创建并运行一个容器
- --name : 给容器起一个名字，比如叫做mn
- -p ：将宿主机端口与容器端口映射，冒号左侧是宿主机端口，右侧是容器端口
- -d：后台运行容器
- `nginx`：镜像名称，例如`nginx`

这里的`-p`参数，是将容器端口映射到宿主机端口。

默认情况下，容器是隔离环境，我们直接访问宿主机的80端口，肯定访问不到容器中的`nginx`。

现在，将容器的80与宿主机的80关联起来，当我们访问宿主机的80端口时，就会被映射到容器的80，这样就能访问到`nginx`了

### 进入容器，修改文件

进入`Nginx`容器，修改HTML文件内容

#### 进入容器

进入容器。进入我们刚刚创建的`nginx`容器的命令为：

```sh
docker exec -it mn bash
```

命令解读：

- docker exec ：进入容器内部，执行一个命令

- -it : 给当前进入的容器创建一个标准输入、输出终端，允许我们与容器交互

- mn ：要进入的容器的名称

- bash：进入容器后执行的命令，bash是一个`linux`终端交互命令

![image-20220209173622179](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220209173622179.png?raw=true)

#### 进入nginx的HTML所在目录

进入`nginx`的HTML所在目录` /usr/share/nginx/html`

容器内部会模拟一个独立的Linux文件系统，看起来如同一个linux服务器一样：

![image-20220209173703581](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220209173703581.png?raw=true)

进入该目录：

```sh
cd /usr/share/nginx/html
```

 查看目录下文件：

![image-20220209173806978](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220209173806978.png?raw=true)

#### 修改index.html的内容

容器内没有vi命令，无法直接修改，我们用下面的命令来修改：

```sh
sed -i -e 's#Welcome to nginx#欢迎您#g' -e 's#<head>#<head><meta charset="utf-8">#g' index.html
```

在浏览器访问自己的虚拟机地址:

![image-20220209173903705](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220209173903705.png?raw=true)

## 数据卷（容器数据管理）

在修改docker容器内文件时，需要进入容器内部，并且因为没有编辑器，修改文件较为复杂，这是因为容器与数据耦合的原因，要解决这个问题就必须将数据与容器解耦，就需要使用数据卷。

### 什么是数据卷

**数据卷（volume）**是一个虚拟目录，指向宿主机文件系统中的某个目录。

一旦完成数据卷挂载，对容器的一切操作都会作用在数据卷对应的宿主机目录了。这样，我们操作宿主机的/var/lib/docker/volumes/html目录，就等于操作容器内的/usr/share/nginx/html目录了

### 数据集操作命令

数据卷操作的基本语法如下：

```sh
docker volume [COMMAND]
```

docker volume命令是数据卷操作，根据命令后跟随的command来确定下一步的操作：

- create 创建一个数据卷
- inspect 显示一个或多个数据卷的信息
- ls 列出所有的数据卷
- prune 删除未使用的数据卷
- rm 删除一个或多个指定的数据卷

### 创建和查看数据卷

1.创建数据卷

```sh
docker volume create html
```

2.查看所有数据

```sh
docker volume ls
```

结果：

![image-20220209174926816](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220209174926816.png?raw=true)

3.查看数据卷详细信息卷

```sh
docker volume inspect html
```

结果：

![image-20220209175013365](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220209175013365.png?raw=true)

可以看到，我们创建的html这个数据卷关联的宿主机目录为`/var/lib/docker/volumes/html/_data`目录。

### 挂载数据卷

我们在创建容器时，可以通过 -v 参数来挂载一个数据卷到某个容器内目录，命令格式如下：

```sh
docker run \
  --name mn \
  -v html:/root/html \
  -p 8080:80
  nginx \
```

这里的-v就是挂载数据卷的命令：

- `-v html:/root/html` ：把html数据卷挂载到容器内的/root/html这个目录中

### 给nginx挂载数据卷

#### 创建容器并挂载数据卷到容器内的HTML目录

-v 参数挂载数据卷

```sh
docker run --name mn -v html:/usr/share/nginx/html -p 80:80 -d nginx
```

![image-20220209175637470](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220209175637470.png?raw=true)

#### 进入html数据卷所在位置，并修改HTML内容

```sh
# 查看html数据卷的位置
docker volume inspect html
# 进入该目录
cd /var/lib/docker/volumes/html/_data
# 修改文件
vi index.html
```

![image-20220209175800798](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220209175800798.png?raw=true)

### 挂载本地目录

容器不仅仅可以挂载数据卷，也可以直接挂载到宿主机目录上。关联关系如下：

- 带数据卷模式：宿主机目录 --> 数据卷 ---> 容器内目录
- 直接挂载模式：宿主机目录 ---> 容器内目录

目录挂载与数据卷挂载的语法是类似的：

- -v [宿主机目录]:[容器内目录]
- -v [宿主机文件]:[容器内文件]

### 运行一个MySQL容器，将宿主机目录直接挂载到容器

```sh
docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -v /tmp/mysql/conf/hmy.cnf:/etc/mysql/conf.d/hmy.cnf -v /tmp/mysql/data:/var/lib/mysql -d mysql:5.7.25 
```

- -e 环境变量
- -p 端口

### 数据卷挂载与目录直接挂载区别

- 数据卷挂载耦合度低，由docker来管理目录，但是目录较深，不好找
- 目录挂载耦合度高，需要我们自己管理目录，不过目录容易寻找查看