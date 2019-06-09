// 1.userObj 只传一个参数又带来新的问题，代码的函数编写者，user 里面的key 要去了解 
// 如果不需要全部的user 只需要user的一部分 
// 解构 可以帮助，提高代码的可读性
function infomation({name,age,height}){
    console.log(name,age,height);
}

const user = {
    name:'杨鹏',
    age:22,
    height:1.8,
    sex:'男',
    hobbies:['打游戏']
}
// console.log(infomation(user));
