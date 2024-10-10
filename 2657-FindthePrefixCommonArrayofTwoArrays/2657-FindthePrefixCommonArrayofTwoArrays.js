/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let res = []
    for (let i = 0; i < A.length; i++) {
        let count = 0;
        for (let j = 0; j <= i; j++) {
            let arr = B.slice(0, i + 1)
            if (arr.includes(A[j])) {
                count++;
            }
        }
        res.push(count)
    }
    return res;
};