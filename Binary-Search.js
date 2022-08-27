const search = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] === target) return mid;
        else if(nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
}

nums = [-1,0,3,5,9,12]
const target1 = 9;
const target2 = 2;

console.log(search(nums, target1));
console.log(search(nums, target2));