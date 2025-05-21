// Last updated: 5/21/2025, 4:06:40 PM
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let sumOfDigits = nums[i].toString().split('')
        let sum = sumOfDigits.reduce((acc, num) => acc + Number(num), 0)
        if (i == sum) return i
    }
    return -1;
};