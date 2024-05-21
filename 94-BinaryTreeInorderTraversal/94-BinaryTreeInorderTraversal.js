 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const inOrder = (root => {
        if (root) {
            inOrder(root.left)
            arr.push(root.val)
            inOrder(root.right)
        }
    const arr = []
    })
    inOrder(root)
    return arr
};
[
