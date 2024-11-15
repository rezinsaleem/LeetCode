/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (s.join('') === goal) {
            return true;
        } else {
            s.push(s.shift())
        }
    }
    return false;
};