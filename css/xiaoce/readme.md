## 界面大框架及经验

    水平方向一般禁止滚动条，垂直方向出现滚动条。
        - 水平和垂直两个方向都滚动，页面摇晃，误操作
        - 垂直方向一直滚动是开发的主要方式
        overflow-x: hidden;/*禁止水平方向滚动*/

        max-width: 960px;  margin: 0 auto;  通用于所有布局

        flex布局 
        flex-grow放大 
        flex-basis
        flex-shrink缩小
        flex-wrap
        当网页由PC到moblie时，缩小阵仗

        经验 简单的适配PC->mobile  照顾所有的用户 
        在PC端大手大脚一点 max-width magin:auto
        padding margin
        mobile flex-shrink 让关键部分坚挺一点