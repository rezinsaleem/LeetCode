// Last updated: 6/2/2025, 1:46:50 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let res = 0
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] - 1) * (nums[j] - 1) > res) {
                res = (nums[i] - 1) * (nums[j] - 1)
            }
        }
    }
    return res;
};