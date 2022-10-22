var permuteUnique = function(nums) {
    let ans= [];
  nums.sort((a,b)=>a-b);
  var visited = new Array(nums.length).fill(0);
  let rec = (index,nums,arr,ans) => {
     if(index == nums.length) {                  
         ans.push([...arr]);
         return
     } 
     for(let i=0;i<nums.length;i++) {       
        
        if(visited[i] == 0){
             arr.push(nums[i]);
             visited[i] = 1;
             rec(index+1,nums,arr,ans);
             arr.pop();                             
             visited[i] = 0;
        
            while(nums[i] == nums[i+1]){
                i++;
             }
        }  
    }
  }
 
    rec(0,nums,[],ans);
    return ans
};

const test1 = permuteUnique([1,1,2]);
const test2 = permuteUnique([1,2,3]);

console.log(test1, test2);