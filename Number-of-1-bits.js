var hammingWeight = (n) => {
    let count = 0;
    
    n = n.toString(2);
    
    for (let i = 0; i <n.length; i++) {
        if (n[i] === '1') count++;
    }
    
    return count;
}

const test1 = hammingWeight(00000000000000000000000000001011);
const test2 = hammingWeight(00000000000000000000000010000000);
const test3 = hammingWeight(11111111111111111111111111111101);

console.log(test1, test2, test3);