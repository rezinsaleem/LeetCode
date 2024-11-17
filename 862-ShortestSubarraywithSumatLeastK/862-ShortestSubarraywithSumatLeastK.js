var shortestSubarray = function (nums, target) {
    let n = nums.length;
    let currentSum = 0;
    let shortestLength = Infinity;
    let deque = [];

    for (let i = 0; i < n; i++) {
        currentSum += nums[i];

        if (currentSum >= target) {
            shortestLength = Math.min(shortestLength, i + 1);
        }

        while (deque.length > 0 && currentSum - deque[0].sum >= target) {
            shortestLength = Math.min(shortestLength, i - deque[0].index);
            deque.shift();
        }

        while (deque.length > 0 && currentSum <= deque[deque.length - 1].sum) {
            deque.pop();
        }

        deque.push({ sum: currentSum, index: i });
    }

    return shortestLength === Infinity ? -1 : shortestLength;
};
