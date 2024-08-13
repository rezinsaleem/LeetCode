 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    return words.filter(n => words.some(h => h !== n && h.includes(n)));
};
[
["mass","as","hero","superhero"]
["leetcode","et","code"]
["blue","green","bu"]
["as","hero"]
["et","code"]
[]
["as","hero"]
["et","code"]
[]
