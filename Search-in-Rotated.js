var search = (nums, target) => {
    let i, j;
    var index = 0;
    
    for(i = 0; i < nums.length; i++){
        if(target === nums[i]){
            return index += i;
        }
        
    }
        
    if(index === 0) return index = -1;
}

const test1 = search([4,5,6,7,0,1,2], 0);
const test2 = search([5,7,7,8,8,10], 3);
const test3 = search([1], 1);
const test4 = search([1], 0);

console.log(test1, test2, test3, test4);