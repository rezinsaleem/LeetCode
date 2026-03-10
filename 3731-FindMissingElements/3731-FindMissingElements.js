// Last updated: 3/10/2026, 3:41:55 PM
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var findMissingElements = function (nums) {
6    nums = nums.sort((a, b) => a - b)
7    const res = []
8    for (let i = nums[0] + 1; i < nums[nums.length-1]; i++) {
9        if (!nums.includes(i)) {
10            res.push(i)
11        }
12    }
13    return res;
14};