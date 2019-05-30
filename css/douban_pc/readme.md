PC 相对于 Mobile 更复杂 ，更强调布局layout
文档流的考察 从上到下，从左到右 
flex要使用前思考一下，最新CSS3技术 兼容性 

float是魔鬼，会影响其他相邻的元素 
离开文档流 float 跟 position:absolute(只能做边边角角的布局，不能做整个页面的布局)

PC端，先布局 layout float inline-block

行内元素必须要有内容，否则如果设置了背景色也看不见
inline-bloke简单，但是有bug,兄弟间有间隙，相对年轻一些，ie8以下不支持。