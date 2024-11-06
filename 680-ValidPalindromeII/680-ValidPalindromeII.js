/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s[i] != s[j]) {
            return isPalindrome(s.slice(i+1, j + 1)) || isPalindrome(s.slice(i, j))
        }
    }
    return true
};

var isPalindrome =  function(s) {
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        if (s[i] != s[j]) {
            return false
        }
    }
    return true
}