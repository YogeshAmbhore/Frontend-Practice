// for (let i = 0; i<=10; i++){
//     console.log(`${i}`);
// }


// for (let i = 1; i <= 10; i++){
//     console.log(`table of ${i}`)
//     for (let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }



let myArray = ['flash', 'batman', 'superman'];

for (let i = 0; i < myArray.length; i++){
    // console.log(myArray[i]);

    console.log(`characters of ${myArray[i]}`);
    let val = myArray[i];
    for (let c = 0; c < val.length; c++){
        console.log(val[c]);
    }
}