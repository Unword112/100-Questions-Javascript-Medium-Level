var reverseWords = (s) => {
    return s.split(' ').map((word) => word.split('').reverse().join('')).join(' ');
};

var test1 = "Let's take LeetCode contest";
var test2 = "God Ding";

console.log(reverseWords(test1));
console.log(reverseWords(test2));