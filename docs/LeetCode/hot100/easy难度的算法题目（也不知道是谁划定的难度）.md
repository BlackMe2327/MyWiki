# LeetCode_hot_100-Easy难度的题目

> 也不知道谁划定的难度，我乌鸡鲅鱼呀，一脸懵逼呀。。。。。。

## 两数之和(1)

### 题目

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** *`target`* 的那 **两个** 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

**示例 1：**

```
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

**示例 2：**

```
输入：nums = [3,2,4], target = 6
输出：[1,2]
```

**示例 3：**

```
输入：nums = [3,3], target = 6
输出：[0,1]
```

**提示：**

- `2 <= nums.length <= 104`
- `-109 <= nums[i] <= 109`
- `-109 <= target <= 109`
- **只会存在一个有效答案**

**进阶：**你可以想出一个时间复杂度小于 `O(n2)` 的算法吗？

Related Topics

- 数组
- 哈希表

### 解法

#### 方法一

```java
public int[] twoSum(int[] nums, int target) {
    for(int i=0;i<nums.length-1;i++){
        for(int j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return new int[]{i,j};
            }
        }
    }
    return new int[0];
}
```

#### 方法二

```java
//利用哈希表来降低时间复杂度
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> temp = new HashMap<Integer, Integer>();
    for (int i = 0; i < nums.length; ++i) {
        if (temp.containsKey(target - nums[i])) {
            return new int[]{temp.get(target - nums[i]), i};
        }
        temp.put(nums[i], i);
    }
    return new int[0];
}
```

### 思路梳理

**方法一：**暴力解法，无话可说

**方法二：**

1. put(key,value),首先是对 key做了 hash（）运算，即 每一个key 在 put 的时候位置是固定的，只要不做扩容，或者缩容，key 在数组的位置就是固定的。所以通过key 的hash 得到数组下标，最终实现 O(1) 的时间复杂度.
2. 思路就是，以元素值为key，以下标为value,判断target-nums[i]的结果是否在tmp中已经存在，如果存在则说明符合结果,返回这个结果值所在的数组下标和当前遍历到的数组下标

## 回文数（9）

### 题目

给你一个整数 `x` ，如果 `x` 是一个回文整数，返回 `true` ；否则，返回 `false` 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

- 例如，`121` 是回文，而 `123` 不是。

**示例 1：**

```
输入：x = 121
输出：true
```

**示例 2：**

```
输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```

**示例 3：**

```
输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
```

**提示：**

- `-231 <= x <= 231 - 1`

**进阶：**你能不将整数转为字符串来解决这个问题吗？

Related Topics

- 数学

### 解法

#### 方法一

```java
public boolean isPalindrome(int x) {
    if (x < 0) {
        return false;
    }
    StringBuffer sb = new StringBuffer(String.valueOf(x));
    StringBuffer re = sb.reverse();
    if (re.toString().equals(String.valueOf(x))) {
        return true;
    }
    return false;
}
```

#### 方法二

```java
public boolean isPalindrome(int x) {
    //不将整数转为字符串来解决这个问题
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    int revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x /= 10;
    }
    // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
    // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
    // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
    return x == revertedNumber || x == revertedNumber / 10;
}
```

### 思路梳理

**方法一：**使用了StringBuffer的reverse函数直接将字符串反转，然后再与原字符串进行比较

**方法二：**

- 对于数字 1221，如果执行 1221 % 10，我们将得到最后一位数字 1，要得到倒数第二位数字，我们可以先通过除以 10 把最后一位数字从 1221 中移除，1221 / 10 = 122，再求出上一步结果除以 10 的余数，122 % 10 = 2，就可以得到倒数第二位数字。如果我们把最后一位数字乘以 10，再加上倒数第二位数字，1 * 10 + 2 = 12，就得到了我们想要的反转后的数字。如果继续这个过程，我们将得到更多位数的反转数字。
- 由于整个过程我们不断将原始数字除以 10，然后给反转后的数字乘上 10，所以，当原始数字小于或等于反转后的数字时，就意味着我们已经处理了一半位数的数字了。


![image-20220313145648562](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220313145648562.png?raw=true)

## 罗马数字转整数（13）

### 题目

罗马数字包含以下七种字符: `I`， `V`， `X`， `L`，`C`，`D` 和 `M`。

```
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

例如， 罗马数字 `2` 写做 `II` ，即为两个并列的 1 。`12` 写做 `XII` ，即为 `X` + `II` 。 `27` 写做 `XXVII`, 即为 `XX` + `V` + `II` 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 `IIII`，而是 `IV`。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 `IX`。这个特殊的规则只适用于以下六种情况：

- `I` 可以放在 `V` (5) 和 `X` (10) 的左边，来表示 4 和 9。
- `X` 可以放在 `L` (50) 和 `C` (100) 的左边，来表示 40 和 90。
- `C` 可以放在 `D` (500) 和 `M` (1000) 的左边，来表示 400 和 900。

给定一个罗马数字，将其转换成整数。

**示例 1:**

```
输入: s = "III"
输出: 3
```

**示例 2:**

```
输入: s = "IV"
输出: 4
```

**示例 3:**

