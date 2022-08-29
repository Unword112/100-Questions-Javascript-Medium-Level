var moveZeroes = (nums) => {
    for(let i = nums.length - 1; i >= 0; --i){
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
}

const test1 = moveZeroes([0,1,0,3,12]);
const test2 = moveZeroes([0]);

console.log(test1, test2);