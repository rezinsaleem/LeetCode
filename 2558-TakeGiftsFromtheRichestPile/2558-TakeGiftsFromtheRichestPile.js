/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
    for (let i = 1; i <= k; i++) {
        let max = Math.max(...gifts)
        let j = gifts.indexOf(max)
        let root = Math.floor(Math.sqrt(max))
        gifts[j] = root

    }
    return gifts.reduce((sum, x) => sum + x, 0)
};