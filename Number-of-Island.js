var numIslands = (grid) => {
    if(grid === null || grid.length === 0) { return [] }
    
    let count = 0
    
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] === '1') {
                bfs([i,j], grid)
                count++
            }
        }   
    }
    
    return count
}

const bfs = function (start, grid) {
    let queue = [],
        cache = []
    
    queue.push(start)
    grid[start[0]][start[1]] = '0' // mark as visited
    
    while(queue.length !== 0) {
        let point = queue.shift(),
            r = point[0],
            c = point[1]
        
        for (const [dx,dy] of directions) {
            let nRow = r + dx,
                nCol = c + dy

            if (nRow < 0 || nCol < 0 
                || nRow >= grid.length || nCol >= grid[0].length
                || grid[nRow][nCol] === '0') {
                continue
            }
            
            grid[nRow][nCol] = '0'    // mark as visited
            cache.push([nRow,nCol])
        }
        
        if (queue.length === 0 && cache.length > 0) {
            queue.push(...cache)
            cache = []
        }
        
    }
}

const directions = [[1,0], [-1,0], [0,1], [0,-1]]

const test1 = numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]);
const test2 = numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]);

console.log(test1, test2);