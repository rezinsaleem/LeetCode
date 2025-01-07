/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    return words.filter(n => words.some(h => h !== n && h.includes(n)));
};