//variaveis
const weightInput = document.querySelector('#weightInput');
const heightInput = document.querySelector('#heightInput');
const calcButton = document.querySelector('#calcButton');
let stringResultIMC = document.querySelector('#stringResultIMC');

//eventos
calcButton.addEventListener('click', calcIMC);

//funções callback
function calcIMC() {
    let convertCMtoM = Number(heightInput.value) * 0.01;
    let resultIMC = Number(weightInput.value) / Number(convertCMtoM**2);

    stringResultIMC.innerHTML = resultIMC.toFixed(2);
}

function openModal() {
    
}