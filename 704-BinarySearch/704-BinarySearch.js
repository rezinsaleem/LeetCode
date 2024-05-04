    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] == target) {
            return mid
        }
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
    let right = nums.length - 1;
    let left = 0;
};
var search = function (nums, target) {
[
