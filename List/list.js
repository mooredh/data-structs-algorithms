'use strict'

class List {
    constructor() {

        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }

    clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }

    find(element) {
        for (let index = 0; index < this.dataStore.length; index++) {
            if (element == this.dataStore[index]) {
                return index;
            }
        }
        return -1;
    }

    toString() {
        return this.dataStore;
    }

    insert(element, after) {
        let insertPosition = this.find(after);
        if (insertPosition > -1) {
            this.dataStore.splice(insertPosition + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }

    append(element) {
        this.dataStore[this.listSize++] = element;
    }

    remove(element) {
        let foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        } else return false;
    }

    front() {
        this.pos = 0;
    }

    end() {
        this.pos = this.listSize - 1;
    }

    prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }

    next() {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    }

    currPos() {
        return this.pos;
    }

    moveTo(position) {
        this.pos = position;
    }

    getElement() {
        return this.dataStore[this.pos];
    }

    length() {
        return this.listSize;
    }

    contains(element) {
        for (let index = 0; index < this.dataStore.length; index++) {
            if (element == this.dataStore[index]) {
                return true;
            }
        }
        return false;
    }
}

module.exports = List;