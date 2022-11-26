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
let values = "";
let display = document.getElementById('display');
let solution = "";
// result.textContent = "0";

function addNumbers(a, b) {
    let value = b.split(' ');
    let number = value[0];
    let digit = a;
    let one = Number(digit);
    let two = Number(number);
    let total = one + two;
    // the idea is to use the result of the operation to form 'b' as opposed to 
    // using 'a' to form 'b'
    // addValue(total);
    return total;
    
}

function subtractNumbers(a, b) {
    let value = b.split(' ');
    let number = value[0]
    let digit = a;
    let one = Number(digit);
    let two = Number(number);
    return (two - one);
    
}

function multiplyNumbers(a, b) {
    let value = b.split(' ');
    let number = value[0]
    let digit = a;
    let one = Number(digit);
    let two = Number(number);
    return (one * two);
}

function divideNumbers(a, b) {
    let value = b.split(' ');
    let number = value[0]
    let digit = a;
    let one = Number(digit);
    let two = Number(number);
    if (one === 0) {
        return "Cannot divide by zero"
    }
    return (two / one);
    
    
}

function operate(a, b) {
    equals.addEventListener('click', function () {
        let value = b.split(' ');
        let first = value[1];
        if(first === '+') {
            result.innerHTML = addNumbers(a, b);
            // a = result.innerHTML;
            up.innerHTML = "";
            // addValue(result.innerHTML);
            


        }
        if(first === '-') {
            result.innerHTML = subtractNumbers(a, b);
            up.innerHTML = "";

        }

        if(first === 'x') {
            result.innerHTML = multiplyNumbers(a, b);
            up.innerHTML = "";

        }

        if(first === '/') {
            result.innerHTML = divideNumbers(a, b);
            up.innerHTML = "";

        }
        // we created a variable - 'solution' and set the value to the result.innerHTML
        solution = result.innerHTML;
        b = solution + " " + first + " ";
        
        
    })
    
    
    

    
    
    
    
    
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
            computeValues();
            operate(a, b);
            

            
            

            
        })
        
        
    );

    replaceResults();

    

    
}

function clearDisplay() {
    clear.addEventListener('click', function removeValues() {
        result.innerHTML = "0";
        up.innerHTML = "";
        values = "";
        a = "0";
        b = "";
        solution = "";
        // display.innerHTML = "0";
    })

}

function computeValues() {
    arrayOperators.forEach(operator => 
        operator.addEventListener('click', function getOperator() {
            // a = result.innerHTML;
            if(solution === "") {
                b = a + " " + operator.innerHTML + " ";

            }
            else if (solution !== "") {
                b = solution + " " + operator.innerHTML + " ";
                
            }
            
            
            
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
            operate(a, b);
            up.innerHTML = b;
            
            

        })
    )

    replaceResults();
    

}


function replaceResults() {
    // change the value of 'a' after an operator has been selected
    arrayOperators.forEach(operator => 
        operator.addEventListener('click', function() {
            array.forEach(number => number.addEventListener('click', function(){
                /*let bArray = [...b];
                let first = String(bArray[0]);*/
                values += number.innerHTML;
                // b += " " + values + " " + "=";
                 
                
                
                
                
                
    
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
            values = "";
            result.innerHTML = values;
            
            
            
            


        })
        
       
    )
    
    // clearDisplay();
    
    
    

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

function addValue(total) {
    equals.addEventListener('click', function(){
        arrayOperators.forEach(operator => 
            operator.addEventListener('click', function() {
                b = total + " " + operator.innerHTML;
                up.innerHTML = b;
            })
        )
        
    })
    
}
// addNumbers(a, b);


calcValues();




// console.log(a);

// console.log(operate(multiplyNumbers, 5, 2));