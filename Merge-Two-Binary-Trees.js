var mergeTrees = function(root1, root2) {
    var merge = [], i;
    for(i = 0; i < Math.max(root1.length, root2.length); i++){
        merge.push((root1[i] || null) + (root2[i] || null));
    }

    for(i = 0; i < merge.length; i++){
        if(merge[i] == 0) merge[i] = null;
    }
    return merge;
};

const root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7];
const root3 = [1] , root4 = [1, 2];

console.log(mergeTrees(root1, root2));
console.log(mergeTrees(root3, root4));