// let document = window.document()

// console.log(document);
let title = document.getElementById('title');
// console.log(title)

// console.log(title.id);
// console.log(title.innerHTML);
// console.log(title.innerText);
// console.log(title.textContent);

title.style.backgroundColor = 'green';
title.style.borderRadius = '10px';
title.style.padding = '10px';

title.innerHTML = 'Hello This is changed text';

let firstHeading = document.querySelector('h4');
console.log(firstHeading);

let allHeading = document.querySelectorAll('h4');
console.log(allHeading);
console.log(allHeading[0].innerHTML);
// console.log(typeof allHeading)
// allHeading.forEach( (item) => {
//     console.log(item.innerHTML);
// })

let unorderedList = document.querySelector('ul');
// console.log(unorderedList);
let firstLi = unorderedList.querySelector('li');
console.log(firstLi);
firstLi.style.backgroundColor = 'blue';
firstLi.style.padding = '10px';
firstLi.style.borderRadius = '10px';
firstLi.style.border = '2px solid yellow';
unorderedList.style.display = 'flex';
// unorderedList.style.alignItems = 'center';
// unorderedList.style.justifyContent = 'center';
unorderedList.style.backgroundColor


let allLi = document.querySelectorAll('li');
console.log(allLi);

allLi.forEach( (l) => {
    l.style.backgroundColor = 'red';
    l.style.padding = '10px';
    l.style.border = '2px solid yellow';
    l.style.borderRadius = '10px';
    l.style.margin = '5px';
    l.style.listStyleType = 'none'
    l.style.width = '80%';
    l.style.height = '50px';
    l.style.textAlign = 'center'
})

