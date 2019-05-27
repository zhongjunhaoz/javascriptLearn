#来自30s解决一道题目

- 正则知识点
    贪婪匹配(重复匹配一个模式): [0-9]+
    + 一次或多次
    * 零次或多次
    ^ 的第二种用法 [^>]
- 函数参数
    写一个函数,返回最大的两个数 [2,6,'a'] [8,4,6] [10] => [10,8]
    1. Math.max 最便宜的求最大值
    2. ... sprend 展开一个数组 
    3. n个数？ slice方法
    综合题

- args
    1. map + spread 运算符 
    2. 闭包 遍历每一项map,取前两个slice + n + math.max(),求最大值
        一般解法： .map  .slipe  Math.max
    callback取前两个 + 求最大值 作为一个功能  Math.max.slipe(n)