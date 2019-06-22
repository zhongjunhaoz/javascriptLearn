类型检测是JS的考点 
<!-- new Array() [] -->

object : 
    Array 可遍历的对象
    JSON  可枚举的对象  for(key in)
    function 是一等对象 



typeof 不靠谱，并不能完全返回一些类型


1. object.prototype.toString() ->专门弥补typeof半吊子,
[] 返回值 "[object object]" 

2. 借给Array 用 object.prototype.toString.call([])
函数上就有call,动态指向内部this的指向


(function(){console.log('玛蒂娜')})()  -->立即执行函数

3. js 的面向对象
Type{
    isString
}

4. 立即执行函数 + 嵌套函数定义 闭包 
type 就在这些嵌套函数被调用时可以引用到
