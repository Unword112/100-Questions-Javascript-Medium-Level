const reverse = (number) => {
    return(
        parseFloat(
            number.toString().split('').reverse('').join('')
        ) * Math.sign(number)
    )
}

var x = 123;
var y = -123;
var z = 54321;

console.log(reverse(x));
console.log(reverse(y));
console.log(reverse(z));