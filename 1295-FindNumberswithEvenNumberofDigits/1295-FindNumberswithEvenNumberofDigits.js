/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i].toString().split('').length) % 2 === 0) {
            res++;
        }
    }
    return res;
};