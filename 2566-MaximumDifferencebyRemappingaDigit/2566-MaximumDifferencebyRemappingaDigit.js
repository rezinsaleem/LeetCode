// Last updated: 6/14/2025, 1:05:55 PM
/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
    let numArr = num.toString().split('')
    let max = ''
    let min = ''
    let first = numArr.findIndex(num => num !== '9')
    let second = numArr.findIndex(num => num !== '0')
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === numArr[first]) {
            max += '9'
        } else {
            max += numArr[i]
        }

        if (numArr[i] === numArr[second]) {
            min += '0'
        } else {
            min += numArr[i]
        }
    }

    return Number(max) - Number(min)
}
