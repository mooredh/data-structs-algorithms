'use strict'
const fs = require('fs');
const Queue = require('./queue');

class Dancer {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

const getDancers = (males, females) => {
    let names = fs.readFileSync("dancers.txt").toString().split('\n');
    for (let i = 0; i < names.length; ++i) {
        let dancer = names[i].split(' ');
        let sex = dancer[0];
        let name = dancer[1];
        if (sex == "F") {
            females.enqueue(new Dancer(name, sex));
        } else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

const dance = (males, females) => {
    console.log("The dance partners are: \n");
    let person;
    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        console.log("Female dancer is: " + person.name);
        person = males.dequeue();
        console.log(("and the male dancer is: " + person.name));
    }
}

let maleDancers = new Queue();
let femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()) {
    console.log(maleDancers.front().name + " is waiting to dance.");
}
if (maleDancers.count() > 0) {
    console.log("There are " + maleDancers.count() +
        " male dancers waiting to dance.");
}
if (femaleDancers.count() > 0) {
    console.log("There are " + femaleDancers.count() +
        " female dancers waiting to dance.");
}