'use strict'
const Stack = require('./stack');

const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1);


let start = new Date().getMilliseconds();
console.log(factorial(5));
let end = new Date().getMilliseconds();
console.log(`Time taken(recursion): ${end - start}`);

const fact = (n) => {
    const s = new Stack();

    while (n > 1) {
        s.push(n--);
    }

    let product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}

start = new Date().getMilliseconds();
console.log(fact(5));
end = new Date().getMilliseconds();
console.log(`Time taken(stack): ${end - start}`);