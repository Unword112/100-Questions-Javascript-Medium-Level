var removeNthFromEnd = (head, n) => {
    var reverse = head.reverse();
    reverse = reverse.filter(item => item !== reverse[n-1]);
    head = reverse.reverse();
    return head;

}

var test1 = removeNthFromEnd([1,2,3,4,5], 2);
var test2 = removeNthFromEnd([1], 1);

console.log(test1);
console.log(test2);