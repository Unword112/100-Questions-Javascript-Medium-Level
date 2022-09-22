var minSubArrayLen = (target, nums) => {
    let i;
    let result = Number.MAX_SAFE_INTEGER;
    let sum = 0, left = 0;
    for(i = 0; i < nums.length; i++){
        sum += nums[i];
        while(sum >= target){
            result = Math.min(result, i - left + 1);
            sum -= nums[left++];
        }
    }
    return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}

const test1 = minSubArrayLen(7, [2,3,1,2,4,3]);
const test2 = minSubArrayLen(4, [1,4,4]);
const test3 = minSubArrayLen(11, [1,1,1,1,1,1,1,1,1,1,1]);

console.log(test1, test2 , test3);