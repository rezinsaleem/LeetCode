        n = n.reduce((acc, curr) => acc + (Number(curr) ** 2), 0)
        n = n.toString().split('')
    while (n.toString().split('').length > 1) {
    }
    if (n == 1 || n == 7) return true;
    else return false;
};
1
19
2
7
3
true
false
true
false
true
false
true
false
