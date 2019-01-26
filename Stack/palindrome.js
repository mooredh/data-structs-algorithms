'use strict'
const Stack = require('./stack');

const isPalindrome = word => {
    let s = new Stack();
    for (let i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    let rword = '';

    while (s.length() > 0) {
        rword += s.pop();
    }

    if (word === rword) {
        return true;
    }
    return false;
}

let word = "hello";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}

word = "racecar"
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}