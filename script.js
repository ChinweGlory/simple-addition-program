let first = document.getElementById('first-input');
let second = document.getElementById('second-input');
var result = document.getElementById('answer')
let button = document.getElementById('btn');

function addNum() {
    let firstNumber = first.value;
    let secondNumber = second.value;
    let result = firstNumber+secondNumber;
    return result;
}
