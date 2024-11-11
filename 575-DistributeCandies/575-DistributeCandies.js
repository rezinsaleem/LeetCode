/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    const uniqueCandy = [...new Set(candyType)]
    if ((candyType.length / 2) >= uniqueCandy.length) {
        return uniqueCandy.length
    } else {
        return candyType.length / 2;
    }
}
