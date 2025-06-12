// Last updated: 6/12/2025, 2:44:22 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
    let max = Math.abs(nums[nums.length - 1] - nums[0])
    for (let i = 0; i < nums.length - 1; i++) {
        let diff = Math.abs(nums[i] - nums[i + 1])
        if (diff > max) max = diff
    }
    return max;
};