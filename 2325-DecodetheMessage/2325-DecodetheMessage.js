// Last updated: 6/3/2025, 12:53:32 PM
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    key = key.replaceAll(" ", "").split('')
    let keyArr = [...new Set(key)]
    keyArr.push(' ')
    let alphArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']
    let res = ''
    for (let i = 0; i < message.length; i++) {
        res += alphArr[keyArr.indexOf(message[i])]
    }
    return res;
};