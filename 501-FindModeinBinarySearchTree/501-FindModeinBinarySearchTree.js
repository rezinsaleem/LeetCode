    let res = [];
    for (const key in obj) {
        if (obj[key] === maxFreq) {
            res.push(Number(key));
        }
    }
    return res;
};

[
