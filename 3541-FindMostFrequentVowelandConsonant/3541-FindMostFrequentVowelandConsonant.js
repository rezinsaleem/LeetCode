// Last updated: 6/3/2025, 12:31:10 PM
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let consonants = {}
    let vowel = {}
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            vowel[s[i]] = (vowel[s[i]] || 0) + 1;
        } else {
            consonants[s[i]] = (consonants[s[i]] || 0) + 1;
        }
    }
    console.log(vowel, consonants)
    let sum = Math.max(0, ...Object.values(vowel)) + Math.max(0, ...Object.values(consonants))
    return sum;
};