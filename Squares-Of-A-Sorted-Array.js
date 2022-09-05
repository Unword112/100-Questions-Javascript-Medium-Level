var sortedSquares = (nums) => {
    if(nums === null || nums.length === 0) return false;
    
    var arr = [];
    for(let i = 0; i < nums.length; i++ ){
        nums[i] = Math.pow(nums[i], 2);
        arr.push(nums[i]);
    }
    return arr.sort((a, b) => a - b);
};

const test1 = sortedSquares([-7,-3,2,3,11]);
const test2 = sortedSquares([-4,-1,0,3,10]);

console.log(test1, test2);