/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i].toString().split('').reduce((acc, curr) => acc + Number(curr), 0);
    }
    return nums.sort((a, b) => a - b)[0];
};