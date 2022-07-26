[toc]

# 1.什么是索引

索引是一种特殊的文件(InnoDB数据表上的索引是表空间的一个组成部分)，它们包含着对数据表里所有记录的引用指针。

索引是一种数据结构。数据库索引，是数据库管理系统中一个排序的数据结构，以协助快速查询、更新数据库表中数据。索引的实现通常使用B树及其变种B+树。

更通俗的说，索引就相当于目录。为了方便查找书中的内容，通过对内容建立索引形成目录。索引是一个文件，它是要占据物理空间的。

# 2.索引的使用场景

1. 当数据多且字段值有相同的值得时候用普通索引。

2. 当字段多且字段值没有重复的时候用唯一索引。

3. 当有多个字段名都经常被查询的话用复合索引。

4. 普通索引不支持空值，唯一索引支持空值。

5. 但是，若是这张表增删改多而查询较少的话，就不要创建索引了，因为如果你给一列创建了索引，那么对该列进行增删改的时候，都会先访问这一列的索引，

6. 若是增，则在这一列的索引内以新填入的这个字段名的值为名创建索引的子集，

7. 若是改，则会把原来的删掉，再添入一个以这个字段名的新值为名创建索引的子集，

8. 若是删，则会把索引中以这个字段为名的索引的子集删掉。

9. 索引会对增删改的执行减缓速度，

10. 索引，若是这张表增删改多而查询较少的话，就不要创建索引了。

11. 更新太频繁地字段不适合创建索引。

12. 不会出现在where条件中的字段不该建立索引。
13. orde by :使用orderby将查询结果按照某个字段排序时，如果该字段没有建立索引，那么执行计划会将查询出的所有数据使用外部排序（将数据从硬盘分批读取到内存使用内部排序，最后合并排序结果），这个操作是很影响性能的，因为需要将查询涉及到的所有数据从磁盘中读到内存（如果单条数据过大或者数据量过多都会降低效率），更无论读到内存之后的排序了。
14. join：对join语句匹配关系（on）涉及的字段建立索引能够提高效率
15. 索引覆盖：如果要查询的字段都建立过索引，那么引擎会直接在索引表中查询而不会访问原始数据（否则只要有一个字段没有建立索引就会做全表扫描），这叫索引覆盖。因此我们需要尽可能的在select后只写必要的查询字段，以增加索引覆盖的几率。

# 3.索引的缺点

1.虽然索引大大提高了查询速度，同时却会降低更新表的速度，如对表进行INSERT、UPDATE和DELETE。因为更新表时，MySQL不仅要保存数据，还要保存一索引文件。

2.建立索引会占用磁盘空间的索引文件。一般情况这个问题不太严重，但如果你在一个大表上创建了多种组合索引，索引文件会得膨胀很快。

# 4.索引的类型

1. 主键索引：数据列不允许重复，不允许为null,一个表只能有一个主键
2. 唯一索引：数据列不允许重复，允许为null值，一个表允许多个列创建唯一索引
   1. 单列唯一索引：alter table table_name add unique(column);
   2. 多列组合唯一索引：alter table table_name add unique(column1,column2);
3. 普通索引：基本的索引类型，没有唯一性的限制，允许为NULL值
   1. 单列普通索引：alter table table_name add index index_name(column);
   2. 多组合普通索引：alter table table_name add index index_name(column1,column2,column3);
4. 全文索引：MySQL全文索引一种特殊的索引，它会把某个数据表的某个数据列出现过的所有单词生成一份清单。只能在MyISAM数据表中创建。alter table tablename add fulltext(column1,column2);

# 5.索引的数据结构（B树，Hash）

​		索引的数据结构和具体存储引擎的实现有关，在MySQL中使用较多的索引有Hash索引，B+树索引等，而我们经常使用的InnoDB存储引擎的默认索引实现为：B+树索引。对于哈希索引来说，底层的数据结构就是哈希表，因此在绝大多数需求为单条记录查询的时候，可以选择哈希索引，查询性能快；其余大部分场景，建议选择BTree索引。

​		按照实现方式分，InnoDB的索引类型目前只有两种：BTREE（B树）索引和HASH索引。B树索引是Mysql数据库中使用频繁的索引类型，基本所有存储引擎都支持 BTree索引。通常我们说的索引不出意外指的就是（B树）索引（实际是用B+树实现的，因为在查看表索引时，mysql一律打印BTREE，所以简称为B树索引）

![image-20220326201536245](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220326201536245.png?raw=true)

**查询方式：**

