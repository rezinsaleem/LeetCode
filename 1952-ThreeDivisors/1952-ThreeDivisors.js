/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            res++
        }
    }
    return res === 3;
};