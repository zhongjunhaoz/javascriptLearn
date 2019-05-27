// 正则表达式
const htmlSTR = '<p><em>lorem</em><strong>insum</strong></p>'
// 结果输出lorem ipsum strip tags
// 正则 replace splice 规则
const stripHTMLTags = str => str.replace(/<[^>]*>/g,''); //replace()将字符串替换  g代表全局 /<[^>]*>表匹配全部的<>