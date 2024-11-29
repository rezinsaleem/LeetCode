/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    const res = [0]
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === 'D') {
            res.push(2 * res[res.length - 1])
        } else if (ops[i] === '+') {
            res.push(res[res.length - 2] + res[res.length - 1])
        } else if (ops[i] === 'C') {
            res.pop()
        } else {
            res.push(Number(ops[i]))
        }
    }
    return res.reduce((acc, curr) => acc + curr, 0)
};