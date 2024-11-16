/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let res = 0;
    let min = Math.min(...nums)
    for (let i = 0; i < nums.length; i++) {
        res += nums[i] - min
    }
    return res
};