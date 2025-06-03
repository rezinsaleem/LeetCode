// Last updated: 6/3/2025, 2:45:09 PM
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function (s, k) {
    let result = '';

    for (let i = 0; i < s.length; i += k) {
        let group = s.substring(i, i + k);
        let sum = group.split('').reduce((acc, char) => acc + (char.charCodeAt(0) - 97), 0);
        sum = sum % 26;
        result += String.fromCharCode(sum + 97);
    }

    return result;
};
