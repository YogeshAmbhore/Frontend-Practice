let myVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let myNewVal = myVal.map( (num) => {
//     return num + 10;
// } )



// we can also use chaining in javascript
let myNewVal = myVal
                    .map(
                        (num) => {
                            return num * 10;
                        }
                    ).map(
                        (num) => {
                            if (num % 3 == 0){
                                return num;
                            }
                        }
                    ).filter(
                        (num) => {
                            if (num != 'undefined'){
                                return num;
                            }
                        }
                    )

console.log(myNewVal);