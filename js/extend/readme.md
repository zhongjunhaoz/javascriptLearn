Person 由prototype属性来解决它自身构造之外的原型上的属性或方法。->prototype可以添加其他的属性和方法。
原型对象会有它的构造函数 person.prototype.constructor属性
第三者？ 实例 
实例 跟person 有什么关系，person.prototype 有关系
 instanceof 就是判断一个实例是否属于某种类型

 js的实例其实不是Java等语言的血缘关系
 zl 的实例是new出来的 new person() 

 1. person 函数以new的方式运行，this => new object();
 2. zl 怎么拿到person.prototype原型对象上定义的方法 
 任何一个对象实例都有 _proto_ 属性
 3. 方法有prototype属性， 值为对象 开支 
 4. 任何对象实例一定有_proto_属性 指向他的原型对象
 5. 原型对象上 有constrctor 属性指向谁 他的构造


 原型链
 // new Animal() = zl;
  // animal.__proto__ = Animal.prototype
  // zl.planet zl.getPlanet()
  // zl.__proto__(第一次原型查找).__proto__ = Animal.prototype-> getPlanet

