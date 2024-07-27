// function demo() {
//     console.log("DB Connected");
// }

// demo();


/* defining IIFE functions - named iife */

// (function demo() {
//     console.log("DB Connected");
// })();


/* Defining IIFE function using arrow function */

// ( () => {
//     console.log("DB CONNECTED TWO");
// })();


// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// })('Yogesh');


let example = (() => {
    console.log("Insinde variable call");
})();

console.log(example)