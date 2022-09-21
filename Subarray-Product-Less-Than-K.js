var numSubarrayProductLessThanK = (nums, k) => {
    let length = nums.length;
    let count = 0;
    for (let i = 0; i < length; i++) {
        let product = nums[i];
        if (product < k) {
            count += 1;
        } else {
            continue;
        };
        for (let j = i + 1; j < length; j++) {
            product *= nums[j];
            if (product < k) {
                count += 1;
            } else {
                break;
            };
        };
    };
    return count;
}

const test1 = numSubarrayProductLessThanK([10,5,2,6], 100);
const test2 = numSubarrayProductLessThanK([1,2,3], 0);

console.log(test1, test2);
