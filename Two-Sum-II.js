var twoSum = (numbers, target) => {
    var start = 0;
    var end = numbers.length - 1;

    while (start < end) {
        var sum = numbers[start] + numbers[end];
        if(sum === target) break;
        else if(sum < target) start++;
        else end--;
    }
    return [start + 1, end + 1];
}

const test1 = twoSum([2,7,11,15], 9);
const test2 = twoSum([2,3,4], 6);
const test3 = twoSum([-1,0], -1);

console.log(test1, test2, test3);