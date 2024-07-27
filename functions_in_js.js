// function toAdd(x, y) {
//     console.log("Welcome to first javascript function");
//     sum = x + y;
//     console.log(`addition of two numbers is = ${sum}`);
// }

// toAdd(7, 6);


// function toAdd(x, y) {
//     console.log("Welcome to first javascript function");
//     sum = x + y;
//     console.log(`addition of two numbers is = ${sum}`);
//     return sum;
// }

// let sum_of_numbers = toAdd(7, 6);
// console.log(sum_of_numbers)


// Arrow Function in Javascript
// Arrow functions are compact way of writting functions
// const arrowSum = (a, b) => {
//     console.log(a + b);
// }


function countVowels(str) {
    let count = 0
    for (let char of str){
        // console.log(char)
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}

countVowels("aaa");