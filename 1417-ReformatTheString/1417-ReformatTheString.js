/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
    let numset = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])
    let charstring = ""
    let numstring = ""
    for (let i = 0; i < s.length; i++) {
        if (numset.has(s[i])) {
            numstring += s[i];
        } else {
            charstring += s[i]
        }
    }
    let res = ''
    if (charstring.length - numstring.length === 0) {
        for (let i = 0; i < numstring.length; i++) {
            res += numstring[i]
            res += charstring[i]
        }
    } else if (charstring.length - numstring.length === -1) {
        for (let i = 0; i < numstring.length; i++) {
            res += numstring[i]
            if (charstring[i]) {
                res += charstring[i]
            }
        }
    } else if (charstring.length - numstring.length === 1) {
        for (let i = 0; i < charstring.length; i++) {
            res += charstring[i]
            if (numstring[i]) {
                res += numstring[i]
            }
        }
    }
    return res
};