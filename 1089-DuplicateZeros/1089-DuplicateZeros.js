// Last updated: 6/1/2025, 3:36:45 PM
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let n = arr.length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i + 1, 0, 0)
            i++;
            arr.pop()
        }
    }
};