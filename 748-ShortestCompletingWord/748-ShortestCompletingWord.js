// Last updated: 6/4/2025, 2:02:48 PM
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (lp, words) {
    lp = lp.replace(/[^a-zA-Z]/g, '').toLowerCase();

    const getCount = (str) => {
        const count = {};
        for (let ch of str) {
            count[ch] = (count[ch] || 0) + 1;
        }
        return count;
    }

    const lpCount = getCount(lp);
    let small = null;

    for (let word of words) {
        const wordCount = getCount(word.toLowerCase());
        let flag = true;

        for (let ch in lpCount) {
            if (!wordCount[ch] || wordCount[ch] < lpCount[ch]) {
                flag = false;
                break;
            }
        }

        if (flag) {
            if (small === null || word.length < small.length) {
                small = word;
            }
        }
    }

    return small;
};

