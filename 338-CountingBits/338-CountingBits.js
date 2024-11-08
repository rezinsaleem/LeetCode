/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let result = [0]
  for (let i = 1; i <= n; i++) {
    result[i] = result[i & (i - 1)] + 1
  }
  
  return result
};