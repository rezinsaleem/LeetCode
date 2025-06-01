// Last updated: 6/1/2025, 3:45:48 PM
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
    let count = 0;
    while (n > 1) {
        if (n % 2 == 0) {
            n = n / 2;
            count++;
        } else {
            if (((n - 1) / 2) % 2 == 0 || n == 3) {
                n = n - 1;
                count++;
            } else {
                n = n + 1;
                count++;
            }
        }
    }
    return count;
};