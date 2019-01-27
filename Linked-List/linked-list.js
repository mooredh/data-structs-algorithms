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
        this.head = null;
        this.tail = null
        this.length = 0;
    }

    push(element) {
        let newNode = new Node(element);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.tail && !this.head) return undefined;
        let prevNode = this.get(this.length - 2);
        if (prevNode.next !== null) {
            prevNode.next = null;
            this.tail = prevNode;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return this;
    }

    unshift(element) {
        let newNode = new Node(element);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (!this.tail && !this.head) return undefined;
        if (this.head.next !== null) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return this;
    }

    find(item) {
        let currNode = this.head;
        while (currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let currNode = this.head;
        for (let i = 1; i <= index; i++) {
            currNode = currNode.next;
        }
        return currNode;
    }

    set(index, element) {
        let node = this.get(index);
        if (node) {
            node.element = element;
            return true;
        }
        return false;
    }

    insert(index, element) {
        if (index < 0 || index > this.length) return false;
        else if (index === this.length) return !!this.push(element);
        else if (index === 0) return !!this.unshift(element);
        let newNode = new Node(element);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;
        newNode.next = nextNode;
        prevNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        else if (index === this.length) return this.pop();
        else if (index === 0) return this.shift();
        let prevNode = this.get(index - 1);
        let deleted = prevNode.next;
        prevNode.next = deleted.next;
        this.length--;
        return deleted;
    }

    reverse() {
        if (this.length === 0) return null;
        else if (this.length === 1) return this;
        let currNode = this.head;
        this.head = this.tail;
        this.tail = currNode;
        let prevNode = null;
        let nextNode;
        while (prevNode !== this.head) {
            nextNode = currNode.next
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        return this;
    }

    display() {
        if (!this.head) console.log(undefined);
        else {
            let currNode = this.head;
            while (currNode) {
                console.log(currNode.element);
                currNode = currNode.next
            }
        }
    }
}

let lList = new LinkedList();

lList.push("First");
lList.push("Mid1");
lList.push("Mid2");
lList.push("Mid3");
lList.push("Mid4");
lList.push("Mid5");
lList.push("Mid6");
lList.push("Mid7");
lList.push("Mid8");
lList.push("Last");
lList.reverse();
lList.display()

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