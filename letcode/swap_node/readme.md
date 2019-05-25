- 无编译 不代码
    webpack 已经成为 工作流程的霸主
    vue-cli
    编译过程和js的promise 异步

1. 代码写在dev  src/
2. 上线在 build dist/
3. 启动一个web服务器 webpack-dev-server

- webpack html temlate plugin html-webpack-plugin 

- log 不在根目录下 怎么找到他呢 多写点地址 ./utils/log.js
alias  提供路径是书写 


resolve .js ->
    module 
        rules
            .js babel-loader

babel-core babel-cil babel-reset-env
babel-loader 有点兼容性
module
rules : [{
    test:/\.js$/,
    user:'babel-loader'
}]
resolve:{
    extensions:['.js']
}

8080端口 webpack-dev-server html-weback-plugin
template ./src/index.html
为什么 js 运行了
html + js 

- webpack 一切皆可打包 打包到js里
css 对于js来说 就是文本而已
img 对于js 打包成base64
但是 css 应该独立打包 ，性能优化需要 如果所有东西抱成一块 
main.js 显示最慢