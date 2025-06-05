// Last updated: 6/5/2025, 6:25:05 PM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if ((nums[i] % 2 == 0 && nums[i + 1] % 2 == 0) || (nums[i] % 2 == 1 && nums[i + 1] % 2 == 1)){
            return false;
        }
    }
    return true;
};