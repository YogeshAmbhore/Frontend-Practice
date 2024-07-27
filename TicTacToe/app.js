// alert("Hello World");

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let playAgnBtn = document.querySelector("#play-agn");
let winMsg = document.querySelector("#msg");
let winContainer = document.querySelector(".winner-msg");



let turnO = true;

const winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8],
                    [1, 4, 7], [2, 5, 8], [2, 4, 6],
                    [3, 4, 5], [6, 7, 8]];


const resetGame = () => {
    turnO = true;
    enableBoxes();
    winContainer.classList.add("hide");
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const declareWinner = (winner) => {
    winMsg.innerText = `Congratulations "${winner}" you won the game`
    winContainer.classList.remove("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        // box.innerText = "ABCD";

        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns) {
        // console.log(pattern)
        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;

        if (post1Val != "" && post2Val != "" && post3Val != "") {
            if(post1Val === post2Val && post2Val === post3Val){
                declareWinner(post1Val);
                disableBoxes();
            }
        }
    }
}

playAgnBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);