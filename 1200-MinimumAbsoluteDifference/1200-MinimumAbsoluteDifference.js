    const result = []
        if (arr[i + 1] - arr[i] < mindiff) {
            mindiff = arr[i + 1] - arr[i]
        }
    }
    for (let i = 1; i < arr.length - 1; i++) {
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] == mindiff) {
            result.push([arr[i], arr[i + 1]])
    let mindiff = arr[1] - arr[0]
var minimumAbsDifference = function (arr) {
 */
[
