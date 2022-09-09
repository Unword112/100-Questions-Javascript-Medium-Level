var isPowerOfTwo = (n) => {
    if(n < 1) return false;
    return (n & (n - 1)) == 0;
}

const test1 = isPowerOfTwo(1);
const test2 = isPowerOfTwo(16);
const test3 = isPowerOfTwo(3);

console.log(test1, test2, test3);