var letterCasePermutation = function(s) {
    const result = [];
    
    const dfs = (index, prefix) => {
        const currChar = s[index];

        if (index === s.length) {
            result.push(prefix);
            return
        }
        
        if (isNaN(currChar)) {
            dfs(index + 1, prefix + currChar.toLowerCase());
            dfs(index + 1, prefix + currChar.toUpperCase())
        } else {
            dfs(index + 1, prefix + currChar)
        }
    }
    
    dfs(0, '');
    
    return result;
};

const test1 = letterCasePermutation("a1b2");
const test2 = letterCasePermutation("3z4");

console.log(test1, test2);