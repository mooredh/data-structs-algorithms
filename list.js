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
        return this.dataStore
    }

    insert(element, after) {
        let insertPosition = this.find(after);
        if (insertPosition > -1) {
            this.dataStore.splice(insertPosition + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false
    }

    append(element) {
        this.dataStore[this.listSize++] = element
    }

    remove(element) {
        let foundAt = this.find(element)
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true
        } else return false
    }

    front() {
        this.pos = 0
    }

    end() {
        this.pos = this.listSize - 1;
    }

    prev() {
        if (this.pos > 0) {
            --this.pos
        }
    }

    next() {
        if (this.pos < this.listSize - 1) {
            ++this.pos
        }
    }

    currPos() {
        return this.pos
    }

    moveTo(position) {
        this.pos = position
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
                return true
            }
        }
        return false
    }
}

let names = new List()

names.append("You")
names.append("Us");
names.append("We");
names.append("They");
names.append("Me");

console.log(names.toString())

names.remove("You")
console.log(names.toString());

console.log(names.length());

names.front();
console.log(names.getElement())

names.next();
console.log(names.getElement())

names.next();
console.log(names.getElement())

names.prev();
console.log(names.getElement())

names.end();
console.log(names.getElement())

/* //  Traversing forward (Iterating through a list)
for (names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement())
}

//  Traversing backward (Iterating through a list)
for (names.end(); names.currPos() >= 0; names.prev()) {
    console.log(names.getElement())
} */

function createArrayFromFile(file) {
    let arr = read(file).split("\n")
    for (let index = 0; index < arr.length; ++index) {
        arr[index] = arr[index].trim();
    }
    return arr
}

let movies = createArrayFromFile("films.txt")

const movieList = new List();
for (let index = 0; index < movies.length; index++) {
    movieList.append(movies[i])

}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement()["name"] + ", " + list.getElement()["movie"]);
        } else {
            console.log(list.getElement())
        }
    }
}

let customers = new List();

class Customer {
    constructor(name, movie) {
        this.name = name;
        this.movies = movie
    }

}

function checkOut(name, movie, filmList, customerList) {
    if (movieList.contains(movie)) {
        let c = new Customer(name, movie)
        customerList.append(c);
        filmList.remove(movie)
    } else {
        console.log(movie + " is not available")
    }
}

// let movies = createArrayFromFile("films.txt");
// let movieList = new List();
// let customers = new List();
// for (let i = 0; i < movies.length; ++i) {
//     movieList.append(movies[i]);
// }
// console.log;
// ("Available movies: \n");
// displayList(movieList);
// putstr("\nEnter your name: ");
// let name = readline();
// putstr("What movie would you like? ");
// let movie = readline();
// checkOut(name, movie, movieList, customers);
// console.log;
// ("\nCustomer Rentals: \n");
// displayList(customers);
// console.log;
// ("\nMovies Now Available\n");
// displayList(movieList);