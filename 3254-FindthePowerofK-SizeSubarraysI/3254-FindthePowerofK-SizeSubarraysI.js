/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
    let res = []
    for (let i = 0; i <= nums.length - k; i++) {
        let slice = nums.slice(i, i + k)
        let arr = [...new Set(slice)]
        let sort = arr.sort((a, b) => a - b)
        if (slice.join('') !== sort.join('')) {
            res.push(-1)
        } else {
            let flag=0
           for(let j=1;j<slice.length;j++){
             if(slice[j]!==slice[0]+j){
                flag=1
                break;
             }
           }
           if(flag == 0){
            res.push(Math.max(...slice))
           }else{
            res.push(-1)
           }
        }
    }
    return res;
};