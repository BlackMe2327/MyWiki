[toc]

# 1.sql语句的分类

1. 数据定义语言DDL（Data Ddefinition Language）CREATE，DROP，ALTER 主要为以上操作 即对逻辑结构等有操作的，其中包括表结构，视图和索引。
2. 数据查询语言DQL（Data Query Language）SELECT这个较为好理解 即查询操作，以select关键字。各种简单查询，连接查询等 都属于DQL。
3. 数据操纵语言DML（Data Manipulation Language）INSERT，UPDATE，DELETE
4. 数据控制功能DCL（Data Control Language）GRANT，REVOKE，COMMIT，ROLLBACK

# 2.超键、候选键、主键、外键

1. 超键：在关系中能唯一标识元组的属性集称为关系模式的超键。一个属性可以作为一个超键，多个属性组合在一起也可以作为一个超键。超键包含候选键和主键。
2. 候选键：是 小超键，即没有冗余元素的超键。
3. 主键：数据库表中对储存数据对象予以唯一和完整标识的数据列或属性的组合。一个数据列只能有一个主键，且主键的取值不能缺失，即不能为空值（Null）。
4. 外键：在一个表中存在的另一个表的主键称此表的外键。

# 3.SQL约束

1. NOT NULL: 用于控制字段的内容一定不能为空（NULL）。
2. UNIQUE: 控件字段内容不能重复，一个表允许有多个 Unique 约束。
3. PRIMARY KEY: 也是用于控件字段内容不能重复，但它在一个表只允许出现一个。
4. FOREIGN KEY: 用于预防破坏表之间连接的动作，也能防止非法数据插入外键列，因为它必须是它指向的那个表中的值之一。
5. CHECK: 用于控制字段的值范围。

# 4.关联查询

1. 内连接（INNER JOIN）
2. 外连接（LEFT JOIN/RIGHT JOIN）
3. 联合查询（UNION与UNION ALL）
4. 全连接（FULL JOIN）
5. 交叉连接（CROSS JOIN）

## 4.1.INNER JOIN

```sql
SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a INNER JOIN tcount_tbl b ON a.runoob_author = b.runoob_author;
/*以上sql等价于*/
SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a, tcount_tbl b WHERE a.runoob_author = b.runoob_author;
```

## 4.2.LEFT JOIN

LEFT JOIN 会读取左边数据表的全部数据，即便右边表无对应数据。

```sql
SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a LEFT JOIN tcount_tbl b ON a.runoob_author = b.runoob_author;
```

## 4.3.RIGHT JOIN

RIGHT JOIN 会读取右边数据表的全部数据，即便左边边表无对应数据。

```sql
SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a RIGHT JOIN tcount_tbl b ON a.runoob_author = b.runoob_author;
```

## 4.4.UNION 

联合查询的列数要相等，使用UNION 相同的记录行会合并

```sql
SELECT country FROM Websites
UNION
SELECT country FROM apps
ORDER BY country;
```

## 4.5.UNION ALL

联合查询的列数要相等，使用UNION ALL相同的记录行不会合并

```sql
SELECT country FROM Websites
UNION ALL
SELECT country FROM apps
ORDER BY country;
```

## 4.6.FULL JOIN

MySQL不支持全连接,可以使用LEFT JOIN 和UNION和RIGHT JOIN联合使用

```sql
SELECT * FROM A LEFT JOIN B ON A.id=B.id UNION SELECT * FROM A RIGHT JOIN B ON A.id=B.id
```

# 5.子查询

MySQL子查询称为内部查询，而包含子查询的查询称为外部查询。 子查询可以在使用表达式的任何地方使用，并且必须在括号中关闭。

## 5.1.MySQL子查询在WHERE子句中

### 5.1.1.MySQL子查询与比较运算符

```sql
SELECT
	customerNumber,
	checkNumber,
	amount 
FROM
	payments 
WHERE
	amount = ( SELECT MAX( amount ) FROM payments );
```

### 5.1.2.具有IN和NOT IN运算符的MySQL子查询

如果子查询返回多个值，则可以在`WHERE`子句中使用IN或NOT IN运算符等其他运算符

```sql
SELECT
	customerName 
FROM
	customers 
WHERE
	customerNumber NOT IN ( SELECT DISTINCT customerNumber FROM orders );
```

## 5.2.FROM子句中的MySQL子查询

在FROM子句中使用子查询时，从子查询返回的结果集将用作临时表。

```sql
SELECT
	MAX( items ),
	MIN( items ),
	FLOOR(
	AVG( items )) 
FROM
	( SELECT orderNumber, COUNT( orderNumber ) AS items FROM orderdetails GROUP BY orderNumber ) AS lineitems;
```

## 5.3.MySQL相关子查询

与独立子查询不同，相关子查询是使用外部查询中的数据的子查询。 换句话说，相关的子查询取决于外部查询。 对外部查询中的每一行对相关子查询进行一次评估。

```sql
SELECT
	productname,
	buyprice 
FROM
	products p1 
WHERE
	buyprice > ( SELECT AVG( buyprice ) FROM products WHERE productline = p1.productline );
```

## 5.4.MySQL子查询与EXISTS和NOT EXISTS

当子查询与`EXISTS`或`NOT EXISTS`运算符一起使用时，子查询返回一个布尔值为`TRUE`或`FALSE`的值。以下查询说明了与`EXISTS`运算符一起使用的子查询：

```sql
SELECT
	* 
FROM
	table_name 
WHERE
	EXISTS ( 子查询 );
```

