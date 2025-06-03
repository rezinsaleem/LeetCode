// Last updated: 6/3/2025, 3:50:36 PM
/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
    let res = ''
    for (let i = 0; i < s.length; i++) {
        if (i % 2 != 0) {
            let elem = String.fromCharCode(s[i-1].charCodeAt(0) + parseInt(s[i]));
            res += elem
        } else {
            res += s[i]
        }
    }
    return res;
};