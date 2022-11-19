let numbers = document.getElementsByClassName('number');
let array = Array.from(numbers);
let result = document.getElementById('results');
let clear = document.getElementById('clear');
// result.textContent = "0"
result.innerHTML = "0";
let a = result.innerHTML;
// result.textContent = "0";

function addNumbers(...a) {
    // use rest parameters, and then use the reduce() method to compute
    // return a + b;
    let items = [...a];
    return items.reduce((a, b) => a + b, 0);
    
}

function subtractNumbers(...a) {
    let items = [...a];
    return items.reduce((a, b) => a - b);
    // return a - b;
}

function multiplyNumbers(...a) {
    let items = [...a];
    return items.reduce((a, b) => a * b);
    // return a * b;
}

function divideNumbers(...a) {
    let items = [...a];
    return items.reduce((a, b) => a / b);
    // return a / b;
}

function operate(operator, ...a) {
    return operator(...a);
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

            a = result.innerHTML;

            
            

            
        })
        
        
    );

    

    
}

function clearDisplay() {
    clear.addEventListener('click', function removeValues() {
        result.innerHTML = "0";
    })

}

getNumbers();
clearDisplay();
// console.log(a);

// console.log(operate(multiplyNumbers, 5, 2));