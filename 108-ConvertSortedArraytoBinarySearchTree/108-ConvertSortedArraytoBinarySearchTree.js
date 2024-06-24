 */
var sortedArrayToBST = function(nums) {
    if(nums.length == 0) return null;
    if(nums.length == 1) return new TreeNode(nums[0])
    let mid = Math.floor(nums.length/2)
    var node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums.slice(0, mid))
    node.right = sortedArrayToBST(nums.slice(mid +1))
    return node;
};
[
