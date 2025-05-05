// Last updated: 5/6/2025, 3:37:20 AM
/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let obj={}
    for(let i of s) obj[i]=obj[i]+1||1
    return new Set(Object.values(obj)).size==1
};