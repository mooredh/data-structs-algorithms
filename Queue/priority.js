'use strict'
const Queue = require('./queue');

class PriorityQueue extends Queue {
    dequeue() {
        let priority = this.dataStore[0].code;
        for (let i = 1; i < this.dataStore.length; ++i) {
            const element = this.dataStore[i];
            if (this.dataStore[i].code < priority) {
                priority = i;
            }
        }
        return this.dataStore.splice(priority, 1);
    }

    toString() {
        let retStr = "";
        for (let i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i].name + " code: " +
                this.dataStore[i].code + "\n";
        }
        return retStr;
    }
}

class Patient {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}

let p = new Patient("Smith", 5);
let ed = new PriorityQueue();
ed.enqueue(p);

p = new Patient("Jones", 4);
ed.enqueue(p);

p = new Patient("Fehrenbach", 6);
ed.enqueue(p);

p = new Patient("Brown", 1);
ed.enqueue(p);

p = new Patient("Ingram", 1);
ed.enqueue(p);

console.log(ed.toString());

let seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());

seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ");
console.log(ed.toString());