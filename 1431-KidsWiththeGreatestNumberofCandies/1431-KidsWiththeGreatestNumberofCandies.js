/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const res = []
    for (let i = 0; i < candies.length; i++) {
        let max = Math.max(...candies)
        if ((candies[i] + extraCandies) >= max) {
            res.push(true)
        } else {
            res.push(false)
        }
    }
    return res
};