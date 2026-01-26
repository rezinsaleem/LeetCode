// Last updated: 1/27/2026, 12:56:01 AM
1/**
2 * @param {number[]} arr
3 * @return {number[][]}
4 */
5
6var minimumAbsDifference = function (arr) {
7    arr = arr.sort((a, b) => a - b);
8    let min = arr[1] - arr[0]
9    for (let i = 1; i < arr.length - 1; i++) {
10        if (arr[i + 1] - arr[i] < min) {
11            min = arr[i + 1] - arr[i]
12        }
13    }
14    const result = []
15    for (let i = 0; i < arr.length; i++) {
16        if (arr[i + 1] - arr[i] == min) {
17            result.push([arr[i], arr[i + 1]])
18        }
19    }
20    return result
21};