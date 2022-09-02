var longthOfLongestSubstring = (s) => {
    var maxLength = 0;
    var a = 0;
    for(let i = 0; i < s.length; i++){
        for(let j = a; j <i; j++){
            if(s[i] === s[j]) {
                a = j + 1;
                break;
            }
        }
    if(i - a + 1 > maxLength) maxLength = i - a + 1;
    }
    return maxLength;
}

var test1 = longthOfLongestSubstring("abcabcbb");
var test2 = longthOfLongestSubstring("bbbbb");
var test3 = longthOfLongestSubstring('pwwkew');

console.log(test1);
console.log(test2);
console.log(test3);