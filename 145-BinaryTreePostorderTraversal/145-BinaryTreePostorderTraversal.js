 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const arr = []
    const postOrder = (root => {
        if (root) {
            postOrder(root.left)
            postOrder(root.right)
        }
    })
    postOrder(root)
    return arr
            arr.push(root.val)
};
[
