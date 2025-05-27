// Last updated: 5/27/2025, 5:36:35 PM
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let obj = {}
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
    }
    let values = Object.values(obj)
    let flag = true;
    let sum = 0;
    for (let val of values) {
        if (val % 2 == 1) {
            if (flag) {
                sum += 1
                flag = false;
            }
            sum += (val - 1)
        } else {
            sum += val
        }
    }
    return sum;
};