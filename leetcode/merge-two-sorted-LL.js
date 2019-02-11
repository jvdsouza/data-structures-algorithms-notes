function ListNode(val) {
   this.val = val;
   this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    let node1 = l1;
    let node2 = l2;

    if(node1.val < node2.val) {
        head = ListNode(node1)
        currentNode = head
        node1 = node1.next
    } else {
        head = ListNode(node2)
        currentNode = head
        node2 = node2.next
    }

    while (node1 || node2) {
        if (node1.next.val > node2.next.val || node1 == null) {
            currentNode.next = node2
            node2 = node2.next
        } else {
            currentNode.next = node1
            node1 = node1.next
        }
        currentNode = currentNode.next
    }

    return head
};
