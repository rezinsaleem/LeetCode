// Last updated: 5/21/2025, 3:23:59 PM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    let max = Math.max(...nums)
    let res = 0
    for (let i = 0; i < k; i++) {
        res += (max + i)
    }
    return res;
};