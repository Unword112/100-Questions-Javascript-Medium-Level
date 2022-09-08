var combine = (n, k) => {
    let res = []
    
    const _combine = function(start, comb) {
        if(comb.length === k) {
            res.push([...comb])
            return
        }
        for(let i=start; i<=n; ++i) {
            comb.push(i)
            _combine(i+1, comb)
            comb.pop()
        }
        return
    }
    
    _combine(1, [])
    
    return res
}

const test1 = combine(4, 2);
const test2 = combine(1, 1);

console.log(test1, test2);