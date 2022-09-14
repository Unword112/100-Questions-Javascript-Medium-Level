var searchMatrix = (matrix, target) => {
    let i , j;
    var m = matrix.length;

    for(i = 0; i < m; i++){
        var n = matrix[i].length;
        for(j = 0; j < n; j++){
            if(target === matrix[i][j]) return true;
        }
    }

    return false;
}

const test1 = searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3);
const test2 = searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13);

console.log(test1, test2);