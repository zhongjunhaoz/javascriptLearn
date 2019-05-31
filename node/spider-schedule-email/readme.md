#爬虫 墨迹天气
npm init -y 在根目录下初始化一下
npm i superagent -S  安装第三方包
npm i cheerio -S  安装cheerio

#
- x.find() 查找某元素下面的内容 $('.box').find('p');
- \s 空白字符
- .replace(/\s/g,""); 去除无用的空白字符

#promise
- promise.all([promise组成的数组])
返回一个 promise 。三个状态 。所有promse resolve 的时候 它才resolve, 
resolve 时候的值 就是 [所有 promise] resolve 组成的数组

## 模板引擎
发邮件 发漂亮的邮件  需要发送html
html 不是静态的 需要数组填充
{{name}}
{ name } 变量编译进去

模板引擎 同理
编译成 html 

MVC
jsp
node 模板引擎 承载页面(view)
ejs jade
<%= %> 变量
<% %> js执行