    for (let base of bases) {
        let baseString = n.toString(base);
        if (baseString !== baseString.split('').reverse().join('')) {
            return false;
        }
    }
    return true;
}
    let bases = [2, 3, 4];
var isStrictlyPalindromic = function (n) {
 */
 * @return {boolean}
9
