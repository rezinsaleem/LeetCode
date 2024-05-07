    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }
    return [...sorted, ...left, ...right]
}
    let sorted = []
function merge(left, right) {

};
    return merge(sortArray(left), sortArray(right))
[
