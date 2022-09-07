var updateMatrix = function(mat) {
    let queue = [];
    let directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    
    for(let row = 0; row < mat.length; row++) {
        for(let col = 0; col < mat[0].length; col++) {
            if(mat[row][col] === 1) {
                mat[row][col] = Infinity;
            } else {
                queue.push([row, col, 0]);
            }
        }
    }
    
    while(queue.length) {
        let [row, col, dist] = queue.shift();
        
        if(mat[row][col] > dist) mat[row][col] = dist;
        
        for(let [dx, dy] of directions) {
            let newX = dx + row;
            let newY = dy + col;
            
            if(newX >= 0 && newX < mat.length && newY >= 0 && newY < mat[0].length) {
                if(mat[newX][newY] === Infinity) {
                    queue.push([newX, newY, dist + 1]);
                }
            }
        }
    }
    return mat;
};

const mat = updateMatrix([[0,0,0],[0,1,0],[0,0,0]]);
const mat1 = updateMatrix([[0,0,0],[0,1,0],[0,0,0]]);

console.log(mat, mat1);