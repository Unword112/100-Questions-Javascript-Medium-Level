var reverseBits = (n) => {
    let reversedBinary = n.toString(2).split("").reverse().join("");
    for (let i = reversedBinary.length; i < 32; i++) {
        reversedBinary += "0";
    }
    return parseInt(reversedBinary, 2)
}

const test1 = reverseBits(00000010100101000001111010011100);
const test2 = reverseBits(11111111111111111111111111111101);

console.log(test1, test2);