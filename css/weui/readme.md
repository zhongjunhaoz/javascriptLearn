# WEUI 
    来自于微信的前端开发框架，
    - 微信生态 公众号 小程序 
    weui.css 在基础上做开发
    - APP 生态 
    内嵌的ＨＴＭＬ
    －　pc　传统网站　bootstrap 

- 界面的编写过程
 - html 结构，独立于样式  DOM文档流 从左到右，从上到下 
 - 去类名很重要 BEM 规范
  Block 区块 weui-cell 
  weui-buttom 30-50个利用的组件 
  Element 元素 
  weui-cell_hd
   weui-cell_bd
    weui-cell_ft
    通用的词汇 hd + bd + ft 
 - 在写样式


 - 离开文档流（从上到下，从左到右）
    - 里面的元素不再受影响，before absolute 脱离了 正常的文档流，
    weui-cells border-top 使用盒子模型；元素在页面上的站位，是需要综合考虑 内容 W*h
    padding border margin position 

- CSS 像素 1px 边框在手机里
    硬件物理像素 retina 2px 3倍retina 3px
    transform scaleY(0.5)压一下
    浏览器不会处理小数点像素 transform-origin:基点，那个点不动上边线，从下往上压，scaleY



- flex
    不受块级的约束，它的内部是一个新世界 弹性布局是父与子们的一起的布局 好用的对齐方式 align-items 纵轴对齐 居中 
    justify-content 横轴在一堆字元素中，只给一个元素设置flex:1 这个元素成为主元素，其他元素占完自己该占的盒子模型的内容后，余下的空间都交给主题元素。