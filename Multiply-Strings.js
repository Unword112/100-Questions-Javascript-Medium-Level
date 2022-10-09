var multiply = function(num1, num2) {
        if(!+num1 || !+num2) return '0'
        const prod = Array(num1.length + num2.length).fill(0);
        let currIdx = prod.length-1;
        
        for(let i = num1.length-1; i >= 0; i--) {
            let idx = currIdx--;
            
            for(let j = num2.length-1; j >= 0; j--) {
                const res = +num1[i] * +num2[j] + prod[idx];
                prod[idx] = res % 10;
                prod[--idx] += Math.floor(res / 10);
            }
        }
        return prod.join('').replace(/^0+/, '')
    }



    function multOne(num1, b, shift) {
        const r = [];
        let sum = 0;
        let ost = 0;
        for (var i = num1.length - 1; i >= 0; i--) {
            const a = readDigit(num1, i);
            sum = a * b + (ost > 0 ? ost : 0);

            r[i + 1] = sum % 10;
            ost = (sum - r[i + 1]) / 10;
        }
        if (ost > 0) {
            r[i + 1] = ost;
        }
        return r;
};

const test1 = multiply('1', '3');
const test2 = multiply('123', '456');

console.log(test1, test2);