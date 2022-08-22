const isPalindrome = (str) => {
    return (
        parseInt(
            str.toString().split('').reverse('').join('')
        ) === str
    )
}

const isPalindromeFaster = (str) => {
    const x = str.toString();
    console.log(x);

    for(var i = 0; i < x.length; i++) {
        if(x[i] != x[x.length-1-i]) return false;
    }
    return true;
}

console.log(isPalindromeFaster(121));
console.log(isPalindromeFaster(-121));
console.log(isPalindromeFaster(10));