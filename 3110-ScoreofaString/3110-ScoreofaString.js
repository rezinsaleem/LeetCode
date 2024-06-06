/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    for(let i=0;i<s.length-1;i++){
    let score =  0;
        score+=Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1))
    }
    return score;
};
"
