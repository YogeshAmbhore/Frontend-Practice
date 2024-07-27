let score = prompt("Enter your score to know the grade");

if (score >= 90 && score <= 100) {
    console.log("A Grade");
} else if (score >=70 && score <= 89) {
    console.log("B Grade");
} else if (score >= 60 && score <= 69) {
    console.log("C Grade");
} else if (score >= 50 && score <= 59) {
    console.log("D Grade");
} else {
    console.log("Fail");
}
