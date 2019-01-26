'use strict'

class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(elem) {
        this.dataStore[this.top++] = elem;
    }

    pop() {
        return this.dataStore[--this.top];
    }

    peek() {
        return this.dataStore[this.top - 1];
    }

    length() {
        return this.top;
    }

    clear() {
        this.top = 0;
    }
}

module.exports = Stack;