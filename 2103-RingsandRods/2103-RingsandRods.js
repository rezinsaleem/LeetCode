// Last updated: 5/31/2025, 1:19:09 PM
/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
    let obj = {}
    for (let i = 0; i < rings.length; i += 2) {
        if (!obj[rings[i + 1]]) {
            obj[rings[i + 1]] = new Set()
        }
        obj[rings[i + 1]].add(rings[i])

    }
    let values = Object.values(obj)
    let res = 0
    for (let set of values) {
        if (set.has('R') && set.has('G') && set.has('B')) {
            res++;
        }
    }
    return res;
};