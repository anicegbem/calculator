let numbers = document.getElementsByClassName('number');
let array = Array.from(numbers);
let result = document.getElementById('results');
let clear = document.getElementById('clear');
// result.textContent = "0"
result.innerHTML = "0";
let a = result.innerHTML;
let operators = document.getElementsByClassName('operator');
let arrayOperators = Array.from(operators);
let b = "";
let equals = document.getElementById('equals');
let up = document.getElementById('up');
let value = "";
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

    replaceResults();

    

    
}

function clearDisplay() {
    clear.addEventListener('click', function removeValues() {
        result.innerHTML = "0";
        up.innerHTML = "";
        value = "";
    })

}

function computeValues() {
    arrayOperators.forEach(operator => 
        operator.addEventListener('click', function getOperator() {
            b = a + " " + operator.innerHTML + " ";
            // array.forEach(number => 
            //     number.addEventListener('click', function getSecondValue(){
            //         result.innerHTML = number.innerHTML;
            //         a = result.innerHTML

            //     })
            // )
            // if(operator.innerHTML === "+") {
            //     getSolution(addNumbers, a);

            // }
            // attach the first number plus the operator to the div above 
            
            up.innerHTML = b;

        })
    )
    replaceResults();
    

}

function getSolution(operator, a) {
    equals.addEventListener('click', function getEqual() {
        result.innerHTML = operate(operator, ...a);
    })

}

function replaceResults() {
    // change the value of 'a' after an operator has been selected
    arrayOperators.forEach(operator => 
        operator.addEventListener('click', function() {
            array.forEach(number => number.addEventListener('click', function(){
                /*let bArray = [...b];
                let first = String(bArray[0]);*/
                value += number.innerHTML;
                 
                
                
                
                
                
    
                // console.log(first.length);
                // console.log(bArray[0]);
                /*if(first.length < 2) {
                    result.innerHTML = number.innerHTML;
                }
                else if (first.length >= 2) {
                    result.innerHTML += number.innerHTML;
                }*/

                // result.innerHTML = a;

            }))
            // set value first to empty to prevent it from displaying on screen after clearing
            value = "";
            result.innerHTML = value;
            
            


        })
        
       
    )

    clearDisplay();
    
    
    

}

/*function addSecondValue(value) {
    array.forEach(number => number.addEventListener('click', function() {
        value += number.innerHTML;
    }))
}*/

function calcValues() {
    getNumbers();
    clearDisplay();
    replaceResults();
    computeValues();
    

}

calcValues();

// console.log(a);

// console.log(operate(multiplyNumbers, 5, 2));