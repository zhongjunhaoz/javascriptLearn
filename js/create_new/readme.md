new 的时候发生了什么？
this 指向实例化后的对象

构造函数的运行方式是以 new的方式被运行，内部的this 运态指向实例化的对象。

空对象？ 开始时之后，拿到了构造函数里的属性，最后又拿到了prototype上定义的属性和方法

对象由属性和方法构成 

1. 实例化一个新的对象，并且是这外类的实例
2. 构造函数被执行，this指向实例 constructor 运行慢半拍
在面向对象里是为他人服务的，为this服务，this由函数的运行方式决定。
this ->实例 new 
this ->任何对象 call (用call可以让this指向任何对象)
3. Otaku.prototype  值是对象
任何一个函数都有一个prototype，因为有了这个属性才能构建类 
火车 constructor 车头，
车头上勾着车身  