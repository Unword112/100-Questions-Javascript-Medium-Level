const reverse = (number) => {
    let rev = parseFloat(
                number
                    .toString()
                    .split('')
                    .reverse('')
                    .join('')
                ) * Math.sign(number);

    if(rev < (Math.pow(2,31) * -1) || rev > (Math.pow(2,31) - 1)) {
        return 0;
    }
    return rev;
}

var x = 123;
var y = -123;
var z = -2143847412;
var w = 5120345689;

console.log(reverse(x));
console.log(reverse(y));
console.log(reverse(z));
console.log(reverse(w));