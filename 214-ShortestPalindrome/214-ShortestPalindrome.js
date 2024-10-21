/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    const reverseString = s.split('').reverse().join('');
    const length = s.length;
    
    for (let i = 0; i < length; i++) {
        if (s.slice(0, length - i) === reverseString.slice(i)) {
            return `${reverseString.slice(0, i)}${s}`;
        }
    }
    
    return '';
};