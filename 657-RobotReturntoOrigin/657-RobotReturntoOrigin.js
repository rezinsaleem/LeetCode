/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    moves = moves.split('')
    let obj = {}
    for (let i = 0; i < moves.length; i++) {
        obj[moves[i]] = obj[moves[i]] ? obj[moves[i]] += 1 : 1;
    }
    if (obj['U'] === obj['D'] && obj['L'] === obj['R']) return true
    else return false
};