    }
    for (let i = nums.length - 1; i >= 0; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]]
        minHeap(nums, i, 0)
    }
    return nums[k - 1]
        }
};
[