- 主键索引区:PI(关联保存的时数据的地址)按主键查询,
- 普通索引区:si(关联的id的地址,然后再到达上面的地址)。所以按主键查询,速度快

**B+tree性质：**
1.）n棵子tree的节点包含n个关键字，不用来保存数据而是保存数据的索引。
2.）所有的叶子结点中包含了全部关键字的信息，及指向含这些关键字记录的指针，且叶子结点本身依关键字的大小自小而大顺序链接。
3.）所有的非终端结点可以看成是索引部分，结点中仅含其子树中的大（或小）关键字。
4.）B+树中，数据对象的插入和删除仅在叶节点上进行。
5.）B+树有2个头指针，一个是树的根节点，一个是小关键码的叶节点。

**哈希索引：**

mysql中用哈希索引时，主要就是通过Hash算法（常见的Hash算法有直接定址法、平方取中法、折叠法、除数取余法、随机数法），将数据库字段数据转换成定长的Hash值，与这条数据的行指针一并存入Hash表的对应位置；如果发生Hash碰撞（两个不同关键字的Hash值相同），则在对应Hash键下以链表形式存储。

# 6.索引的基本原理

索引用来快速地寻找那些具有特定值的记录。如果没有索引，一般来说执行查询时遍历整张表。索引的原理很简单，就是把无序的数据变成有序的查询
1. 把创建了索引的列的内容进行排序
2. 对排序结果生成倒排表
3. 在倒排表内容上拼上数据地址链
4. 在查询的时候，先拿到倒排表内容，再取出数据地址链，从而拿到具体数据

# 7.索引的算法

索引算法有BTree算法和Hash算法

**BTree算法**

​		BTree是常用的mysql数据库索引算法，也是mysql默认的算法。因为它不仅可以被用在=,>,>=,<,<=和between这些比较操作符上，而且还可以用于like操作符，只要它的查询条件是一个不以通配符开头的常量，例如：

```sql
/*只要它的查询条件是一个不以通配符开头的常量*/
select * from user where name like 'jack%';
/*如果以通配符开头，或者没有使用常量，则不会使用索引，例如：*/
4 select * from user where name like '%jack';
```

**Hash算法**

​		Hash索引只能用于对等比较，例如=,<=>（相当于=）操作符。由于是一次定位数据，不像BTree索引需要从根节点到枝节点，后才能访问到页节点这样多次IO访问，所以检索效率远高于BTree索引。

# 8.索引设计的原则

1. 适合索引的列是出现在where子句中的列，或者连接子句中指定的列
2. 基数较小的类，缩阴效果较差，没有必要在此列建立索引
3. 使用短索引，如果堆场子古川进行索引，应该指定一个前缀长度，这样能够节省大量索引空间
4. 不要过度索引。索引需要额外的磁盘空间，并降低写操作的性能。在修改表内容的时候，索引会进行更新甚至重构，索引列越多，这个时间就会越长。所以只保持需要的索引有利于查询即可

# 9.创建索引的原则

1. 左前缀匹配原则，组合索引非常重要的原则，mysql会一直向右匹配直到遇到范围查询（>、<、between、like）就停止匹配，比如a=1 and b=2 and c>3 and d=4 如果建立(a,b,c,d)顺序的索引，d是用不到索引的，如果建立(a,b,d,c)的索引则都可以用到，a,b,d的顺序可以任意调整。

2. 较频繁作为查询条件的字段才去创建索引

3. 更新频繁的字段不适合创建索引

   若是不能有效区分数据的列不适合做索引列（如：性别，男女未知，区分度太低）

4. 尽量的扩展索引，不要新建索引。比如表中已经有a的索引，现在要添加（a,b）的索引，那么只需要修改原来的索引即可

5. 定义有外键的数据列一定要建立索引

6. 对于那些查询中很少涉及到的列，重复值比较多的列不要建立索引

7. 对于定义为text、image、bit的数据类型的列不要建立索引

# 10.创建索引的三种方式

## 10.1.在执行create table 时创建索引

```sql
CREATE TABLE user_index2 (
	id INT auto_increment PRIMARY KEY,
	first_name VARCHAR ( 16 ),
	last_name VARCHAR ( 16 ),
	id_card VARCHAR ( 18 ),
	information text,
	KEY NAME ( first_name, last_name ),
	FULLTEXT KEY ( information ),
UNIQUE KEY ( id_card ) 
);
```

## 10.2.使用alter table命令去增加索引

