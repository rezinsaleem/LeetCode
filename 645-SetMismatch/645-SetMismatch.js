        if (!nums.includes(i + 1)) {
            arr.push(nums[i])
        }
            arr1.push(i + 1)
        }

    }
    return [...arr, ...arr1]
};
[
