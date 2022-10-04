var connect = (root) => {
    if(!root) return null;
    var q = [];
    q.push(root);
    
    while(q.length){
        for(let i = 0; i < q.length; i++){
            var node = q.shift();
            if(i < q.length - 1) node.next = q[0];
            if(node.right) q.push(node.right);
            if(node.left) q.push(node.left);
        }
    }
    return root;
}

const test1 = connect([1,2,3,4,5,null,7]);
const test2 = connect([]);

console.log(test1 , test2);