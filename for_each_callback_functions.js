
// arr.forEach(callBackFunction)  // Syntax
// let arr = [1, 2, 3, 4, 5, 6];

// using normal function
// arr.forEach(function iterate(val){
//     console.log(val);
// })

// using arrow fucntion
let arr = ["mumbai", "delhi", "pune", "nashik"];
// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// })


// callback function has three optional parameters : value, index, array itself

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx), arr;
})


// forEach is higher order function or method
// higher order fucntions are those fucntions which takes another fucntion as parameter or returns another fucntion