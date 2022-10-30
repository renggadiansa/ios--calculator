const numbers = document.querySelectorAll('.item numbers');
const result = document.querySelectorAll('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.persen');



let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = "flase";
let sign = "";
let resultValue = 0;


for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let arr = e.target.getAttribute('value');
        if(isFirstValue === false) {
            getFirstValue(atr);
        }
    })
}

function getFirstValue(el) {
        result.innerHTML = "";
        firstValue += el;
        result.innerHTML = firstValue;
        firstValue = +firstValue;
}

function getSecondValue(el) {
    if(firstValue != "" && sign != "") {
        secondValue += el;
        result,innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign () {
    for(let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign();



equals.addEventListener('click', () => {
    result.innerHTML = "";
    if(sign === "+") {
        resultValue = firstValue + secondValue;
    }else if(sign === "-") {
        resultValue = firstValue - secondValue;
    }else if(sign === "x") {
        resultValue = firstValue * secondValue;
    }else if(sign === "/") {
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
})

function checkResultLength() {
    resultValue = JSON.stringify(resultValue);

    if(resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () =>{
    result.innerHTML ="";
    if(firstValue != "") {
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if(firstValue != ""&& secondValue != "" && sign != ""){
    resultValue = -resultValue
    }
    result.innerHTML = resultValue;
})

percent.addEventListener('click', () => {
    result.innerHTML ="";
    if(firstValue != "") {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if(firstValue != ""&& secondValue != "" && sign != ""){
    resultValue = resultValue /100;
    }
    result.innerHTML = resultValue;
})

clear.addEventListener('click', () => {
    result.innerHTML = 0;

    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = "";
    sign = "";
    resultValue = 0;
})