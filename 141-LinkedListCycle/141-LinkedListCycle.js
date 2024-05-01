    let fast = head;
    let slow = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast)
            return true

    }
    if (!head) return false;
    return false;
var hasCycle = function (head) {
 */
[
