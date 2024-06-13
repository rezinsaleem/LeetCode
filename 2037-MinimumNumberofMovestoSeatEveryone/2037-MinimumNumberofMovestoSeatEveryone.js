    students.sort((a,b)=>a-b)
    let move = 0;
    for (i = 0; i < seats.length; i++) {
            move = move + Math.abs(seats[i] - students[i])
    }
    seats.sort((a,b)=>a-b)
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
/**
    return move
};
[
