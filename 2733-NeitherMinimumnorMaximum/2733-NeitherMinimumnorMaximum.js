// Last updated: 5/23/2025, 4:34:33 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if(nums.length<=2){
        return -1;
    }
    let res = nums.sort((a,b)=>a-b)
    return res[1]
};