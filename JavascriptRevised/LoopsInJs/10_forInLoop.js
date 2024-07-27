// ForIn Loop can be used with Javascript Objects

const  myObject = {
    js: "Javascript",
    css: "Cascading Style Sheet",
    html: "Hyper Text Markup Language",
    php: "PHP",
    py: "Python",
}

// for (const key in myObject){
    // console.log(myObject[key]);
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }


// ForIn Loop on array

const Myarr = ["C++", "Python", "Javascript", "java"]

// for (const key in Myarr){
//     console.log(key);
// }

// for (const key in Myarr){
//     console.log(Myarr[key]);
// }



// ForIn loop on Map

const map = new Map()
map.set("IN", "India")
map.set("US", "United States")
map.set("UK", "United Kingdom")
map.set("AU", "Australia")

// for (const key in map){        // Will not excecute because map is not iterable with ForIn loop
//     console.log(key);
// }