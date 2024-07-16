    const idx = word.indexOf(ch);
    const prefix = word.substring(0, idx + 1);
    const reversedPrefix = prefix.split('').reverse().join('');
    if (!word.includes(ch)) return word
var reversePrefix = function (word, ch) {
    return reversedPrefix + word.substring(idx + 1);
};
"
