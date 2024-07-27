let sample = document.querySelector(".sample")
// console.log(sample);
let changeBtn = document.querySelector("button");
// console.log(changeBtn);

let click_event = "one"
changeBtn.addEventListener("click", () => {
    if (click_event === "one") {
        click_event = "two";
        sample.setAttribute("src", "two.jpg");
    } else {
        click_event = "one";
        sample.setAttribute("src", "one.jpg")
    }
})

