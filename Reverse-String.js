var reverseString = (s) => {
    for(let i = 0; i < s.length; i++) {
        //Do not return anything, modify s in-place instead.
        s.splice(i, 0, s.pop());
    }
    return s;
};

var reverseStringModified = (s) => {
    var str = [];
    for(let i = 0; i < s.length; i++) {
        str.push(s[i]);
    }
    return str.reverse('');
}


console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));