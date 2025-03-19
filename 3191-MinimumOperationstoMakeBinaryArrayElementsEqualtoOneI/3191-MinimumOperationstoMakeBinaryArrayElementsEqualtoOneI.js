/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let res = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === 0) {
            nums[i] = 1 - nums[i];
            nums[i + 1] = 1 - nums[i + 1];
            nums[i + 2] = 1 - nums[i + 2];
            res++;
        }
    }
    
    return nums.includes(0) ? -1 : res;
};