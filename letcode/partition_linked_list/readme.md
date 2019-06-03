- 抽象 ADT 具象来引导
- 解决特定问题

1. leetcode 数据结构 
    LinkedList 链表
2. github algorithm 00写法
    封装成class export default
3. webpack 可见即可得


- 有一个链表 服务于各种算法
1->4->3->2->5->2
存放数据  不连续的， 
head 
- node(n) -> linkedList
    模块化  一个文件一个类
    es6的模块化
    append()
- index.js
    业务代码

- node 不支持es6 模块化，
    原生支持的是require commonJS
    compile presets


- ADT (抽象数据类型（ADT）是一个实现包括储存数据元素的存储结构以及实现基本操作的算法,在这个数据抽象思想中，数据类型的定义和它的实现是分开的)
{
数据对象：（数据元素集合）
数据关系：（数据关系二元组结合）
基本操作：（操作函数的罗列）
}
    抽象数据类型
    链表 数据结构 配套方法
    append()
    toString()
    toArray()

- 题目 ： head =  1->4->3->2->5->2   x = 3
    对链表进行分割 小于x的节点放在左边 大于或等于x的节点放在其后 不影响之前的顺序
    1->2->2 左侧表 之前
    4->3->5 右链表 之后

    =>
1->2->2->4->3->5  左侧尾指针指向右侧头指针


链表 Head tail append()
两个链表 首尾相连 tail1.next = head2



##letcode题目
https://leetcode-cn.com/problems/partition-list/