/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    const res = []
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] += 1 : 1;
    }
    for (let key in obj) {
        if (obj[key] > (nums.length / 3)) {
            res.push(Number(key))
        }
    }
    return res
};