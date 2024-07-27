let myNums = [1, 2, 3, 4];

let intialVal = 0;

let myTotal = myNums.reduce( (acc, cur_val) => {
    console.log(`acc = ${acc}, curr_val = ${cur_val}, initalVal = ${intialVal}`);
    return acc + cur_val
}, intialVal);

console.log(myTotal);