```sql
ALTER TABLE table_name ADD INDEX index_name ( column_list );
```

ALTERTABLE用来创建普通索引、UNIQUE索引或PRIMARYKEY索引。

table_name是要增加索引的表名

column_list指出对哪些列进行索引，多列时各列之间用逗号分隔。

## 10.3.使用 create index命令创建

```sql
CREATE INDEX index_name ON table_name(column_list);
```

CREATEINDEX可对表增加普通索引或UNIQUE索引。（但是，不能创建PRIMARYKEY索引）

# 11.删除索引的方式

## 11.1.根据索引名删除普通索引、唯一索引、全文索引

```sql
alter table user_index drop KEY name;
alter table user_index drop KEY id_card;
alter table user_index drop KEY information;
```

## 11.2.删除主键索引

```sql
alter table user_index drop primary key;
```

如果主键自增长，那么不能直接执行此操作（自增长依赖于主键索引）：

需要取消自增长再行删除：

```sql
ALTER TABLE user_index MODIFY id INT,/* 【重新定义列类型】*/
alter table user_index drop primary key;
```

但通常不会删除主键，因为设计主键一定与业务逻辑无关。

# 12.百万级别或以上的数据如何删除

MySQL官方手册得知删除数据的时间和创建的索引数量是成正比的。索引越多删除数据所需要的时间越久

1. 所以我们想要删除百万数据的时候可以先删除索引
2. 然后删除其中无用的数据
3. 删除完成后重新创建索引

# 13.前缀索引

语法：index(field(10))，使用字段值的前10个字符建立索引，默认是使用字段的全部内容建立索引。

```sql
ALTER TABLE table_name ADD KEY(column_name(prefix_length));
```

前提：前缀的标识度高。比如密码就适合建立前缀索引，因为密码几乎各不相同。

实操的难度：在于前缀截取的长度通过从调整prefixLen的值（从1自增）查看不同前缀长度的一个平均匹配度，接近1时就可以了

```sql
select 1.0*count(distinct left(password,prefixLen))/count(*) from table_name;
/*示例：从1开始不断调整prefixLen的值直到结果接近1，然后再去创建前缀索引*/
select 1.0*count(distinct left('pic',9))/count(*) from tb_hotel
ALTER TABLE tb_hotel ADD KEY(pic(9));
```



# 14.最左前缀原则

​		在创建多列索引时，要根据业务需求，where子句中使用最频繁的一列放在最左边。

​		最左前缀匹配原则，非常重要的原则，mysql会一直向右匹配直到遇到范围查询(>、<、between、like)就停止匹配，比如a=1 and b=2 and c>3 and d=4如果建立(a,b,c,d)顺序的索引，d是用不到索引的，如果建立(a,b,d,c)的索引则都可以用到，a,b,d的顺序可以任意调整。

​		=和in可以乱序，比如a=1andb=2andc=3建立(a,b,c)索引可以任意顺序，mysql的查询优化器会帮你优化成索引可以识别的形式

# 15.B+树的好处

​		由于B+树的内部节点只存放键，不存放值，因此，一次读取，可以在内存页中获取更多的键，有利于更快地缩小查找范围。B+树的叶节点由一条链相连，因此，当需要进行一次全数据遍历的时候，B+树只需要使用O(logN)时间找到最小的一个节点，然后通过链进行O(N)的顺序遍历即可。而B树则需要对树的每一层进行遍历，这会需要更多的内存置换次数，因此也就需要花费更多的时间

# 16.Hash索引和B+树索引所有有什么区别

**底层原理上的区别**

​		hash索引底层就是hash表，进行查找时，调用一次hash函数就可以获取到相应的键值，之后进行回表查询获得实际数据。B+树底层实现是多路平衡查找树。对于每一次的查询都是从根节点出发，查找到叶子节点方可以获得所查键值，然后根据查询判断是否需要回表查询数据。

**查询方式的不同**

- hash索引进行等值查询更快(一般情况下)，但是却无法进行范围查询。因为在hash索引中经过hash函数建立索引之后，索引的顺序与原顺序无法保持一致，不能支持范围查询。而B+树的的所有节点皆遵循(左节点小于父节点，右节点大于父节点，多叉树也类似)，天然支持范围查询。
- hash索引不支持使用索引进行排序
- hash索引不支持模糊查询以及多列索引的最左前缀匹配。
- hash索引任何时候都避免不了回表查询数据，而B+树在符合某些条件(聚簇索引，覆盖索引等)的时候可以只通过索引完成查询。
- hash索引虽然在等值查询上较快，但是不稳定。性能不可预测，当某个键值存在大量重复的时候，发生hash碰撞，此时效率可能极差。而B+树的查询效率比较稳定，对于所有的查询都是从根节点到叶子节点，且树的高度较低。因此，在大多数情况下，直接选择B+树索引可以获得稳定且较好的查询速度。而不需要使用hash索引。

