// function example() {
//     let username = 'Yogesh'
//     console.log(this.username);
// }

// example()


// let example = () => {
//     let username = 'Yogesh';
//     console.log(this);
// }

// example()

// let example = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(example(12, 13));

// let example = (num1, num2) => num1 + num2;
let example = (num1, num2) => (num1 + num2);

console.log(example(12, 34));