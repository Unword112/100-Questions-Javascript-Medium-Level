var generateParenthesis = function(n) {
    let s='()'
    
    function f(str){
        if(str.length===n*2)
            return result.push(str)
        for(let x of s){
            str+=x
            f(str)
            str=str.slice(0,-1)
        }
    }
    let result=[]
    f('')
    function check(item){
        let left=0
        for(let x of item){
            x==='(' ? left++ :left --
            if(left<0)return false
        }
        if(left>item.length/2 || left!==0)return false
        return item
    }

    result=result.filter(x=>check(x))
    return result
};

const test1 = generateParenthesis(3);
const test2 = generateParenthesis(1);

console.log(test1, test2);