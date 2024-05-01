        return null;
    }
    let curr = head
    while (head.next !== null) {
        if (curr && curr.val === val) {
            curr = curr.next
        }
        else if (head.next.val == val) {
            head.next = head.next.next
        } else {
            head = head.next
        }

    }
    return curr
    if (head.next == null && head.val == val) {
    if(!head) return null;
[
