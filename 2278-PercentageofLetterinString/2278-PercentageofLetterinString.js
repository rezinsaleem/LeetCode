// Last updated: 1/30/2026, 7:47:00 PM
1/**
2 * @param {string} s
3 * @param {character} letter
4 * @return {number}
5 */
6var percentageLetter = function(s, letter) {
7    if(!s.includes(letter)) return 0;
8    let obj ={}
9    for(let i=0;i<s.length;i++){
10        obj[s[i]] = obj[s[i]] ? obj[s[i]]+=1 : 1;
11    }
12    return Math.floor((obj[letter]/s.length)*100)
13};