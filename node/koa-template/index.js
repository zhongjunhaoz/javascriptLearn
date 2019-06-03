const Koa = require('koa');

// 应用的实例
const app = new Koa();
// 可以省省很多个
const admin = new Koa();

// req res ctx 封装 req res
app.use(async(ctx,next)=>{
    console.log(1);
    // 输出1后后台没有任何回应，显示no found,自己处理了
    // 交给下一个中间件
    await next();//next 是个形参而已
    console.log(2);
})
app.use(async(ctx,next)=>{
    console.log(4)
    await next();
})
app.use(async(ctx)=>{
    console.log(3);
    ctx.body = 'hello world';
})
app.listen(3000,()=>{
    console.log('server is runing 3000')
});
admin.listen(4000,()=>{
    // console.log('admin server is runing 3000')
})