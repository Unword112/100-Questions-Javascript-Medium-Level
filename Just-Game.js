var jump = function(nums) {
    let n = nums.length;
    let oldMax = 0;
    let newMax = 0;
    let cnt = 0;

    for (let i = 0; i < n - 1; i++) {
        newMax = Math.max(nums[i] + i, newMax);

        if (i === oldMax) {
        cnt++;
        oldMax = newMax;
        }
    }
    return cnt;
};

const test1 = jump([2,3,1,1,4]);
const test2 = jump([2,3,0,1,4]);

console.log(test1, test2);