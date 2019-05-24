[twitter]()
写一个函数 参数为 一句话 英文的 将
- 如果字符超过140字，返回false
- 如果是空字符，返回false
- 以#开始
- 每个单词首字母大小 

'hello world miss’.spit('').map(word =>word.charAt(0).toUpperCase()+word.slice(1)).join('');  -->一句代码就搞定