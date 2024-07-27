let marvel_heros = ["Ironman", "Spiderman", "Thor", "Hulk", "Captain America"]
let dc_heros = ["Flash", "Superman", "Wonderwomen", "Batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

let newOne = marvel_heros.concat(dc_heros);
// console.log(newOne);

let allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);

let name = "Ironman";

console.log(Array.isArray(name));
console.log(Array.from(name));
console.log(Array.of("one", "two", "thress", "four"));