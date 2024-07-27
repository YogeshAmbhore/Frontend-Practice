let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn1 is clicked");
}

let div = document.querySelector(".div-demo");
// console.log(div);
div.onmouseover = () => {
    console.log("You are inside div event handler")
}

let btn2 = document.querySelector("#btn2");
// console.log(btn2);
btn2.ondblclick = () => {
    console.log("This is double click handler");
}