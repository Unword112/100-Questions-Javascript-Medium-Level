var threeSum = (nums) => {
    let i;
    let sortedArrr = nums.sort((a, b) => a - b);
    let res = [];

    for(i = 0; i < nums.length - 2; i++){
        if(i === 0 || nums[i] > nums[i - 1]){
            let start = i + 1;
            let end = nums.length - 1;

            while(start < end){
                if((nums[i] + nums[start] + nums[end]) === 0) res.push([nums[i], nums[start], nums[end]])
                if((nums[i] + nums[start] + nums[end]) < 0){
                    let currStart = start;
                    while(nums[start] === nums[currStart] && start < end) start++;
                } else {
                    let currEnd = end;
                    while(nums[end] === nums[currEnd] && start < end) end--;
                }
            }
        }
    }
    return res;
}

const test1 = threeSum([-1, 0, 1, 2 , -1, -4]);
const test2 = threeSum([0,1,1]);

console.log(test1, test2);