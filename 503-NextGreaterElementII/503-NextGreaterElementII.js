/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let res = [];
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let found = false;

        for (let j = i + 1; j < i + n; j++) {
            let index = j % n;

            if (nums[index] > nums[i]) {
                res.push(nums[index]);
                found = true;
                break;
            }
        }

        if (!found) {
            res.push(-1);
        }
    }

    return res;
};
