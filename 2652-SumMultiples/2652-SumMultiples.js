/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
    for (let i = 1; i <= n; i++) {
    let sum = 0;
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
            sum += i
        }
    }
    return sum
};
7
