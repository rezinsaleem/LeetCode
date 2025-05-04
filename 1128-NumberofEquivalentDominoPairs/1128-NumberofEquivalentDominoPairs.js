// Last updated: 5/4/2025, 4:35:27 PM
var numEquivDominoPairs = function(dominoes) {
    let map = new Map();
    let res = 0;

    for (let [a, b] of dominoes) {
        let key = a < b ? `${a}${b}` : `${b}${a}`;
        let count = map.get(key) || 0;
        res += count;
        map.set(key, count + 1);
    }

    return res;
};
