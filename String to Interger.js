const StringToInteger = (number) => {
    let trim = number.replace(/[a-zA-Z]/g, '');
    let arr = number.split('').join('');
    let str = parseInt(trim);
    let letters = /[a-z.+]/i;

    let POSITIVE_INTEGER = Math.pow(2,31);
    let NEGATIVE_INTEGER = Math.pow(2,31) |0;

    if(arr[0].match(letters)) return 0;
    else if(arr[0].match(/[-]/i) && arr[1].match(/[+]/i)) return 0;

    if(str > POSITIVE_INTEGER){
        return POSITIVE_INTEGER;
    } else if( str < NEGATIVE_INTEGER){
        return NEGATIVE_INTEGER;
    }

    return str;
}

const x = '42';
const y = '   42';
const z = '42 with word';
const w = 'words and 987';
const a = '   -42'
const b = '-+12';
const c = '-11';
const d = '-91283472332';
const e = '91283472332'

console.log(StringToInteger(x));
console.log(StringToInteger(y));
console.log(StringToInteger(z));
console.log(StringToInteger(w));
console.log(StringToInteger(a));
console.log(StringToInteger(b));
console.log(StringToInteger(c));
console.log(StringToInteger(d));
console.log(StringToInteger(e));