    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    let j = 0;
    while (n > 1) {
        j = (j + (k - 1)) % n;
        arr.splice(j, 1);
        n--;
5
