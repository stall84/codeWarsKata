// Code Wars Problem:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Example: a = "xyaabbbccccdefww"
//          b = "xxxxyyyyabklmopq"
//          longest(a, b) -> "abcdefklmopqwxy"

const s1 = "loopingisfunbutdangerous";
const s2 = "lessdangerousthancoding";

// first thing to do, split the strings into arrays & then concat them

function longest(str1,str2) {
    let catArr = str1.split('').concat(str2.split(''));
    let answerArr = [];

    for (let i = 0; i < catArr.length; i++) {
        answerArr += catArr[i] != catArr[i];
    }
    return answerArr;   
};


console.log(longest(s1,s2));