// map is similar to foreach loop but the main difference between map and foreach is map returns new array
let arr = [2, 3, 4, 5];

// arr.map((val) => {
//     console.log(val);
// })

// let newArr = arr.map((val) => {
//     return val**2;
// })

// console.log(newArr);



// filter : returns a new array of values that gives true for condition

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
})

console.log(evenArr);