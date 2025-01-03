/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    for (let i = min; i >= 0; i--) {
        if (min % i === 0 && max % i === 0) {
            return i;
        }
    }
};