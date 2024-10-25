/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    let maxProduct = 0;

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            let flag = true;

            for (let char of words[i]) {
                if (words[j].includes(char)) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
            }
        }
    }

    return maxProduct;
};