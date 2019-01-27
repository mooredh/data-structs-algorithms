'use strict'
const { LinkedList, DoublyLinkedList, CircularLinkedList } = require('./linked-list');

let cities = new LinkedList();
cities.insert("Conway");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
console.log(cities.find());
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();
console.log();

let citiesTwo = new DoublyLinkedList();
citiesTwo.insert("Conway", "head");
citiesTwo.insert("Russellville", "Conway");
citiesTwo.insert("Carlisle", "Russellville");
citiesTwo.insert("Alma", "Carlisle");
citiesTwo.display();
console.log();
citiesTwo.remove("Carlisle");
citiesTwo.display();
console.log();
citiesTwo.displayReverse();
console.log();

let citiesThree = new CircularLinkedList();
citiesThree.insert("Conway", "head");
citiesThree.insert("Russellville", "Conway");
citiesThree.insert("Carlisle", "Russellville");
citiesThree.insert("Alma", "Carlisle");
citiesThree.display();
console.log();
citiesThree.remove("Carlisle");
citiesThree.display();