// Last updated: 5/22/2025, 5:33:58 PM
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let res = []
    let j = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 == nums[i + 1]) {
            continue;
        }
        if (j == nums[i]) {
            res.push(`${j}`)
        } else {
            res.push(`${j}->${nums[i]}`)
        }
        j = nums[i + 1]
    }
    return res;
};