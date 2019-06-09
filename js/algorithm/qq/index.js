
let qq_number = "631758924";

// 函数表达式
/**
 * 
 * @param  qq type string 
 * @return  type bool 
 * @功能 判断QQ号是否合格
 * @description 是能是数字 长度5位以上 ，13位以内
 */
const is_valid_qq = (qq) =>{
    if(!qq) return false;
    if(/^[0-9]{5,13}$/.test(qq)){
        return ture;
    }
    else {return false;}
    // console.log(qq);

    // return ture ;
};
console.log(is_valid_qq(qq_number));

//选择了一种数据结构 数组
let enc_qq = [6,3,1,7,5,8,9,,2,4];
    qq = [];
    head=0;//指针 star开始 
    tail=9;//指针，指向尾部
    // 拿到一个正确的数字，操作原来的数字
    while(head<tail){
    qq.push(enc_qq[head]);
    head++;
    enc_qq[tail]=enc_qq[head];
    // 如何第二个数移到队尾？
    // 删除它？
    tail++;
    head++;
    }
    console.log(qq);
