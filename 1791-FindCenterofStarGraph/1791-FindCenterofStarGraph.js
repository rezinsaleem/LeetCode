    let n = edges.length;
    edges = edges.flat()
    for (let i = 0; i < edges.length; i++) {
    let countObj = {};
        if (countObj[edges[i]]) {
            countObj[edges[i]] += 1
        } else {
            countObj[edges[i]] = 1
        }

    for (let key in countObj) {
    }
        if (countObj[key] == n) return key;
    }
};
[
