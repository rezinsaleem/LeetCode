        return false
    }
    if (high !== null && high <= root.val) {
        return false
    }
    return isValidBST(root.left, low, root.val) && isValidBST(root.right, root.val, high)
};
    if (low !== null && low >= root.val) {
[
