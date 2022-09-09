var singleNumber = (nums) => {
    var obj = [];
    for(let i = 0; i < nums.length; i++) {
        obj[nums[i]] ? obj[nums[i]] = obj[nums[i]] + 1 : obj[nums[i]] = 1;
    }
    
    for(let prop in obj) {
        if(obj[prop] === 1) return prop;
    }
}

const test1 = singleNumber([2,2,1]);
const test2 = singleNumber([4,1,2,1,2]);
const test3 = singleNumber([1]);

console.log(test1, test2, test3);