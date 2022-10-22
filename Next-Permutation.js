var nextPermutation = (nums) => {
    let n = nums.length;
    let idx = -1;
    for (let i = n - 1; i > 0; i--) { // find first increasing point
        if (nums[i - 1] < nums[i]) {
            idx = i - 1;
            break;
        }
    }
	// already the largest permutaion (decreasing order), rearrange it as the lowest possible order (increasing order)
    if (idx == -1) return nums.reverse();
    let secondIdx = idx + 1;
    for (let i = idx + 1; i < n - 1; i++) { // find the rightmost decreasing point with value larger than idx value
        if (nums[i] > nums[i + 1] && nums[i + 1] > nums[idx]) {
            secondIdx = i + 1;
        }
    }
    [nums[idx], nums[secondIdx]] = [nums[secondIdx], nums[idx]]; // swap
    let res = [...nums].slice(0, idx + 1).concat([...nums].slice(idx + 1).sort((a, b) => a - b)); // sort the rest of array in ascending order
    nums.splice(0, n); // handle in-place
    for (const i of res) {
        nums.push(i);
    }
}

const test1 = nextPermutation([1,2,3]); 
const test2 = nextPermutation([3,2,1]);
const test3 = nextPermutation([1,1,5]);

console.log(test1, test2, test3);