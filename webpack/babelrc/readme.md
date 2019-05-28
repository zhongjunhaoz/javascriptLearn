生产线 webpack 代码生产工艺 工作流 work Flow

- html + css + js = development 

html template {{}}
css stylus 
js es6,7,8,9 => es5

最后代码运行的env

- js 
    babel 使用最新的技术开发 ，由babel 编译成es5，降级

- babel-core 核心的转译器

npm run build "babel ....."
babel-cli 
babel-preset-env   .babelrc 
{
    "presets":["env"]
}

build 编译

dev 

- preset 预处理
env 搞不定 安装插件 

- npm run eslint 
代码规范的插件 大厂必备 让代码更规范更严谨

- webpack 是一切工作流的主宰
webpack --mode development  
/src 开发目录
/dist 上线项目  开发离上线差了一个webpack的工作流程


- 开发时 development 代码的可读性 dev 本地 localhost 
- 上线时 production 代码要压缩 ，混淆代码 build 服务器 域名
- 测试 test 局域网
