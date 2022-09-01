var middleNode = (head) => {
    console.log(head.splice(head.length / 2));

}

var test1 = [1, 2 ,3, 4, 5];
var test2 = [1, 2, 3, 4, 5, 6];

console.log(middleNode(test1));
console.log(middleNode(test2));