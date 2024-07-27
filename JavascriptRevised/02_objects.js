let tinderUser = new Object();

// console.log(tinderUser);

tinderUser.name = "John";
tinderUser.age = 30;
tinderUser.hobbies = ["hiking", "reading", "playing guitar"];

// console.log(tinderUser);

tinderUser.anotherObject = new Object();

// console.log(tinderUser);

tinderUser.anotherObject.username = "johnKing";

// console.log(tinderUser);

let obj1 = {
    1: "a",
    2: "b",
    3: "c"
}

let obj2 = {
    4: "d",
    5: "e",
    6: "f"
}

// let obj3 = { obj1, obj2 }
// let obj3 = Object.assign({}, obj1, obj2);
let obj3 = {...obj1, ...obj2};
// console.log(obj3);

// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));
// console.log(Object.entries(obj3));
// console.log(obj3.hasOwnProperty('5'));


// ----------- Destructuring Objects ---------------

const course = {
    coursename: "Javascript Bootcamp",
    price: "999",
    courseInstructor: "Yogesh"
}

console.log(course.courseInstructor); // normal method to access object elements

const {courseInstructor} = course; // Object destructuring to access object elements
console.log(courseInstructor);

const {courseInstructor: instructor} = course;  // another way to destructure objects
console.log(instructor);