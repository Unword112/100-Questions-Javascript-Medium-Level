var backspaceCompare = (s, t) => {
    let indexS = S.length - 1;
    let indexT = T.length - 1;
    
    let delS = 0;
    let delT = 0;
    
    let sWord = '';
    let tWord = '';
    
    while (indexS > -1 || indexT > -1) {
        let letterS = S[indexS];
        let letterT = T[indexT];
        if (letterS === '#') {
            indexS -= 1;
            delS += 1;
            continue;
        } else if (delS > 0) {
            indexS -= 1;
            delS -= 1;
            continue;
        };
        if (letterT === '#') {
            indexT -= 1;
            delT += 1;
            continue;
        } else if (delT > 0) {
            indexT -= 1;
            delT -= 1;
            continue;
        };
        if (letterS !== letterT) {
            return false;
        };
        if (indexS > -1) {
            sWord += letterS;
        };
        if (indexT > -1) {
            tWord += letterT;
        };
        indexS -= 1;
        indexT -= 1;
    };
    return sWord === tWord;
}


console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));