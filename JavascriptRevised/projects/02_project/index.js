let formObj = document.querySelector('form');
console.log(formObj);

formObj.addEventListener('submit', (e) => {
    e.preventDefault();

    let height = parseFloat(document.querySelector('#height').value);
    let weight = parseFloat(document.querySelector('#weight').value);
    let result = document.querySelector('.result');

    console.log(height);
    console.log(weight);
    // console.log(typeof height);

    if(height === '' || height  < 0 || isNaN(height)){
        result.innerHTML = `Not valid height ${height}, Please give valid height`;
    } else if(weight === '' || weight  < 0 || isNaN(weight)){
        result.innerHTML = `Not valid weight ${weight}, Please give valid weight`;
    } else {
        let bmi = (weight / ((height * height)/10000)).toFixed(2);

        result.innerHTML = `<span>${bmi}</span>`

        if(bmi < 18.6){
            result.innerHTML += `<br> <span>Underweight</span>`;
        } else if (bmi >= 18.6 && bmi <= 24.9){
            result.innerHTML += `<br> <span>Normal Weight</span>`;
        } else {
            result.innerHTML += `<br> <span>Overweight</span>`;
        }
    }
})

formObj.addEventListener('reset', () => {
    let result = document.querySelector('.result');
    result.innerHTML = '';
})