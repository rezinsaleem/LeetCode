
    let head
    
    if (list1.val < list2.val) { 
        head = list1 
        head.next = mergeTwoLists(list1.next, list2)
    } else { 
        head = list2
        head.next = mergeTwoLists(list1, list2.next)  
    }

    return head
}
[1,2,4]
