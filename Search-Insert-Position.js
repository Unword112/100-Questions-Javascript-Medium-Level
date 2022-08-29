const searchInsert = (nums, target) => {
    var start = 0;
    var end = nums.length - 1;
    
    while(start < end){
        var mid = Math.floor((start + end) / 2);
        if(nums[mid] === target) return mid;
        if(nums[mid] > target) end = mid
        else start = mid + 1;
    }
    if(start === end){
        if(target <= nums[start]) return start;
        else return start + 1;
    }
}

const test1 = searchInsert([1,3,5,6], 5);
const test2 = searchInsert([1,3,5,6], 2);
const test3 = searchInsert([1,3,5,6], 7);

console.log(test1, test2, test3);