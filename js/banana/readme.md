蜗牛爱吃香蕉

N piles bananas 每pile banans 有不同数量的banans 

[3,6,7,11]
[30,11,23,4,20]
蜗牛每个小时可以吃某一个pile里的n只香蕉，规定H小时内吃完，吃每把的时候 要不就是吃 m只，要不就吃剩下的

Koko bananas
- 把香蕉吃完函数 canEatAllBanans
    h 来自用于吃法规则 一小时mid,一次只吃一把
    return h >= H;
- while 去疯狂的试 
1,2,3,4,5,6,7.....Math.max(...piles)

能拿到结果 但是太慢了
最大的来吗？
中间值来试 最大概率最快的， 二分查找
二分查找优化查找的效率


简单查找 事件开销是n 
二分查找的写法是有规律的
min max 要找的是最小可以的min  可以来优化的 找中间mid=x+(y-x)>>1 ，小了，mid + 1 为新的X
大了mid-1 新的y
log2N