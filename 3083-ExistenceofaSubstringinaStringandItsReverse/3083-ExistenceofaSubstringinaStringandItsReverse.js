/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
    
    const subs = new Set();

    for(let i = 1; i < s.length; i++) {

        if(s[i] === s[i - 1] || subs.has( `${s[i]}${s[i - 1]}`)) return true;

        subs.add(`${s[i - 1]}${s[i]}`);
    }

    return false;
};