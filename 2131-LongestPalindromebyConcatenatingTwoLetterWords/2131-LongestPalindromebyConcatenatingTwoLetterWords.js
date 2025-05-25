// Last updated: 5/25/2025, 5:52:49 PM
var longestPalindrome = function (words) {
    let res = 0;
    let diff = new Map();
    let same = new Map();
    let usedMiddle = false;

    // Count frequencies
    for (let w of words) {
        if (w[0] === w[1]) {
            same.set(w, (same.get(w) || 0) + 1);
        } else {
            diff.set(w, (diff.get(w) || 0) + 1);
        }
    }

    for (let [w, freq] of diff) {
        let rev = w[1] + w[0];

        if (diff.has(rev)) {
            let pairCount = Math.min(freq, diff.get(rev));
            res += pairCount * 4;
            diff.set(w, 0);      
            diff.set(rev, 0);    
        }
    }

    for (let [w, freq] of same) {
        res += Math.floor(freq / 2) * 4;
        if (freq % 2 === 1 && !usedMiddle) {
            res += 2;
            usedMiddle = true;
        }
    }

    return res;
};
