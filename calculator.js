let numbers = document.getElementsByClassName('number');
let array = Array.from(numbers);
let result = document.getElementById('results');
// result.textContent = "0"
result.innerHTML = "0";
// let a = "";
// result.textContent = "0";

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
            if(result.innerHTML === "0") {
                result.innerHTML = number.innerHTML;
                

            }
            else if(result.innerHTML !== "0") {
                result.innerHTML += number.innerHTML;
            }
            

            
        })
    );

    // a = result.innerHTML;
}

getNumbers();
// console.log(a);

// console.log(operate(multiplyNumbers, 5, 2));