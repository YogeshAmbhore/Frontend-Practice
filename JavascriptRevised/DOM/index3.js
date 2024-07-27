function addLangauage(langName){
    let newLi = document.createElement('li');
    newLi.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(newLi);
}

function addLanguageOptimized(langName){
    let newLi = document.createElement('li');
    newLi.appendChild(document.createTextNode(langName));
    console.log(newLi);
    document.querySelector('.language').appendChild(newLi)
}

// addLangauage('Python');
addLanguageOptimized('Python');


// Edit elements in DOM

let editLi = document.querySelector("li:nth-child(2)")
// editLi.innerHTML = 'Mojo';
let newLi = document.createElement('li')
newLi.textContent = 'Mojo'
editLi.replaceWith(newLi);

let firstLang = document.querySelector("li:first-child");
console.log(firstLang);
firstLang.outerHTML = '<li>Typescript</li>'



// Remove Elements in DOM
let lastLang = document.querySelector("li:last-child");
lastLang.remove();