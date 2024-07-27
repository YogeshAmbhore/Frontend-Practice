let colrrDive = document.querySelector('.color-box');
// console.log(colrrDive);

let allBox = document.querySelectorAll('.box')
console.log(allBox);

const body = document.querySelector('body');

// let blue = document.querySelector('#blue');
// blue.style.backgroundColor = 'pink';

allBox.forEach( (item) => {
    item.addEventListener('click', (e) => {
        // console.log(e.target);
        // console.log(e);

        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === 'indianred'){
            body.style.backgroundColor = e.target.id;
        }
    })

    // item.addEventListener('mouseover', (e) => {
    //     let one = e.target
    //     one.style.backgroundColor = 'black'
    // })

    // item.addEventListener('mouseleave', (e) => {
    //     e.target.style.backgroundColor = ''
    // })


})
