var groupAnagrams = (strs) => {
    let groups = {}
    strs.forEach(str => {
        const sortedStr = str.split('').sort().join('')
        if (groups[sortedStr]) {
            groups[sortedStr].push(str)
        } else {
            groups[sortedStr] = [str]
        }
    })
    return Object.values(groups)
}

const test1 = groupAnagrams( ["eat","tea","tan","ate","nat","bat"]);
const test2 = groupAnagrams([""]);
const test3 = groupAnagrams(["a"]);

console.log(test1, test2, test3);