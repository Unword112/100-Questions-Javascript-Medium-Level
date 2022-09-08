var orangesRotting = function(grid) {
    
    let totalFreshOranges = grid.map(arr => arr.reduce((a,v) => v === 1 ? a+1 : a+0 ,0)).reduce((a,v) =>a+v)
    if (totalFreshOranges === 0) return 0;
    
    let queue = [];
    for(let r = 0; r < grid.length;r++) {
        for(let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === 2) {
                queue.push([r,c])
            }
        }
    }
    
    const [time, rotten] = bfs(grid, queue);
    if (totalFreshOranges !== rotten) return -1;
    return time;
};


function bfs(grid, q) {
    let totalTimePassed = 0;
    let freshToRotten = 0;
    
    let queue = [...q];
    while(queue.length) {
        let len = queue.length;
        for(let i = 0; i < len; i++){
            let [row, col] = queue.shift()
            if (grid[row+1] && grid[row+1][col] === 1) { 
                grid[row+1][col] = 2;
                queue.push([row+1,col])
                freshToRotten++
            }
            if (grid[row-1] && grid[row-1][col] === 1) {
                grid[row-1][col] = 2;
                queue.push([row-1,col])
                freshToRotten++
            }
            if (grid[row][col+1] === 1) {
                grid[row][col+1] = 2;
                queue.push([row,col+1])
                freshToRotten++
            }
            if (grid[row][col-1] === 1) { 
                grid[row][col-1] = 2;
                queue.push([row,col-1])
                freshToRotten++
            }
        }
        totalTimePassed++;
    }

    return [totalTimePassed-1, freshToRotten];
}

const test1 = orangesRotting([[2,1,1],[1,1,0],[0,1,1]]);
const test2 = orangesRotting([[2,1,1],[0,1,1],[1,0,1]]);
const test3 = orangesRotting([[0,2]]);

console.log(test1, test2, test3);