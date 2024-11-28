/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < num.length; i++) {
        if (i % 2 == 0) {
            sumEven += Number(num[i])
        } else {
            sumOdd += Number(num[i])
        }
    }
    if (sumOdd == sumEven) return true;
    else return false;
};