 */
var levelOrderBottom = function (root) {
    if (!root) return []
    const res = []
    let queue = [root]
    while (queue.length > 0) {
        let level = []
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()
            level.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        res.push(level)
        const levelSize = queue.length;
[
