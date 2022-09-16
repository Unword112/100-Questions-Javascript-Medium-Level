var findPeakElement = (nums) => {
    if(nums.length === 1) return 0
    for(let i = 1; i < nums.length - 1; i++) {
        if(nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i
        }
    }
    
    if(nums[0] > nums[1])
        return 0
    if(nums[nums.length - 1] > nums[nums.length - 2])
        return nums.length - 1
    return 0
}

const test1 = findPeakElement([1,2,3,1]);
const test2 = findPeakElement([1,2,1,3,5,6,4]);
const test3 = findPeakElement([6,5,4,3,2,3,2]);
console.log(test1, test2);
console.log(test3);