var findMin = (nums) => {
    var left = 0
    var right = nums.length - 1;

    while(right > left){
        let mid = Math.floor(left + (right - left) / 2);
        if(nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }
    return nums[left];
}

const test1 = findMin([3,4,5,1,2]);
const test2 = findMin([4,5,6,7,0,1,2]);
const test3 = findMin([11,13,15,17]);

console.log(test1, test2, test3);