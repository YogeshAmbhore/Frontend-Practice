// for (let count = 1; count <= 10; count++) {
//     console.log("Hello World");
// }

// let sum = 0;

// for (let num = 1; num <= 10; num++) {
//     sum = sum + num;
// }
// console.log(sum);


// while loop
// let n = 10;
// let i = 1;

// while(n>=i) {
//     console.log("hello world from while loop");
//     i++;
// }


// do-while loop
// do {
//     console.log("Hello world from do-while loop");
//     i++;
// }while(i <= n);


// for-of loop -----   Mainly used to iterate through string and arrays
// let str = "CodingGuru";

// for (let i of str) {
//     console.log("i =", i);
// }


// for-in loop ----- Mainly used to iterate through arrays and objects(python's dict like structure)
// let student = {
//     fullNmae : "Yogesh Ambhore",
//     age : 27,
//     isPass : true,
// };

// for (let key in student) {
//     console.log("key =", key, "value =", student[key]);
// }


// for (let count = 0; count <= 100; count++) {
//     if(count%2 === 0){
//         console.log(count);
//     }
// }


let num = 7;
let guess_number = prompt("Guess the number between 1 to 10");

while(num != guess_number){
    guess_number = prompt("You guessed the wrong number, guess again!");
}
console.log("Congratulations you guessed it right!");

