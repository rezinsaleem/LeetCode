/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let arr = []
    let count = 0;
    for (let i = 0; i < nums.length + 1; i++) {
        if (nums[i] == 0 || !nums[i]) {
            arr.push(count)
            count = 0
        } else if (nums[i] == 1) {
            count++
        }
    }
    return Math.max(...arr)
};