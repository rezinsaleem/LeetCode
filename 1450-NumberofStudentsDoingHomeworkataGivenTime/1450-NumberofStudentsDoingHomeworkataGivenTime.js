// Last updated: 6/9/2025, 7:50:12 PM
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
    let count = 0;
    for (let i = 0; i < startTime.length; i++) {
        if ((startTime[i] <= queryTime) && (queryTime <= endTime[i])) {
            count++;
        }
    }
    return count;
};