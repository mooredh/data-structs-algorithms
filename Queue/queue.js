'use strict'

class Queue {
    constructor() {
        this.dataStore = [];
    }

    enqueue(element) {
        this.dataStore.push(element);
    }

    dequeue() {
        return this.dataStore.shift();
    }

    front() {
        return this.dataStore[0];
    }

    back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    toString() {
        let retStr = "";
        for (let i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";

        }
        return resStr;
    }

    empty() {
        if (this.dataStore.length === 0) {
            return true;
        }
        return false;
    }

    count() {
        return this.dataStore.length;
    }
}

module.exports = Queue;