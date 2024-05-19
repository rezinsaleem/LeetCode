 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    const arr = []
    const inOrder = ((root) => {
        if (root) {
            inOrder(root.left)
            arr.push(root.val)
            inOrder(root.right)
        }
[5,3,6,2,4,null,8,1,null,null,null,7,9]
