'use strict';
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node("head");
        this.current = this.head;
    }

    find(item) {
        let currNode = this.head;
        while (currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    insert(newElement, item) {
        let newNode = new Node(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    findPrevious(item) {
        let currNode = this.head;
        while (currNode.next !== null && currNode.next.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    remove(item) {
        let prevNode = this.findPrevious(item);
        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    }

    display() {
        let currNode = this.head;
        while (currNode.next !== null) {
            console.log(currNode.next.element);
            currNode = currNode.next
        }
    }

    show() {
        return this.current.element;
    }

    advance(n) {
        for (let i = 1; i <= n; i++) {
            if (this.current.next !== null) {
                this.current = this.current.next;
            } else {
                break;
            }
        }
    }

    back(n) {
        for (let i = 1; i <= n; i++) {
            if (this.findPrevious(this.current.element)) {
                this.current = this.findPrevious(this.current.element);
            } else {
                break;
            }
        }
    }
}

class CircularLinkedList extends LinkedList {
    constructor() {
        super();
        this.head.next = this.head;
    }

    display() {
        let currNode = this.head;
        while (currNode.next !== null && currNode.next.element !== "head") {
            console.log(currNode.next.element);
            currNode = currNode.next
        }
    }
}

class DoublyLinkedList extends LinkedList {
    insert(newElement, item) {
        let newNode = new Node(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    }

    remove(item) {
        let currNode = this.find(item);
        if (currNode.next !== null) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    }

    findLast() {
        let currNode = this.head;
        while (currNode.next !== null) {
            currNode = currNode.next;
        }
        return currNode;
    }

    displayReverse() {
        let currNode = this.head;
        currNode = this.findLast();
        while (currNode.previous !== null) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    }
}

module.exports = {
    LinkedList,
    CircularLinkedList,
    DoublyLinkedList
}