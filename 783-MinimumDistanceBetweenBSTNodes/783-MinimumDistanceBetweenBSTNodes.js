        }
    })
    inOrder(root)
    console.log(arr)
    let min = arr[1] - arr[0]
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] < min) {
            min = arr[i + 1] - arr[i]
        }
    }
    return min
};
[
