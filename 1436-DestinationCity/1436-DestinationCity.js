// Last updated: 5/20/2025, 1:10:36 PM
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    paths = paths.flat(2)
    const second = []
    const first = []
    for (let i = 0; i < paths.length; i++) {
        if (i % 2 != 0) {
            second.push(paths[i])
        } else {
            first.push(paths[i])
        }
    }
    for (let j = 0; j < second.length; j++) {
        if (!first.includes(second[j])) {
            return second[j]
        }
    }

};