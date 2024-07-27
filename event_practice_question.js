let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body")
let para = document.querySelector("p");

let currMode = "light"

// modeBtn.addEventListener("click", () => {
//     // console.log("click event is triggered");

//     if(currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     } else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }

// })

// modeBtn.addEventListener("click", () => {
//     // console.log("click event is triggered");

//     if(currMode === "light"){
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     } else {
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }

// })

let currFontSize = "30px";

modeBtn.addEventListener("click", () => {
    if (currMode === "light" && currFontSize === "30px") {
        currFontSize = "70px";
        para.style.fontSize = currFontSize;
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currFontSize = "30px";
        para.style.fontSize = currFontSize;
        body.classList.add("light");
        body.classList.remove("dark");
    }
    // para.style.fontSize = "100px";
})

// let para_one = document.getElementById("demo").innerText;
// console.log(para_one);