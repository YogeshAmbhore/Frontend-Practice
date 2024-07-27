let arr = [2, 3, 4, 5, 6];

// arr.forEach((val) => {
//     console.log(val**2);
// })

//      OR

let calSquare = (val) => {
    console.log(val**2);
}

arr.forEach(calSquare);