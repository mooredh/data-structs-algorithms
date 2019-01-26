'use strict'
const List = require('./list');

let names = new List();

names.append("You");
names.append("Us");
names.append("We");
names.append("They");
names.append("Me");

console.log("Full list: ", names.toString());

names.remove("You")
console.log("Remove 'You': ", names.toString());

console.log("Print length: ", names.length());

names.front();
console.log("Front: ", names.getElement());

names.next();
console.log("Next: ", names.getElement());

names.next();
console.log("Next: ", names.getElement());

names.prev();
console.log("Prev: ", names.getElement());

names.end();
console.log("End: ", names.getElement());

console.log('Traversing forward(Iterating through a list)');
for (names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement())
    if (names.currPos() === names.length() - 1) {
        break;
    }
}

console.log('Traversing backward(Iterating through a list)');
for (names.end(); names.currPos() >= 0; names.prev()) {
    console.log(names.getElement())
    if (names.currPos() === 0) {
        break;
    }
}