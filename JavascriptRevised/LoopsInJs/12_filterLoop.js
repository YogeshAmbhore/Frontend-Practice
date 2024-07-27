// Loopinng through filter

let myVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let output = myVal.filter( (item) => {
    return item > 5;
})

// filter return array of elements that satisfies condition
// console.log(output);


// using ForEach
let myNewVal = []

myVal.forEach( (item) => {
    if(item > 5){
        myNewVal.push(item);
    }
})

// console.log(myNewVal);


books = [
    {
        "book_name": "To Kill a Mockingbird",
        "author_name": "Harper Lee",
        "genre": "Fiction",
        "published": 1960
    },
    {
        "book_name": "1984",
        "author_name": "George Orwell",
        "genre": "Dystopian",
        "published": 1949
    },
    {
        "book_name": "Pride and Prejudice",
        "author_name": "Jane Austen",
        "genre": "Romance",
        "published": 1813
    },
    {
        "book_name": "The Great Gatsby",
        "author_name": "F. Scott Fitzgerald",
        "genre": "Tragedy",
        "published": 1925
    },
    {
        "book_name": "Moby Dick",
        "author_name": "Herman Melville",
        "genre": "Adventure",
        "published": 1851
    },
    {
        "book_name": "War and Peace",
        "author_name": "Leo Tolstoy",
        "genre": "Historical Fiction",
        "published": 1869
    },
    {
        "book_name": "The Catcher in the Rye",
        "author_name": "J.D. Salinger",
        "genre": "Fiction",
        "published": 1951
    },
    {
        "book_name": "The Hobbit",
        "author_name": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "published": 1937
    },
    {
        "book_name": "Fahrenheit 451",
        "author_name": "Ray Bradbury",
        "genre": "Dystopian",
        "published": 1953
    },
    {
        "book_name": "The Odyssey",
        "author_name": "Homer",
        "genre": "Epic",
        "published": "8th century BC"
    }
]


let filteredBook = books.filter( (item) => item.genre === 'Fiction');
console.log(filteredBook);

