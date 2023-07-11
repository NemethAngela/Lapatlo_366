// Németh Angéla, Szoft I/2 E, 2023.07.11.

const doc = {
    lapatloInput: document.querySelector('#lapatlo'),
    terfogatInput: document.querySelector('#terfogat'),
    calcButton: document.querySelector('#calcButton')
};

const state = {
    terfogat: 0,
};

window.addEventListener('load', () => {
    init();
});

function init() {       //eseménykezelő
    if (doc.calcButton) {
        doc.calcButton.addEventListener('click', () => {
            startCalc();
        });
    }
}

function startCalc() {
    let lapatlo = doc.lapatloInput.value;
     //let isValid = checkInput(lapatlo);
    let isValid = checkInput(lapatlo);

    if (isValid == true) {
        state.terfogat = calcTerfogat(lapatlo);
        doc.terfogatInput.value = state.terfogat;
    }
    else {
        doc.terfogatInput.value = "Nem jó input lett megadva";
    }
}

function calcTerfogat(lapatlo) {    
    return (lapatlo * lapatlo * lapatlo / Math.sqrt(8));
}

function checkInput(input) {
    let inputStr = String(input);
    let inputNum = Number(input);
    if (inputStr.match(/^[0-9.]+$/)) {
        if(inputNum > 0) {
            return true;
        } else {
        return false;
        }
    } else {
        return false;
    }
}