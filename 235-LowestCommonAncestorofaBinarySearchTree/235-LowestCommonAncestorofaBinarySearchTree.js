/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, q, p)
    } else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, q, p)
    }
    return root
};
[
