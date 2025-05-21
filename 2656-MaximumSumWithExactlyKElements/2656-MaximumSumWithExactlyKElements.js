// Last updated: 5/21/2025, 3:42:43 PM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    let max = Math.max(...nums)
    n = max + k-1;
    let val1 = (n * (n + 1)) / 2;
    let val2 = ((max-1) * max) / 2;
    return val1-val2
};