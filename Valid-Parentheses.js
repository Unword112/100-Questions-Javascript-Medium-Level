var isValid = (s) => {
    let stack = []

for (let i = 0; i < s.length; i++){
    
    let right = s[i] === ")" || s[i] === "}" || s[i] === "]"
    let left = s[i] === "(" || s[i] === "{" || s[i] === "["
    
    if (right && stack.length === 0){return false}
    
    if (left){
        stack.push(s[i])
    } 
    
    if (right){
        let last = stack[stack.length - 1]
        if (s[i] === ")" && last != "("){
            return false
        } else if (s[i] === "}" && last != "{"){
            return false
        } else if (s[i] === "]" && last != "["){
            return false
        } else {
            stack.pop()
        }
    }        
}

    if (stack.length > 0){
        return false
    }

    return true;
}

const test1 = isValid("()");
const test2 = isValid("()[]{}");
const test3 = isValid("(]");

console.log(test1, test2, test3);