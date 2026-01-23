// Last updated: 1/23/2026, 10:31:09 AM
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var alternatingSum = function (nums) {
6    let sum = 0;
7    for (let i = 0; i < nums.length; i++) {
8        if (i % 2 === 0) {
9            sum += nums[i]
10        } else {
11            sum -= nums[i]
12        }
13    }
14    return sum
15};