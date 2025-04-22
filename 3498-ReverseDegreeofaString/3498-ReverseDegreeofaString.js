// Last updated: 4/23/2025, 12:37:54 AM
/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const charValue = 123 - (s.charCodeAt(i));
        sum += (charValue * (i + 1));
    }
    return sum;
};