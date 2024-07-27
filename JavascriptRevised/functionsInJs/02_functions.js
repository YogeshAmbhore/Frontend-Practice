function calculateCartPrice(num1){
    return num1;
}

let one = [300, 400, 500, 600]
console.log(calculateCartPrice(one));

// function calculatePrice(...num1){
    function calculatePrice(val1, val2, ...num1){
    return num1;
}

console.log(calculatePrice(200, 400, 600));

let obj1 = {
    name: "John",
    age: 30,
    city: "New York"
};


function handleObject(anyObject){
    console.log(`user name is ${anyObject.name} and age is ${anyObject.age}`);
}

handleObject(obj1);