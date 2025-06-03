// Last updated: 6/3/2025, 3:59:02 PM
/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    return Math.max(...n.split('').map(Number))
};