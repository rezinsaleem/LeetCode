// Last updated: 6/17/2025, 3:28:16 PM
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let count = 0;
    for (let i = low; i <= high; i++) {
        if (i.toString().length % 2 == 0) {
            let first = i.toString().split('').slice(0, i.toString().length / 2)
            let second = i.toString().split('').slice(i.toString().length / 2)
            let firstSum = first.reduce((acc, curr) => acc + Number(curr), 0)
            let secondSum = second.reduce((acc, curr) => acc + Number(curr), 0)
            if (firstSum == secondSum) {
                count++;
            }
        }
    }
    return count;
};