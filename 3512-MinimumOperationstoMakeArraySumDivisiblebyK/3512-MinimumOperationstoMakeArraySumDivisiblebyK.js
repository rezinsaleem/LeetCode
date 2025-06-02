// Last updated: 6/2/2025, 1:41:45 PM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0)
    return sum % k
};