var middleNode = (head) => {
    var left = head;
    var right = head;

    while(right != null && right.next != null){
        left = left.next;
        right = right.next.next;
    }
    return left;
}

var test1 = middleNode([1, 2 ,3, 4, 5]);
var test2 = middleNode([1, 2, 3, 4, 5, 6]);

console.log(test1);
console.log(test2);