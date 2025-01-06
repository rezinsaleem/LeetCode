/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
    let count = 0
    for (let i = 1; i <= num; i++) {
        let arr = i.toString()
        let arrSum = 0

        for (let val of arr) {
            arrSum += Number(val)
        }
        if (arrSum % 2 == 0) {
            count++
        }
    }

    return count
};