/**
 * @param {string} s
 * @return {boolean}
 */
var isCircularSentence = function (s) {
    s = s.split(' ');
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        let next = s[(i + 1) % s.length];
        if (curr[curr.length - 1] !== next[0]) {
            return false;
        }
    }
    return true;
};
