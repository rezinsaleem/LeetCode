/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;
    }

    const res = [];
    while (res.length < k) {
        let maxFrequency = Math.max(...Object.values(obj));
        let keyWithMaxFreq = Object.keys(obj).find((key) => obj[key] === maxFrequency);
        res.push(Number(keyWithMaxFreq));
        delete obj[keyWithMaxFreq];
    }

    return res;
};
