// Last updated: 5/30/2025, 11:40:55 AM
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let res = []
    let j = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            j++;
        } else {
            res.push(j)
            j = 1
        }
    }
    return Math.max(...res)
};