var mergeTwoLists = (list1, list2) => {
    var merged = [];
    merged.push(...list1, ...list2);
    return merged.sort();

    /*if (!l1) {
        return l2;
      }
      if (!l2) {
        return l1;
      }
      const val1 = l1.val;
      const val2 = l2.val;
      let mergedNode;
      if (val1 < val2) {
        mergedNode = new ListNode(val1);
        mergedNode.next = mergeTwoLists(l1.next, l2);
      } else {
        mergedNode = new ListNode(val2);
        mergedNode.next = mergeTwoLists(l2.next, l1);
      }
      return mergedNode;*/
}

const test1 = mergeTwoLists([1,2,4], [1,3,4]);
const test2 = mergeTwoLists([], []);
const test3 = mergeTwoLists([], [0]);

console.log(test1, test2, test3);