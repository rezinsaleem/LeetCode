// Last updated: 6/3/2025, 12:09:25 PM
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    let small = []
    let large = []
    let same = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > pivot) {
            large.push(nums[i])
        } else if (nums[i] === pivot) {
            same.push(nums[i])
        } else {
            small.push(nums[i])
        }
    }
    return [...small, ...same, ...large]
};