let numbers = document.getElementsByClassName('number');
let array = Array.from(numbers);
let result = document.getElementById('results')

function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

function getNumbers() {
    array.forEach(number => 
        number.addEventListener('click', function getValue(){
            result.innerHTML = number.innerHTML;

        })
    );
}

getNumbers();

// console.log(operate(multiplyNumbers, 5, 2));