/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    sentence = sentence.split(' ');
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    for (let i = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence[i][0])) {
            sentence[i] += 'ma';
        } else {
            let firstLetter = sentence[i][0];
            sentence[i] = sentence[i].slice(1) + firstLetter + 'ma';
        }
        sentence[i] += 'a'.repeat(i + 1);
    }
    
    return sentence.join(' ');
};