```
输入: s = "IX"
输出: 9
```

**示例 4:**

```
输入: s = "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
```

**示例 5:**

```
输入: s = "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```

**提示：**

- `1 <= s.length <= 15`
- `s` 仅含字符 `('I', 'V', 'X', 'L', 'C', 'D', 'M')`
- 题目数据保证 `s` 是一个有效的罗马数字，且表示整数在范围 `[1, 3999]` 内
- 题目所给测试用例皆符合罗马数字书写规则，不会出现跨位等情况。
- IL 和 IM 这样的例子并不符合题目要求，49 应该写作 XLIX，999 应该写作 CMXCIX 。
- 关于罗马数字的详尽书写规则，可以参考 [罗马数字 - Mathematics ](https://b2b.partcommunity.com/community/knowledge/zh_CN/detail/10753/罗马数字#knowledge_article)。

Related Topics

- 哈希表
- 数学
- 字符串

### 解法

```java
 //把一个小值放在大值的左边，就是做减法，否则为加法
public int romanToInt(String s) {
    int sum = 0;
    int preNum = getValue(s.charAt(0));
    for(int i = 1;i < s.length(); i ++) {
        int num = getValue(s.charAt(i));
        if(preNum < num) {
            sum -= preNum;
        } else {
            sum += preNum;
        }
        preNum = num;
    }
    sum += preNum;
    return sum;
}

private int getValue(char ch) {
    switch(ch) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
}
```

### 思路梳理

1. 创建一个getVlaue(char ch)方法来获取罗马字母所代表的数值
2. 当小值在大值左边时，我们让sum=sum-preNum,当小值在大值右边我们让sum=sum+preNum
3. 每执行一次循环，都让preNum等于当前循环的元素
4. 循环完毕后再把最后一位罗马字母所代表的数值累加到sum中

## 最长公共前缀(14)

### 题目

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 `""`。

**示例 1：**

```
输入：strs = ["flower","flow","flight"]
输出："fl"
```

**示例 2：**

```
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```

**提示：**

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` 仅由小写英文字母组成

Related Topics

- 字符串

### 解法

```java
public String longestCommonPrefix(String[] strs) {
    //数组长度为0或者为空直接返回空字符串
    if (strs.length == 0 || strs == null) return "";
    //以第一个字符串作为假设的公共前后缀
    String res = strs[0];
    int i = 1;
    //数组中所有元素都进行比较
    while (i < strs.length) {
        //res和strs[i]不相等时strs[i].indexOf(res)会返回-1
        while (strs[i].indexOf(res) != 0) {
            //因为res和strs[i]不相等说明res不是他们两得公共前缀，切割res割掉最后一位，再次判断
            res = res.substring(0, res.length() - 1);
        }
        i++;
    }
    //数组中只有一个元素的时候返回该元素即可
    return res;
}
```

### 思路梳理

- 利用了indexof函数，indexof函数的使用方式如下，看完这个方法的使用可以更好的理解上面的代码

```java
public static void main(String[] args) {
    String s1="flower",s2="flow";
    System.out.println(s2.indexOf(s1));
    s1="flowe";s2="flow";
    System.out.println(s2.indexOf(s1));
    s1="flow";s2="flow";
    System.out.println(s2.indexOf(s1));
}
```

输出：

```java
-1
-1
0
```

## 有效的括号（20）

### 题目

给定一个只包括 `'('`，`')'`，`'{'`，`'}'`，`'['`，`']'` 的字符串 `s` ，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

**示例 1：**

```
输入：s = "()"
输出：true
```

**示例 2：**

```
输入：s = "()[]{}"
输出：true
```

**示例 3：**

```
输入：s = "(]"
输出：false
```

**示例 4：**

```
输入：s = "([)]"
输出：false
```

**示例 5：**

```
输入：s = "{[]}"
输出：true
```

**提示：**

- `1 <= s.length <= 104`
- `s` 仅由括号 `'()[]{}'` 组成

Related Topics

- 栈
- 字符串

### 解法

```java
 public boolean isValid(String s) {
     //长度为奇数和字符串为null的情况直接返回false
     if (s.length() % 2 != 0 || s.isEmpty()) return false;
     Stack<Character> stack = new Stack<>();
     for (int i = 0; i < s.length(); i++) {
         char c = s.charAt(i);
         if (c == '(' || c == '[' || c == '{') {
             //让左括号入栈
             stack.push(c);
         } else if (stack.isEmpty()) {
             //当判断第一个字符就不是左括号时，字符串绝对不符合有效括号的匹配
             return false;
         } else if (c == ')' && stack.pop() != '(' || c == ']' && stack.pop() != '[' || c == '}' && stack.pop() != '{') {
             //当匹配到右括号时，判断栈顶元素是否与当前右括号匹配，不匹配则整个字符串不是有效的括号
             return false;
         }
     }
     //如果出现"(("这种说明栈不为空,匹配失败,栈为空则说明完全匹配
     return stack.isEmpty();
 }
```

### 思路梳理

- 所给字符串为奇数长度时括号肯定不匹配
- 当出现"))"这种情况说明栈中为空，则直接返回false
- 每匹配到一个右括号就要判断栈顶元素是否与当前元素组成有效的括号，若不是直接返回false
- 当所有字符都进行匹配后，栈中如果还有元素，也就是还有左括号没有匹配成功，则匹配失败，返回false

## 合并两个有序链表（21）

### 题目

将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

**ListNode定义：**

```java
public class ListNode {
 int val;
 ListNode next;
 ListNode() {}
 ListNode(int val) { this.val = val; }
 ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 }
```

**示例 1：**

![image-20220313151905365](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220313151905365.png?raw=true)

```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

**示例 2：**

```
输入：l1 = [], l2 = []
输出：[]
```

**示例 3：**

```
输入：l1 = [], l2 = [0]
输出：[0]
```

**提示：**

- 两个链表的节点数目范围是 `[0, 50]`
- `-100 <= Node.val <= 100`
- `l1` 和 `l2` 均按 **非递减顺序** 排列

Related Topics

- 递归
- 链表

### 解法

#### 方法一：递归

```java
public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    if (list1 == null) {
        return list2;
    } else if (list2 == null) {
        return list1;
    } else if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}
```

#### 方法二：迭代

```java
public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    //哨兵结点
    ListNode prehead = new ListNode(-1);
    //指针初始化指向哨兵结点prehead
    ListNode prev = prehead;
    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            //指针指向list1节点
            prev.next = list1;
            list1 = list1.next;
        } else {
            //指针指向list2节点
            prev.next = list2;
            list2 = list2.next;
        }
        //每次操作后指针后移一位
        prev = prev.next;
    }
    // 合并后 list1 和 list2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    prev.next = list1 == null ? list2 : list1;
    return prehead.next;
}
```

### 思路梳理

****

**方法一：**

- 如果两个链表中有一个为空，我们直接返回非空链表即可
- 比较连个链表的头结点谁更小，然后递归决定下一个添加到结果里的结点

**方法二：**

- 设置一个哨兵结点prehead，作为合并后的链表返回
- 当list1结点值小于等于list2结点值时，把prev指针指向list1,并且调整list1的next指针，否则把prev指针指向list2,并且调整list2的next指针
- 每次判断后都需要将prev指针后移一位
- 循环终止后list1和list2至少有一个是非空的，由于输入的链表是有序的,所以我们只需要将剩余的非空链表合并到结果中即可

## 删除有序数组中的重复项（26）

### 题目

给你一个 **升序排列** 的数组 `nums` ，请你**[ 原地](http://baike.baidu.com/item/原地算法)** 删除重复出现的元素，使每个元素 **只出现一次** ，返回删除后数组的新长度。元素的 **相对顺序** 应该保持 **一致** 。

由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 `k` 个元素，那么 `nums` 的前 `k` 个元素应该保存最终结果。

将最终结果插入 `nums` 的前 `k` 个位置后返回 `k` 。

不要使用额外的空间，你必须在 **[原地 ](https://baike.baidu.com/item/原地算法)修改输入数组** 并在使用 O(1) 额外空间的条件下完成。

**判题标准:**

系统会用下面的代码来测试你的题解:

```
int[] nums = [...]; // 输入数组
int[] expectedNums = [...]; // 长度正确的期望答案

int k = removeDuplicates(nums); // 调用

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

如果所有断言都通过，那么您的题解将被 **通过**。

**示例 1：**

```
输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
```

**示例 2：**

```
输入：nums = [0,0,1,1,1,2,2,3,3,4]
输出：5, nums = [0,1,2,3,4]
解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。
```

**提示：**

- `0 <= nums.length <= 3 * 104`
- `-104 <= nums[i] <= 104`
- `nums` 已按 **升序** 排列

Related Topics

- 数组
- 双指针

### 解法

```java
//由于题干给的数字是 “升序数组” 所以只要相邻元素不相同则可将结果的长度加1
public int removeDuplicates(int[] nums) {
    //数组长度为0直接返回
    if(nums.length==0) return 0;
    //fast用来遍历数组，slow用来记录不重复元素的个数
    int fast=1,slow=1;
    while(fast<nums.length){
        if(nums[fast]!=nums[fast-1]){
            //判断元素前一个与当前元素是否相等，不相等则将fast所在元素赋值给slow所在位置，并且slow++
            nums[slow]=nums[fast];
            slow++;
        }
        //每循环一次fast后移一位
        fast++;
    }
    return slow;
}
```

### 思路梳理

- 题干要求原地去重，也就是不能申请新的空间
- 定义两个指针一个用来遍历，一个用来记录不重复元素的个数

## 移除元素（27）

### 题目

给你一个数组 `nums` 和一个值 `val`，你需要 **[原地](https://baike.baidu.com/item/原地算法)** 移除所有数值等于 `val` 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 `O(1)` 额外空间并 **[原地 ](https://baike.baidu.com/item/原地算法)修改输入数组**。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

**说明:**

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以**「引用」**方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

```
// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
```

**示例 1：**

```
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
```

**示例 2：**

```
输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,4,0,3]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
```

**提示：**

- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`

Related Topics

- 数组
- 双指针

### 解法

```java
public int removeElement(int[] nums, int val) {
    int left = 0;
    int right = nums.length;
    while (left < right) {
        if (nums[left] == val) {
            //如果left所在元素与val相等则将reight-1所在元素赋值给left位置，再做下次比较
            nums[left] = nums[right - 1];
            right--;
        } else {
            //如果left所在元素与val不相等，则证明此元素在结果中需要保留，将left向后移动一位即可
            left++;
        }
    }
    //最后left得值即是保留结果后的数组长度
    return left;
}
```

### 思路梳理

- 从数组中移除目标值，原地实现，我们可以定义连个指针一个指向数组起点，一个指向数组末尾
- 如果left所在元素与目标值相等则把right所在的元素赋值给left位置
- 如果left所在元素与目标值不相等则说明此元素需要保留到结果中，直接将left后移一位进行下一次比较即可

## 实现setstr()(28)

### 题目

实现 [strStr()](https://baike.baidu.com/item/strstr/811469) 函数。

给你两个字符串 `haystack` 和 `needle` ，请你在 `haystack` 字符串中找出 `needle` 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回 `-1` 。

**说明：**

当 `needle` 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 `needle` 是空字符串时我们应当返回 0 。这与 C 语言的 [strstr()](https://baike.baidu.com/item/strstr/811469) 以及 Java 的 [indexOf()](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)) 定义相符。



**示例 1：**

```
输入：haystack = "hello", needle = "ll"
输出：2
```

**示例 2：**

```
输入：haystack = "aaaaa", needle = "bba"
输出：-1
```

**示例 3：**

```
输入：haystack = "", needle = ""
输出：0
```



**提示：**

- `0 <= haystack.length, needle.length <= 5 * 104`
- `haystack` 和 `needle` 仅由小写英文字符组成

Related Topics

- 双指针
- 字符串
- 字符串匹配

### 解法

```java
public int strStr(String haystack, String needle) {
    //暴力解法
    int n = haystack.length(), m = needle.length();
    //长度不可超过原来的字符串
    for (int i = 0; i + m <= n; i++) {
        boolean flag = true;
        for (int j = 0; j < m; j++) {
            //原始串的字符逐个与子串的字符比较
            if (haystack.charAt(i + j) != needle.charAt(j)) {
                flag = false;
                break;
            }
        }
        if (flag) {
            //在上面的循环中，匹配到了符合的
            return i;
        }
    }
    return -1;
    //不讲码德的写法如下，保护头发
    //return haystack.indexOf(needle);
}
```

## 搜索插入位置（35）

### 题目

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 `O(log n)` 的算法。

**示例 1:**

```
输入: nums = [1,3,5,6], target = 5
输出: 2
```

**示例 2:**

```
输入: nums = [1,3,5,6], target = 2
输出: 1
```

**示例 3:**

```
输入: nums = [1,3,5,6], target = 7
输出: 4
```

**示例 4:**

```
输入: nums = [1,3,5,6], target = 0
输出: 0
```

**示例 5:**

```
输入: nums = [1], target = 0
输出: 0
```

**提示:**

- `1 <= nums.length <= 104`
- `-104 <= nums[i] <= 104`
- `nums` 为**无重复元素**的**升序**排列数组
- `-104 <= target <= 104`

Related Topics

- 数组
- 二分查找

### 解法

**方法一：**

```java
//暴力解法
public int searchInsert(int[] nums, int target) {
    for (int i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
}
```

**方法二：**

```java
//二分法
public int searchInsert(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while(l <=r)
    {
        int mid = l + (right - left) / 2;
        if (nums[mid] < target)
            left = mid++;
        else right = mid--;
    }
    return left;
}
```

## 最大字数组和（53）

### 题目

给你一个整数数组 `nums` ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

**子数组** 是数组中的一个连续部分。

**示例 1：**

```
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
```

**示例 2：**

```
输入：nums = [1]
输出：1
```

**示例 3：**

```
输入：nums = [5,4,-1,7,8]
输出：23
```

**提示：**

- `1 <= nums.length <= 105`
- `-104 <= nums[i] <= 104`



**进阶：**如果你已经实现复杂度为 `O(n)` 的解法，尝试使用更为精妙的 **分治法** 求解。

Related Topics

- 数组
- 分治
- 动态规划

### 解法

**方法一**

```java
//暴力法
public int maxSubArray(int[] nums) {
    int result=0;
    for (int i = 0; i < nums.length; i++) {
        int sum=0;
        for (int j = i; j < nums.length; j++) {
            sum=sum+nums[j];
            result=Math.max(result,sum);
        }
    }
    return result;
}
```

**方法二**

```java
//动态规划
public int maxSubArray(int[] nums) {
    int pre = 0, maxAns = nums[0];
    for (int x : nums) {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    }
    return maxAns;
}
```

### 思路梳理

**方法二**

- 若前一个元素大于0，则将其加到当前元素上
- 最后找到数组中最大的元素即是结果

## 最后一个单词的长度（58）

### 题目

给你一个字符串 `s`，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 **最后一个** 单词的长度。

**单词** 是指仅由字母组成、不包含任何空格字符的最大子字符串。

**示例 1：**

```
输入：s = "Hello World"
输出：5
解释：最后一个单词是“World”，长度为5。
```

**示例 2：**

```
输入：s = "   fly me   to   the moon  "
输出：4
解释：最后一个单词是“moon”，长度为4。
```

**示例 3：**

```
输入：s = "luffy is still joyboy"
输出：6
解释：最后一个单词是长度为6的“joyboy”。
```

**提示：**

- `1 <= s.length <= 104`
- `s` 仅有英文字母和空格 `' '` 组成
- `s` 中至少存在一个单词

Related Topics

- 字符串

### 解法

**方法一**

```java
//反向遍历
public int lengthOfLastWord(String s) {
    int index = s.length() - 1;
    while (s.charAt(index) == ' ') {
        index--;
    }
    int wordLength = 0;
    while (index >= 0 && s.charAt(index) != ' ') {
        wordLength++;
        index--;
    }
    return wordLength;
}
```

**方法二**

```java
public int lengthOfLastWord(String s) {
    String[] res = s.split(" ", 0);
    return res[res.length - 1].length();
}
```

![image-20220318143810858](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220318143810858.png?raw=true)

### 思路梳理

**方法一**

- 要求得到最后一个单词的长度，采用反向遍历
- 字符串中至少存在一个单词，因此字符串中一定有字母。首先找到字符串中的最后一个字母，该字母即为最后一个单词的最后一个字母。
- 从最后一个字母开始继续反向遍历字符串，直到遇到空格或者到达字符串的起始位置。遍历到的每个字母都是最后一个单词中的字母，因此遍历到的字母数量即为最后一个单词的长度。


## 加一（66）

### 题目

给定一个由 **整数** 组成的 **非空** 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储**单个**数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

**示例 1：**

```
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
```

**示例 2：**

```
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
```

**示例 3：**

```
输入：digits = [0]
输出：[1]
```

**提示：**

- `1 <= digits.length <= 100`
- `0 <= digits[i] <= 9`

Related Topics

- 数组
- 数学

### 解法

```java
public int[] plusOne(int[] digits) {
    for (int i = digits.length - 1; i >= 0; i--) {
        if (digits[i] == 9) {
            digits[i] = 0;
        } else {
            digits[i] += 1;
            return digits;
        }

    }
    //如果所有位都是进位，则长度+1
    digits= new int[digits.length + 1];
    digits[0] = 1;
    return digits;
}
```

### 思路梳理

- 如果digits 的末尾没有 99，例如 [1, 2, 3][1,2,3]，那么我们直接将末尾的数加一，得到 [1, 2, 4][1,2,4] 并返回；

- 如果digits 的末尾有若干个 99，例如 [1, 2, 3, 9, 9][1,2,3,9,9]，那么我们只需要找出从末尾开始的第一个不为 99 的元素，即 33，将该元素加一，得到 [1, 2, 4, 9, 9][1,2,4,9,9]。随后将末尾的 99 全部置零，得到 [1, 2, 4, 0, 0][1,2,4,0,0] 并返回。

- 如果digits 的所有元素都是 99，例如 [9, 9, 9, 9, 9][9,9,9,9,9]，那么答案为 [1, 0, 0, 0, 0, 0][1,0,0,0,0,0]。我们只需要构造一个长度比 digits 多 11 的新数组，将首元素置为 11，其余元素置为 00 即可。


## 二进制求和（67）

### 题目

给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 **非空** 字符串且只包含数字 `1` 和 `0`。

**示例 1:**

```
输入: a = "11", b = "1"
输出: "100"
```

**示例 2:**

```
输入: a = "1010", b = "1011"
输出: "10101"
```

**提示：**

- 每个字符串仅由字符 `'0'` 或 `'1'` 组成。
- `1 <= a.length, b.length <= 10^4`
- 字符串如果不是 `"0"` ，就都不含前导零。

Related Topics

- 位运算
- 数学
- 字符串
- 模拟

### 解法

**方法一**

```java
//先转化为十进制相加后再转换为二进制
public String addBinary(String a, String b) {
    return Integer.toBinaryString(Integer.parseInt(a,2)+Integer.parseInt(b,2));
}
```

**方法二**

```java
public String addBinary(String a, String b) {
    int i = a.length() - 1;
    int j = b.length() - 1;
    int carry = 0;
    StringBuilder builder = new StringBuilder();
    //循环相加两个字符串相同长度的低位数部分
    while (i >= 0 && j >= 0) {
        int sum = carry;
        sum += a.charAt(i--) - '0';
        sum += b.charAt(j--) - '0';
        carry = sum / 2;
        builder.append(sum % 2);
    }
    // 如果 a 还没遍历完成（a串比b串长），则继续遍历添加 a 的剩余部分
    while (i >= 0) {
        int sum = carry + a.charAt(i--) - '0';
        carry = sum / 2;
        builder.append(sum % 2);
    }
    // 如果 b 还没遍历完成（b串比a串长），则继续遍历添加 b 的剩余部分
    while (j >= 0) {
        int sum = carry + b.charAt(j--) - '0';
        carry = sum / 2;
        builder.append(sum % 2);
    }
    //如果 carry 不等于0 还有个进位数没加进去，需要补充
    if (carry == 1) {
        builder.append(carry);
    }
    //反转字符串获得正常结果
    return builder.reverse().toString();
}
```

### 思路梳理

**方法一**

Python 和 Java 本身的高精度功能，在其他的语言中可能并不适用，并且在 Java 中：

- 如果字符串超过 3333 位，不能转化为 Integer

- 如果字符串超过 6565 位，不能转化为 Long
- 如果字符串超过 500000001500000001 位，不能转化为 BigInteger

因此，为了适用于长度较大的字符串计算

## x的平方根（69）

### 题目

给你一个非负整数 `x` ，计算并返回 `x` 的 **算术平方根** 。

由于返回类型是整数，结果只保留 **整数部分** ，小数部分将被 **舍去 。**

**注意：**不允许使用任何内置指数函数和算符，例如 `pow(x, 0.5)` 或者 `x ** 0.5` 。

**示例 1：**

```
输入：x = 4
输出：2
```

**示例 2：**

```
输入：x = 8
输出：2
解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
```

**提示：**

- `0 <= x <= 231 - 1`

Related Topics

- 数学
- 二分查找

### 解法

**方法一**

```java
//求算术平方根转换成求指数函数
public int mySqrt(int x) {
    if (x == 0) {
        return 0;
    }
    //log(x)是以e为底的对数函数，exp(x)是以e为底的指数函数
    int ans = (int) Math.exp(0.5 * Math.log(x));
    return (long) (ans + 1) * (ans + 1) <= x ? ans + 1 : ans;
}
```

**方法二**

```java
//二分法
public int mySqrt(int x) {
     int left = 0, right = x, ans = -1;
     while (left <= right) {
         int mid = (left + right) / 2;
         if ((long) mid * mid <= x) {
             ans = mid;
             left = mid + 1;
         } else {
             right = mid - 1;
         }
     }
     return ans;
 }
```

### 思路梳理

**方法一**

![image-20220318152515771](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220318152515771.png?raw=true)

**方法二**

由于 xx 平方根的整数部分 ans 是满足 k^2≤x 
 的最大 k 值，因此我们可以对 k 进行二分查找，从而得到答案。

二分查找的下界为 0，上界可以粗略地设定为 x。在二分查找的每一步中，我们只需要比较中间元素 mid 的平方与 x的大小关系，并通过比较的结果调整上下界的范围。由于我们所有的运算都是整数运算，不会存在误差，因此在得到最终的答案 ans 后，也就不需要再去尝试ans+1 了。

## 爬楼梯（70）

### 题目

假设你正在爬楼梯。需要 `n` 阶你才能到达楼顶。

每次你可以爬 `1` 或 `2` 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**示例 1：**

```
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
```

**示例 2：**

```
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
```

**提示：**

- `1 <= n <= 45`

Related Topics

- 记忆化搜索
- 数学
- 动态规划

### 解法

**方法一**

```java
//斐波那契数列法
public int climbStairs(int n) {
    double sqrt_5 = Math.sqrt(5);
    //此处n+1是因为此题与斐波那契数列有些许不同的地方，
    //斐波那契数列表示为f(1)=1,f(2) = 1, f(3) = 2....，而爬楼梯f(1) = 1, f(2) = 2，f(3) = 3,与斐波那契的n表示差1，所以需要将斐波那契数列的n+1
    double fib_n = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2,n + 1);
    return (int)(fib_n / sqrt_5);
}
```

**方法二**

```java
//动态规划
public int climbStairs(int n) {
    int p = 0, q = 0, r = 1;
    for (int i = 1; i <= n; ++i) {
        p = q; 
        q = r; 
        r = p + q;
    }
    return r;
}
```

### 思路梳理

**方法二**

我们用 f(x)f(x) 表示爬到第 x 级台阶的方案数，考虑最后一步可能跨了一级台阶，也可能跨了两级台阶，所以我们可以列出如下式子：

f(x) = f(x - 1) + f(x - 2)

它意味着爬到第 x 级台阶的方案数是爬到第x−1 级台阶的方案数和爬到第x−2 级台阶的方案数的和。很好理解，因为每次只能爬 1 级或 22级，所以 f(x)只能从 f(x - 1)和 f(x - 2)转移过来，而这里要统计方案总数，我们就需要对这两项的贡献求和。

以上是动态规划的转移方程，下面我们来讨论边界条件。我们是从第 00 级开始爬的，所以从第 00 级爬到第 00 级我们可以看作只有一种方案，即 f(0) = 1；从第 0 级到第 1 级也只有一种方案，即爬一级，f(1) = 1。这两个作为边界条件就可以继续向后推导出第 n级的正确结果。我们不妨写几项来验证一下，根据转移方程得到 f(2) = 2，f(3) = 3，f(4) = 5，……，我们把这些情况都枚举出来，发现计算的结果是正确的。

我们不难通过转移方程和边界条件给出一个时间复杂度和空间复杂度都是 O(n) 的实现，但是由于这里的f(x) 只和 f(x - 1)与 f(x - 2)有关，所以我们可以用「滚动数组思想」把空间复杂度优化成 O(1)

## 删除排序列表中的重复元素（83）

### 题目

给定一个已排序的链表的头 `head` ， *删除所有重复的元素，使每个元素只出现一次* 。返回 *已排序的链表* 。

**示例 1：**

![img](https://github.com/BlackMe2327/cloudimages27/blob/main/img/list1.jpg?raw=true)

```
输入：head = [1,1,2]
输出：[1,2]
```

**示例 2：**

![img](https://github.com/BlackMe2327/cloudimages27/blob/main/img/list2.jpg?raw=true)

```
输入：head = [1,1,2,3,3]
输出：[1,2,3]
```

**提示：**

- 链表中节点数目在范围 `[0, 300]` 内
- `-100 <= Node.val <= 100`
- 题目数据保证链表已经按升序 **排列**

Related Topics

- 链表

### 解法

```java
public ListNode deleteDuplicates(ListNode head) {
    if(head==null){
        return head;
    }
    ListNode cur=head;
    while(cur.next!=null){
        if(cur.val==cur.next.val){
            cur.next=cur.next.next;
        }else{
            cur=cur.next;
        }
    }
    return head;
}
```

### 思路梳理

- 给定的链表是排好序的，因此重复元素在链表中出现的位置是连续的，因此只需要一次遍历，就可以删除重复元素
- 设定一个指针cur指向head
- cur.val==cur.next.val时，则将cur.next从链表中移除
- 否则，说明链表中已经不存在其他与cur.val相同的元素，因此将cur指向cur.next

## 合并两个有序数组（88）

### 题目

给你两个按 **非递减顺序** 排列的整数数组 `nums1` 和 `nums2`，另有两个整数 `m` 和 `n` ，分别表示 `nums1` 和 `nums2` 中的**元素数目**。

请你 **合并** `nums2` 到 `nums1` 中，使合并后的数组同样按 **非递减顺序** 排列。

**注意：**最终，合并后数组不应由函数返回，而是存储在数组 `nums1` 中。为了应对这种情况，`nums1` 的初始长度为 `m + n`，其中前 `m` 个元素表示应合并的元素，后 `n` 个元素为 `0` ，应忽略。`nums2` 的长度为 `n` 。

**示例 1：**

```
输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
```

**示例 2：**

```
输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
解释：需要合并 [1] 和 [] 。
合并结果是 [1] 。
```

**示例 3：**

```
输入：nums1 = [0], m = 0, nums2 = [1], n = 1
输出：[1]
解释：需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
```

**提示：**

- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-109 <= nums1[i], nums2[j] <= 109`



**进阶：**你可以设计实现一个时间复杂度为 `O(m + n)` 的算法解决此问题吗？

Related Topics

- 数组
- 双指针
- 排序

### 解法

**方法一**

```java
//直接合并后排序
public void merge(int[] nums1, int m, int[] nums2, int n) {
    for(int i=0;i!+n;i++){
        nums1[m+i]=nums2[i];
    }
    Arrays.sort(nums1);
}
```

**方法二**

```java
//双指针
public void merge(int[] nums1, int m, int[] nums2, int n) {
    int p1=0,p2=0;
    int[] sorted = new int[m+n];
    int cur;
    while(p1<m||p2<n){
        if(p1==m){
            cur=nums2[p2++];
        }else if(p2==n){
            cur=nums1[p1++];
        }else if(nums1[p1]<nums2[p2]){
            cur=nums1[p1++];
        }else{
            cur=nums2[p2++];
        }
        sorted[p1+p2-1]=cur;
    }
    for(int  i=0;i!=m+n;i++){
        nums1[i]=sorted[i];
    }
}
```

**方法三**

```java
//逆向双指针
public void merge(int[] nums1, int m, int[] nums2, int n) {
    int p1 = m - 1, p2 = n - 1;
    int tail = m + n - 1;
    int cur;
    while (p1 >= 0 || p2 >= 0) {
        if (p1 == -1) {
            cur = nums2[p2--];
        } else if (p2 == -1) {
            cur = nums1[p1--];
        } else if (nums1[p1] > nums2[p2]) {
            cur = nums1[p1--];
        } else {
            cur = nums2[p2--];
        }
        nums1[tail--] = cur;
    }
}
```

### 思路梳理

**方法二**

- 每次从两个数组头部取出比较小的数字放到结果中

**方法三**

- 逆向思维我们每次挑选两个数组中较大的数字，放到nums1的后半部分

## 二叉树中序遍历（94）

### 题目

给定一个二叉树的根节点 `root` ，返回它的 **中序** 遍历。

**示例 1：**

![image-20220318193812396](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220318193812396.png?raw=true)

```
输入：root = [1,null,2,3]
输出：[1,3,2]
```

**示例 2：**

```
输入：root = []
输出：[]
```

**示例 3：**

```
输入：root = [1]
输出：[1]
```

**示例 4：**

![image-20220318193828577](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220318193828577.png?raw=true)

```
输入：root = [1,2]
输出：[2,1]
```

**示例 5：**

![image-20220318193841087](https://github.com/BlackMe2327/cloudimages27/blob/main/img/image-20220318193841087.png?raw=true)

```
输入：root = [1,null,2]
输出：[1,2]
```

**提示：**

- 树中节点数目在范围 `[0, 100]` 内
- `-100 <= Node.val <= 100`

**进阶:** 递归算法很简单，你可以通过迭代算法完成吗？

Related Topics

- 栈
- 树
- 深度优先搜索
- 二叉树

### 解法

**方法一**

```java
//递归
public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> res = new ArrayList<Integer>();
    inorder(root, res);
    return res;
}

public void inorder(TreeNode root, List<Integer> res) {
    if (root == null) {
        return;
    }
    inorder(root.left, res);
    res.add(root.val);
    inorder(root.right, res);
}
```

**方法二**

```java
//迭代
public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> res = new ArrayList<Integer>();
    Deque<TreeNode> stk = new LinkedList<TreeNode>();
    while (root != null || !stk.isEmpty()) {
        while (root != null) {
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        res.add(root.val);
        root = root.right;
    }
    return res;
}
```

### 思路梳理

**方法一**

- `inorder(root)` 表示当前遍历到root 节点的答案
- `inorder(root.left)` 来遍历 root 节点的左子树，然后将root 节点的值加入答案
- 递归调用`inorder(root.right)` 来遍历root节点的右子树即可，递归终止的条件为碰到空节点。

**方法二**

- 方法一的递归函数我们也可以用迭代的方式实现，两种方式是等价的，区别在于递归的时候隐式地维护了一个栈，而我们在迭代的时候需要显式地将这个栈模拟出来，其他都相同

## 相同的树（100）

### 题目

给你两棵二叉树的根节点 `p` 和 `q` ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

**示例 1：**

![img](https://github.com/BlackMe2327/cloudimages27/blob/main/img/ex1.jpg?raw=true)

```
输入：p = [1,2,3], q = [1,2,3]
输出：true
```

**示例 2：**

![img](https://github.com/BlackMe2327/cloudimages27/blob/main/img/ex2.jpg?raw=true)

```
输入：p = [1,2], q = [1,null,2]
输出：false
```

**示例 3：**

![img](https://github.com/BlackMe2327/cloudimages27/blob/main/img/ex3.jpg?raw=true)

```
输入：p = [1,2,1], q = [1,1,2]
输出：false
```

**提示：**

- 两棵树上的节点数目都在范围 `[0, 100]` 内
- `-104 <= Node.val <= 104`

Related Topics

- 树
- 深度优先搜索
- 广度优先搜索
- 二叉树

### 解法

**方法一**

```java
//深度优先搜索
public boolean isSameTree(TreeNode p, TreeNode q) {
    if (p == null && q == null) {
        return true;
    } else if (p == null || q == null) {
        return false;
    } else if (p.val != q.val) {
        return false;
    } else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}
```

**方法二**

```java
//广度优先搜索
public boolean isSameTree(TreeNode p, TreeNode q) {
    if (p == null && q == null) {
        return true;
    } else if (p == null || q == null) {
        return false;
    }
    Queue<TreeNode> queue1 = new LinkedList<TreeNode>();
    Queue<TreeNode> queue2 = new LinkedList<TreeNode>();
    //插入元素到队列中成功返回true
    queue1.offer(p);
    queue2.offer(q);
    while (!queue1.isEmpty() && !queue2.isEmpty()) {
        //移除并返问队列头部的元素    如果队列为空，则返回null
        TreeNode node1 = queue1.poll();
        TreeNode node2 = queue2.poll();
        if (node1.val != node2.val) {
            return false;
        }
        TreeNode left1 = node1.left, right1 = node1.right, left2 = node2.left, right2 = node2.right;
        if (left1 == null ^ left2 == null) {
            return false;
        }
        if (right1 == null ^ right2 == null) {
            return false;
        }
        if (left1 != null) {
            queue1.offer(left1);
        }
        if (right1 != null) {
            queue1.offer(right1);
        }
        if (left2 != null) {
            queue2.offer(left2);
        }
        if (right2 != null) {
            queue2.offer(right2);
        }
    }
    return queue1.isEmpty() && queue2.isEmpty();
}
```

### 思路梳理

**方法一**

- 如果两个二叉树都为空，则两个二叉树相同。如果两个二叉树中有且只有一个为空，则两个二叉树一定不相同。
- 如果两个二叉树都不为空，那么首先判断它们的根节点的值是否相同，若不相同则两个二叉树一定不同，若相同，再分别判断两个二叉树的左子树是否相同以及右子树是否相同。

**方法二**

- 首先判断两个二叉树是否为空，如果两个二叉树都不为空，则从两个二叉树的根节点开始广度优先搜索
- 比较两个节点的值，如果两个节点的值不相同则两个二叉树一定不同；
- 如果两个节点的值相同，则判断两个节点的子节点是否为空，如果只有一个节点的左子节点为空，或者只有一个节点的右子节点为空，则两个二叉树的结构不同，因此两个二叉树一定不同；
- 如果两个节点的子节点的结构相同，则将两个节点的非空子节点分别加入两个队列，子节点加入队列时需要注意顺序，如果左右子节点都不为空，则先加入左子节点，后加入右子节点。
- 如果搜索结束时两个队列同时为空，则两个二叉树相同。如果只有一个队列为空，则两个二叉树的结构不同，因此两个二叉树不同。

