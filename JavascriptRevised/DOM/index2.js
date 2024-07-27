let allElements = document.querySelector('.parent-div');
// console.log(allElements);

let bodyEleemts = document.querySelector('body');
// console.log(bodyEleemts);
// console.log(bodyEleemts.className);
// console.log(bodyEleemts.children);
// console.log(bodyEleemts.children[0].innerHTML);
// console.log(bodyEleemts.children[0].textContent);
// console.log(bodyEleemts.children[0].innerText);

// for (let i = 0; i< allElements.children.length; i++){
//     console.log(allElements.children[i].innerHTML);
//     allElements.children[i].style.color = 'white';
//     allElements.children[i].style.display = 'flex';
//     allElements.children[i].style.padding = '10px';
//     allElements.children[i].style.margin = '10px'
//     allElements.children[i].style.backgroundColor = 'blue';
//     allElements.children[i].style.border = '2px solid yellow';
//     allElements.children[i].style.borderRadius = '10px';
// }

// console.log(allElements.firstElementChild);
// console.log(allElements.lastElementChild);

let dayOne = document.querySelector('.day');
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);


let newElement = document.createElement('div');
console.log(newElement)
newElement.className = 'main';
newElement.id = 'myId';

let newNode = document.createTextNode('Learn javascript with hands-on practice');
newElement.append(newNode);

let newheading = document.createElement('h1');
// newElement.append(newheading)
newheading.innerText = 'Learn javascript with hands-on practice';
newElement.append(newheading);



