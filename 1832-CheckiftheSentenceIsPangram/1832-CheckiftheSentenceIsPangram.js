var checkIfPangram = function (sentence) {
    const myset = new Set()
    for (let i = 0; i < sentence.length; i++) {
        myset.add(sentence[i])
    }
    if (myset.size === 26) return true;
    else return false;
};
"
"thequickbrownfoxjumpsoverthelazydog"
"leetcode"
true
false
true
false
