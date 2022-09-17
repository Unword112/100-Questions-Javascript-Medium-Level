var deleteDuplicates = (head) => {
    const dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    let curr = head;

    while (curr?.next) {
        if (curr.val === curr.next.val) {
        const val = curr.val;

        while (curr?.val === val) {
            curr = curr.next;
        }

        prev.next = curr;
        } else {
        prev = curr;
        curr = curr.next;
        }
    }

  return dummy.next
}

const test1 = deleteDuplicates([1,2,3,3,4,4,5]);
const test2 = deleteDuplicates([1,1,1,2,3]);

console.log(test1, test2);