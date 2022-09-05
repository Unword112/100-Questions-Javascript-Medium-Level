var maxAreaOfIsland = function(grid) {
    let res = 0;
    
    let BFS = (row,col) => {
        if(row < 0 || row >= grid.length || col < 0 || col >= grid[0].length)
            return 0;
        
        if(grid[row][col] === 1) 
            grid[row][col] = 0;
        else return 0;
        
        return BFS(row + 1,col) + BFS(row - 1,col) + BFS(row,col + 1) + BFS(row,col - 1) + 1;  
    }
    
    for(let i = 0; i < grid.length; i++) {
        for(let j=0;j < grid[0].length;j++) {
            if(grid[i][j] === 1) {
                res = Math.max(BFS(i,j),res);
            }
        }
    }
    
    return res;
};

const test1 = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];
const test2 = [[0,0,0,0,0,0,0,0]];

console.log(maxAreaOfIsland(test1));
console.log(maxAreaOfIsland(test2));