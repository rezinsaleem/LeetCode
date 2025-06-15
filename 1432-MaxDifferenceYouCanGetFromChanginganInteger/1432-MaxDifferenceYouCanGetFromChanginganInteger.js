// Last updated: 6/16/2025, 1:31:40 AM
/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(n) {
    let str = n.toString(), hi = n, lo = n;
    for (let ch of str) {
        if (ch !== '9') {
            hi = parseInt(str.replaceAll(ch, '9'));
            break;
        }
    }
    if (str[0] === '1') {
        for (let i = 1; i < str.length; i++) {
            if (str[i] !== '1' && str[i] !== '0') {
                lo = parseInt(str.replaceAll(str[i], '0'));
                break;
            }
        }
    } else {
        lo = parseInt(str.replaceAll(str[0], '1'));
    }
    return hi - lo;
};
