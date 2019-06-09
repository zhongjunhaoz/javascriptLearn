/**
 * 
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid 
 * @return {boolean}
 */
function canEatAllBanans(piles,H,mid){
    // 一定是H小时
    let h = 0;
    // 吃
    for (let pile of piles){
        h+=Math.ceil(pile/mid);//向上取整
    }
    return h <= H;
}
/**
 * 
 * @param {number[]} piles 
 * @param {number} H 
 * @return {number}
 */ 
function minEatingSpeed (piles,H) {
    let lo = 1;//最小值，至少吃一只。
    let hi = Math.max(...piles);
    console.log(hi);
    while(lo<=hi){
        //lo试试
        let mid = lo + ((hi-lo)>>1);
        console.log('------',mid);
        // m 正好可以？
        if (canEatAllBanans(piles,H,m)){
            hi = mid-1;
        }else {
            lo = mid+1;//将最小值改为中间值-1
        }
    }
    return lo;
}

// console.log(canEatAllBanans([3,6,7,11],8,4));
console.log(minEatingSpeed)([3,6,7,11,8])