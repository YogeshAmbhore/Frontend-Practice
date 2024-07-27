// Event Listening using Event listeners


// Using eventlisteners we can add multiple events for same actions 
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    console.log("button one was clicked 1");
})

btn1.addEventListener("click", () => {
    console.log("button one was clicked 2");
})

const handler3 = (e) => {
    console.log("button one was clicked 3");
    console.log(e.type);
};

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
    console.log("button one was clicked 4");
})


// To remove event listener
btn1.removeEventListener("click", handler3);