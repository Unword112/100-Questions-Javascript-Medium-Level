var connect = (root) => {
    let temp = root;
    while (temp && temp.left) {
        const next = temp.left;
        while (temp) {
            temp.left.next = temp.right;
            temp.right.next = temp.next && temp.next.left;
            temp = temp.next;
        }
        temp = next;
    }
    return root;
}

const root = [1, 2, 3, 4, 5, 6, 7];
const root1 = [];

console.log(connect(root), connect(root1));