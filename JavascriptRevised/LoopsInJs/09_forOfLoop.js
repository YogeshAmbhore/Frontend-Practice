// Array Specific Loop

let arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);
// }


let greetings = "Hello Wolrd!";
// for (const greet of greetings) {

//     if (greet == " "){
//         continue
//     }
//     console.log(greet);
// }


// High Level overview of Map with forOf Loop

const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")
map.set("AU", "Australia")

// console.log(map);

// for (const key of map){
//     console.log(key);
// }

// for (const [key, value] of map){
//     console.log(`${key} :- ${value}`);
// }



// forOf Loop with Object

const myObject = {
    game1: 'NFS',
    game2: 'Spider Man'
}

// for (const key of myObject){        //gives Error
//     console.log(key);
// }

// Conclusion : 
// forOf can't directly used to iterate through objects
// ForOf Loop can be used with array and maps