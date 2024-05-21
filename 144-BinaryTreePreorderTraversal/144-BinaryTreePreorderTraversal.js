    const preOrder = (root => {
        if (root) {
            arr.push(root.val)
            preOrder(root.right)
        }
    })
    preOrder(root)
            preOrder(root.left)
    return arr
};
[
