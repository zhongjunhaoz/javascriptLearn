// LRU缓存算法
// 什么叫缓存？不用每次都去硬盘中查找 在内存中 缓存
var LRUCatch = function
(capactive){
    this.capactive = capactive;
    this.obj = {}; //key
    this.arr = [];
} 
LRUCatch.prototype.get = function(key){
        var val = this.obj[key];
        if (val>0){
            var index = this.arr.indexOf(key);
            this.arr.splice(index,1);
            this.arr.unshift(key);
        }else {
            return -1;
        }
        // 内存不大的内存服务于最多的进程
        // if(key>0)
        //假设为正值
        // 有 返回值
        //     设置为最近使用
        // 没有 -1
    };
LRUCatch.prototype.set = function(key,value){
    if(this.obj[key]){
        this.obj[key] = value;//更新
        // 最近使用 数组的[0]
        //如何把之前的删除，
        var index = this.arr.indexOf(key);
        this.arr.splice(index,1);
        this.arr.unshift(key);
    }
    // 如果有这个值，返回

    if(this.capactive === this.arr.length){
        // 放慢了
        var k = thia.arr.pop();//最近最少使用
        this.obj[k] = undefined;
    }
    this.obj[key] = value;
    this.arr.unshift(key);
    // 没有的话，两种可能，
    // 如果内存满了，要执行arr.pop()操作

    // 存进去 arr
};