/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    let maxSum = 0;
    let currentSum = 0;
    let numSet = new Set();

    let start = 0;
    for (let end = 0; end < nums.length; end++) {
        while (numSet.has(nums[end])) {
            numSet.delete(nums[start]);
            currentSum -= nums[start];
            start++;
        }

        numSet.add(nums[end]);
        currentSum += nums[end];

        if (end - start + 1 === k) {
            maxSum = Math.max(maxSum, currentSum);

            currentSum -= nums[start];
            numSet.delete(nums[start]);
            start++;
        }
    }

    return maxSum;
};
