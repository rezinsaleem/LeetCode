// Last updated: 6/13/2025, 6:17:33 PM
/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let count = 1;
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            set.add(s[i]);
        } else {
            count++;
            set = new Set([s[i]]);
        }
    }
    return count;
};