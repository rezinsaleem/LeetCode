// Last updated: 6/3/2025, 4:12:29 PM
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    let values = Object.values(obj)
    for (let val of values) {
        if (val % 2 != 0) {
            return false;
        }
    }
    return true;
};