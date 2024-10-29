/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let obj = {}

    for (let x of nums) {
        obj[x] = (obj[x] + 1 || 1);
    }

    for (let key in obj) {
        if (obj[key] === 1) return Number(key)
    }
};