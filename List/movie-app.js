'use strict'
const fs = require('fs');
const readline = require('readline');
const List = require('./list');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const createArrayFromFile = (file) => {
    let arr = fs.readFileSync(file).toString().split("\n")

    for (let index = 0; index < arr.length; ++index) {
        arr[index] = arr[index].trim();
    }
    return arr
}


let movies = createArrayFromFile("films.txt");

const movieList = new List();
for (let index = 0; index < movies.length; index++) {
    movieList.append(movies[index]);
}

const rentedList = new List();

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement()["name"] + ", " + list.getElement()["movie"]);
        } else {
            console.log(list.getElement())
        }
        if (list.currPos() === list.length() - 1) {
            break;
        }
    }
}

let customers = new List();

class Customer {
    constructor(name, movie) {
        this.name = name;
        this.movie = movie
    }
}

function checkOut(name, movie, filmList, customerList) {
    if (movieList.contains(movie)) {
        let c = new Customer(name, movie);
        customerList.append(c);
        rentedList.append(movie);
        filmList.remove(movie)
    } else {
        console.log(movie + " is not available");
    }
}

function checkIn(name, movie, rentList, customerList) {
    if (rentList.contains(movie) && customers.contains(new Customer(name, movie))) {
        customerList.remove(new Customer(name, movie));
        rentList.remove(movie);
        filmList.append(movie);
    } else {
        console.log(movie + " has not been rented by " + name)
    }
}

console.log("Available movies: \n");

displayList(movieList);

rl.question('Enter your name: \n', (answer) => {
    let name = answer;
    rl.question('What movie would you like? \n', (ans) => {
        let movie = ans;
        checkOut(name, movie, movieList, customers);

        console.log("\nCustomer Rentals: \n");

        displayList(customers);

        console.log("\nMovies Now Available\n");

        displayList(movieList);

        console.log("\nRented Movies\n");

        displayList(rentedList);

        rl.question('Enter your name: \n', (answer) => {
            let nameTwo = answer;
            rl.question('What movie would you like to return? \n', (ans) => {
                let movieTwo = ans;
                checkIn(nameTwo, movieTwo, rentedList, customers);

                console.log("\nCustomer Rentals: \n");

                displayList(customers);

                console.log("\nMovies Now Available\n");

                displayList(movieList);

                console.log("\nRented Movies\n");

                displayList(rentedList);

                rl.close();
            })
        })
    })
})