var maxArea = (height) => {
    let n = height.length;
    let max = 0;
    let left = 0;
    let right = n - 1;

    while(left < right){
        const area = (right - left) * Math.min(height[left], height[right]);

        max = Math.max(max, area);

        if(height[left] < height[right]) left++;
        else right--;
    }
    return max;
}

const test1 = maxArea([1,8,6,2,5,4,8,3,7]);
const test2 = maxArea([1,1]);

console.log(test1, test2);