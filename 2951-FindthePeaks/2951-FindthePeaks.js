/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function (m) {
    const res = []
    for (let i = 1; i < m.length - 1; i++) {
        if (m[i] > m[i - 1] && m[i] > m[i + 1]) {
            res.push(i)
        }
    }
    return res;
};