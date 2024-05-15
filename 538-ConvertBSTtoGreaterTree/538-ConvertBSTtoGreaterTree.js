            sum += root.val
            root.val = sum
            inOrder(root.left)
        }
    })
    inOrder(root)
    return root
};
[
