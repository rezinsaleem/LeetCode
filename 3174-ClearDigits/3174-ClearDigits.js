// Last updated: 6/6/2025, 3:44:23 PM
/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let res = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] < 'a' || s[i + 1] > 'z') {
            res.pop()
        } else {
            res.push(s[i])
        }
    }
    return res.join('')
};