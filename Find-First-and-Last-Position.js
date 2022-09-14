var searchRange = (nums, target) => {
    var _AT = [], i;

    for(i = 0; i < nums.length; i++){
        if(nums.includes(target)){
            if(nums[i] === target) _AT.push(i);
        } else {
            _AT.push(-1, -1);
            break;
        }
    }
    if(nums.length === 0) _AT.push(-1, -1);
    if(nums.length === 1) _AT.push(0);
    return _AT.sort();
}

const test1 = searchRange([5,7,7,8,8,10], 8);
const test2 = searchRange([5,7,7,8,8,10], 6);
const test3 = searchRange([], 0);
const test4 = searchRange([1], 1);

console.log(test1, test2, test3, test4);