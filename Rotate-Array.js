var rotate = function(nums, k) {
    nums.unshift(...nums.splice(nums.length - (k % nums.length)));
    
    //Time Limit Exceeded
    /*for(let i = 0; i < k % nums.length; i++){
        nums.unshift(nums.pop());
    }
    return nums;*/
};

const test1 = rotate([1,2,3,4,5,6,7], 3);
const test2 = rotate([-1,-100,3,99], 2);

console.log(test1, test2);