1. 大厂的代码风格是一样的 eslint 
    npm run eslint
    yarn add babel-core babel-cli babel-preset-env -D
    yarn add eslint eslint-loader -D
    
    - eslint 是JS风格，开始痛苦 自由是建立在规范上的  
    - console.log(__dirname); -> 返回出绝对路径 项目未来发布到哪里都可以
    console.log(path.resolve(__dirname,'src')); 

    - .eslintrc 是什么 采用一个业内的规范，严格执行公司的代码风格

    - webpack-dev-server 编译放在内存中 性能