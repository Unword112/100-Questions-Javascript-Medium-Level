var isValid = (i, j, rows, cols) => {
    if(i < 0 || j < 0 || i >= rows || j >= cols) return false;
    else return true;
}



var maxAreaOfIsland = (grid) => {
    
};



const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];
const grid0 = [[0,0,0,0,0,0,0,0]];

console.log(maxAreaOfIsland(grid));
console.log(maxAreaOfIsland(grid0));