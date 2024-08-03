 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    target.sort((a, b) => a - b)
    arr.sort((a, b) => a - b)
    return target.toString() === arr.toString();
};
[
[1,2,3,4]
[2,4,1,3]
[7]
[7]
[3,7,9]
[3,7,11]
true
true
false
true
true
false
