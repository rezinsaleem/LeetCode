// Last updated: 5/24/2025, 11:56:11 AM
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
    let res = []
    for (let i = 1; i <= nums.length; i++) {
        let prefix = nums.slice(0, i)
        let suffix = nums.slice(i, nums.length)
        let prefixCount = new Set(prefix).size
        let suffixCount = new Set(suffix).size
        res.push(prefixCount - suffixCount)
    }
    return res
};