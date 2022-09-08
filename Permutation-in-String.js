var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false
    }
    
    const s1map = {}
    for (let i = 0; i < s1.length; i++) {
        let c = s1.charCodeAt(i)
        s1map[c] = s1map[c] ? s1map[c] + 1: 1;
    }
    
    for (let i = 0; i <= s2.length - s1.length; i++) {
        const s2map = {}
        
        for (let j = 0; j < s1.length; j++) {
            let c = s2.charCodeAt(i + j)
            s2map[c] = s2map[c] ? s2map[c] + 1: 1;
        }
        
        let allGood = 0
        for (prop in s1map) {
            if (s1map[prop] !== s2map[prop]) {
                break
            }
            allGood += s1map[prop]
        }
        
        if (allGood === s1.length) {
            return true
        }
    }
    
    return false
};

const test1 = checkInclusion("ab", "eidbaooo");
const test2 = checkInclusion("ab", "eidboaoo");
const test3 = checkInclusion("abc", "eicaboaoo");

console.log(test1);
console.log(test2);
console.log(test3);