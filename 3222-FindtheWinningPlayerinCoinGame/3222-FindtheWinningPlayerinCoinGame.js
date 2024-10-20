/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function(x, y) {
    var turns = Math.min(x, Math.floor(y / 4));
    return (turns % 2 === 1) ? "Alice" : "Bob";
};

