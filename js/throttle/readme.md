search sugggest 帮助用户快速找到他想要找的内容
比如 “坤”  =>蔡徐坤 谢广坤
    宝 => 宝宝树 宝马
根据词匹配  分词
蔡徐坤 篮 球
xukun cai baskeball 没有必要每一次打一次keyup 都去搜索   防止多次，性能问题  如何防抖？即防止服务器挤压崩溃。

要打完一个单词在去搜 basketball 
定时器实现了防抖 debounce 函数利用闭包（返回新函数） 将定时器ID 封闭在空间中 下一次的keyup会消除上一次的timeout，只有最后一个keyup 间隔时间超过
delay 得以执行
在频繁触发时，只执行一次