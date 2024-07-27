// For Each is Higher order function
// Mainly usedto iterate through an array

const lang = ["Python", "Javascript", "C++", "Java", "PHP", "Ruby"];


// for each loop with normal function
lang.forEach(  function (item) {
    //   console.log(item)
}  )


// for each loop with arrow function
lang.forEach( (item) => {
    // console.log(item);
})


// Another method is define callback function seperately and call it within forEach loop

function callMe(item){
    console.log(item);
}

let printMe = (item) => {
    console.log(item);
}

// lang.forEach(callMe);
// lang.forEach(printMe)
