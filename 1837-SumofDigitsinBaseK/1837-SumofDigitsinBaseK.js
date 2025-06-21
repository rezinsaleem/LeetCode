// Last updated: 6/21/2025, 4:15:30 PM
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
    const nums = n.toString(k).split('')
    return nums.reduce((acc, curr) => acc + Number(curr), 0)
};