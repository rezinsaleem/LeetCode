 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let count = 0;
    while (tickets[k] !== 0) {
        for (i = 0; i < tickets.length; i++) {
            if (tickets[i] == 0) {
                continue;
            } else if (tickets[k] == 0) {
                break;
            } else {
                tickets[i] -= 1;
                count++
            }
        }
    }
    return count;
};
/**
[
