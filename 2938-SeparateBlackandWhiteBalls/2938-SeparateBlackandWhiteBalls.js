/**
 * @param {string} s
 * @return {number}
 */
function minimumSteps(s) {
    let ans = 0, c = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            c++;
        } else {
            ans += c;
        }
    }
    return ans;
}