# 17.数据库为什么使用B+树而不是B树

B树只适合随机检索，而B+树同时支持随机检索和顺序检索；

1.B+树空间利用率更高，可减少I/O次数，磁盘读写代价更低。

>一般来说，索引本身也很大，不可能全部存储在内存中，因此索引往往以索引文件的形式存储的磁盘上。这样的话，索引查找过程中就要产生磁盘I/O消耗。B+树的内部结点并没有指向关键字具体信息的指针，只是作为索引使用，其内部结点比B树小，盘块能容纳的结点中关键字数量更多，一次性读入内存中可以查找的关键字也就越多，相对的，IO读写次数也就降低了。而IO读写次数是影响索引检索效率的最大因素；

2.B+树的查询效率更加稳定。

>B树搜索有可能会在非叶子结点结束，越靠近根节点的记录查找时间越短，只要找到关键字即可确定记录的存在，其性能等价于在关键字全集内做一次二分查找。而在B+树中，顺序检索比较明显，随机检索时，任何关键字的查找都必须走一条从根节点到叶节点的路，所有关键字的查找路径长度相同，导致每一个关键字的查询效率相当。

3.B树在提高了磁盘IO性能的同时并没有解决元素遍历的效率低下的问题。

>B+树的叶子节点使用指针顺序连接在一起，只要遍历叶子节点就可以实现整棵树的遍历。而且在数据库中基于范围的查询是非常频繁的，而B树不支持这样的操作。

4.B+树增删文件（节点）时，效率更高

>因为B+树的叶子节点包含所有关键字，并以有序的链表结构存储，这样可很好提高增删效率。

# 18.聚簇索引

聚簇索引：将数据存储与索引放到了一块，找到索引也就找到了数据

非聚簇索引：将数据存储于索引分开结构，索引结构的叶子节点指向了数据的对应行，myisam通过key_buffer把索引先缓存到内存中，当需要访问数据时（通过索引访问数据），在内存中直接搜索索引，然后通过索引找到磁盘相应数据，这也就是为什么索引不在key buffer命中时，速度慢的原因

>innodb中，在聚簇索引之上创建的索引称之为辅助索引，辅助索引访问数据总是需要二次查找，非聚簇索引都是辅助索引，像复合索引、前缀索引、唯一索引，辅助索引叶子节点存储的不再是行的物理位置，而是主键值

**何时使用聚簇索引与非聚簇索引**

| 动作               | 使用聚簇索引 | 使用非聚簇索引 |
| ------------------ | ------------ | -------------- |
| 列经常被分组排序   | 应该         | 应该           |
| 返回某范围内的数据 | 应该         | 不应该         |
| 一个或极少不同值   | 不应该       | 不应该         |
| 小数目的不同值     | 应该         | 不应该         |
| 大数目的不同值     | 不应该       | 应该           |
| 频繁更新的列       | 不应该       | 应该           |
| 外键列             | 应该         | 应该           |
| 主键列             | 应该         | 应该           |
| 频繁修改索引列     | 不应该       | 应该           |

> 非聚簇索引不一定会回表查询，举个简单的例子，假设我们在员工表的年龄上建立了索引，那么当进行select age from employee where age < 20的查询时，在索引的叶子节点上，已经包含了age信息，不会再次进行回表查询。

# 19.联合索引

MySQL可以使用多个字段同时建立一个索引，叫做联合索引。在联合索引中，如果想要命中索引，需要按照建立索引时的字段顺序挨个使用，否则无法命中索引。

具体原因为:
MySQL使用索引时需要索引有序，假设现在建立了"name，age，school"的联合索引，那么索引的排序为: 先按照name排序，如果name相同，则按照age排序，如果age的值也相等，则按照school进行排序。

当进行查询时，此时索引仅仅按照name严格有序，因此必须首先使用name字段进行等值查询，之后对于匹配到的列而言，其按照age字段严格有序，此时可以使用age字段用做索引查找，以此类推。因此在建立联合索引的时候应该注意索引列的顺序，一般情况下，将查询需求频繁或者字段选择性高的列放在前面。此外可以根据特例的查询或者表结构进行单独的调整。