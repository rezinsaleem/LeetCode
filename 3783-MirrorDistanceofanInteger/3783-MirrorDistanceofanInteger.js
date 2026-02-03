// Last updated: 2/4/2026, 12:50:21 AM
1/**
2 * @param {number} n
3 * @return {number}
4 */
5var mirrorDistance = function (n) {
6    let reverse = n.toString().split('').reverse().join('')
7    return Math.abs(reverse - n)
8};