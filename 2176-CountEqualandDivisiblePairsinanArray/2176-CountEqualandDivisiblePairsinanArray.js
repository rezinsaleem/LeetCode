// Last updated: 4/17/2025, 11:26:05 PM
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
    let res = 0
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            
            if (nums[i] == nums[j] && (i * j) % k == 0) {
                res++;
            }
        }
    }
    return res;
};