// Last updated: 6/24/2025, 4:57:21 PM
/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
    let n = nums.length;

    let set = new Set();

    for (let j = 0; j < n; j++)
        if (nums[j] === key)
            for (let i = j - k; i <= j + k; i++)
                if (i >= 0 && i < n) {
                    set.add(i);
                }

    return [...set].sort((a, b) => a - b);
};