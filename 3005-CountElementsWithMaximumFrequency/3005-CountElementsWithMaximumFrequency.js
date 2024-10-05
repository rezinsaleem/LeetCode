/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] += 1 : 1;
    }
    let res = 0;
    let values = Object.values(obj)
    for (let j = 0; j < values.length; j++) {
        if (values[j] === Math.max(...values)) {
            res += values[j]
        }
    }
    return res;
};