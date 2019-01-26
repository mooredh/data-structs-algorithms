'use strict'

class HashTable {
    constructor() {
        this.table = new Array(137);
    }

    simpleHash(data) {
        let total = 0;
        for (let i = 0; i < data.length; ++i) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }

    betterHash(string) {
        const H = 41;
        let total = 0;
        for (let i = 0; i < string.length; i++) {
            total += H * total + string.charCodeAt(i);
        }
        total %= this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        console.log(`Hash Value: ${string} -> ${total}`);
        return parseInt(total);
    }

    showDistro() {
        let n = 0;
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`${i}: ${this.table[i]}`);
            }
        }
    }

    put(data) {
        let pos = this.betterHash(data);
        this.table[pos] = data;
    }

    get() {

    }
}

let someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"
];
let hTable = new HashTable();
for (let i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
}
hTable.showDistro();