// Last updated: 6/3/2025, 3:33:11 PM
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
    let one = Math.abs(x - z)
    let two = Math.abs(y - z)
    console.log(one,two)
    if (one > two) {
        return 2;
    } else if (two > one) {
        return 1;
    } else {
        return 0;
    }
};