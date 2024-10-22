/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let positive = []
    let negative = []
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            positive.push(nums[i])
        } else {
            negative.push(nums[i])
        }
    }
    for (let i = 0; i < positive.length; i++) {
        result.push(positive[i], negative[i])
    }
    return result;
};