let numbers = document.getElementsByClassName('number');
let array = Array.from(numbers);
let result = document.getElementById('results');
let clear = document.getElementById('clear');
result.innerHTML = "0";
let a = "";
let operators = document.getElementsByClassName('operator');
let arrayOperators = Array.from(operators);
let b = "";
let up = document.getElementById('up');
let values = "";
let display = document.getElementById('display');
let decimal = document.getElementById('decimal');
let remove = document.getElementById('delete');
let warning = "Cannot divide by zero";
let solution = "";


function addNumbers(a, b) {
    let value = b.split(' ');
    let number = value[0];
    let digit = a;
    let one = Number(digit);
    let two = Number(number);
    let total = one + two;
    return total;
    
}

function subtractNumbers(a, b) {
    let value = b.split(' ');
    let number = value[0];
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
        return warning;
    }
    return (two / one);
    
    
}


function getNumbers() {
    array.forEach(number => 
        number.addEventListener('click', function getValue(){
            if(result.innerHTML === "0") {
                result.innerHTML = number.innerHTML;
                

            }
            else if(result.innerHTML === warning) {
                result.innerHTML = number.innerHTML;
                

            }
            else if(solution.length !== 0) {
                result.innerHTML = number.innerHTML;


            }
            else if(result.innerHTML !== "0") {
                result.innerHTML += number.innerHTML;
            }
            addDecimal();
            a = result.innerHTML;
            removeValue();
            computeValues();
            /* Set solution blank so as to reset it after clicking equals and a new
            number */
            solution = "";
            
            
            

            
            

            
        })
        
        
    );

    replaceResults();
    clearDisplay();
    

    

    
}

function clearDisplay() {
    clear.addEventListener('click', function removeValues() {
        result.innerHTML = "0";
        up.innerHTML = "";
        values = "";
        a = "";
        b = "";
        solution = "";
        
    })

}

function computeValues() {
    let add = addNumbers(a, b);
    let subtract = subtractNumbers(a, b);
    let divide = divideNumbers(a, b);
    let multiply = multiplyNumbers(a, b);
    let value = b.split(' ');
    let first = value[1];
    arrayOperators.forEach(operator => 
        operator.addEventListener('click', function getOperator() {
            b = a + " " + operator.innerHTML + " ";
            if (a.length !== 0 && b.length !== 0) {
                if(first === "+") {
                    if (first === "-") {
                        b = subtract + " " + operator.innerHTML + " ";
                    }
                    else if (first === "/") {
                        b = divide + " " + operator.innerHTML + " ";
                    }
                    if (first === "x") {
                        b = multiply + " " + operator.innerHTML + " ";
                    }
                    else {
                        b = add + " " + operator.innerHTML + " ";


                    }
                    
                }
                
                // subtraction
                if(first === "-") {
                    if (first === "+") {
                        b = add + " " + operator.innerHTML + " ";
                    }
                    else if (first === "/") {
                        b = divide + " " + operator.innerHTML + " ";
                    }
                    if (first === "x") {
                        b = multiply + " " + operator.innerHTML + " ";
                    }
                    b = subtract + " " + operator.innerHTML + " ";

                }

                // division
                if(first === "/") {
                    if (first === "+") {
                        b = add + " " + operator.innerHTML + " ";
                    }
                    else if (first === "-") {
                        b = subtract + " " + operator.innerHTML + " ";
                    }
                    if (first === "x") {
                        b = multiply + " " + operator.innerHTML + " ";
                    }
                    
                    b = divide + " " + operator.innerHTML + " ";

                }

                // multiplication
                if(first === "x") {
                    if (first === "+") {
                        b = add + " " + operator.innerHTML + " ";
                    }
                    else if (first === "-") {
                        b = subtract + " " + operator.innerHTML + " ";
                    }
                    if (first === "/") {
                        b = divide + " " + operator.innerHTML + " ";
                    }

                    b = multiply + " " + operator.innerHTML + " ";
                }
                
                // equals
                if(operator.innerHTML === "=") {
                    if(first === "+") {
                        b = "";
                        result.innerHTML = add;
                        solution = result.innerHTML;
                    }
                    if(first === "x") {
                        b = "";
                        result.innerHTML = multiply;
                        solution = result.innerHTML;
                    }
                    if(first === "/") {
                        b = "";
                        result.innerHTML = divide;
                        solution = result.innerHTML;
                    }
                    if(first === "-") {
                        b = "";
                        result.innerHTML = subtract;
                        solution = result.innerHTML;
                    }
                }
                
                
                
            }

            
            
            up.innerHTML = b;
            removeValue();
            
            

        })
    )

    replaceResults();
    clearDisplay();
    removeValue();
    

}


function replaceResults() {
    // change the value of 'a' after an operator has been selected
    arrayOperators.forEach(operator => 
        operator.addEventListener('click', function() {
            array.forEach(number => number.addEventListener('click', function(){
                /*let bArray = [...b];
                let first = String(bArray[0]);*/
                if(operator.innerHTML !== '=') {
                    values += number.innerHTML;
                    
                    

                }
                

            }))
            // set value first to empty to prevent it from displaying on screen after clearing
            if(operator.innerHTML !== '=') {
                values = "";
                result.innerHTML = values;
                
                

            }
            
            removeValue();
            
            
            


        })
        
        
       
    )

    
    
    // clearDisplay();
    
    
    

}


function addDecimal() {
    decimal.addEventListener('click', function() {
        let row = Array.from(result.innerHTML);
        if(!row.includes(decimal.innerHTML)) {
            result.innerHTML += decimal.innerHTML;

        }
        removeValue();
        
        
        
        
    })

}

function removeValue() {
    let item = Array.from(result.innerHTML);
    // console.log(a);
    remove.addEventListener('click', function() {
        if(b.length === 0 ) {
            if(result.innerHTML !== "0") {
                item.pop();
                let output = item.join("");
                result.innerHTML = output;
                a = result.innerHTML;
                
                
                

            }
        }
        
        else if (b.length !== 0) {
            item.pop();
            let output = item.join("");
            result.innerHTML = output;
            a = result.innerHTML;
            // console.log(result.innerHTML)
            
            
        }
        // a = result.innerHTML;
    
        
    });

    
    
}

function disableOperators() {
    if(result.innerHTML === warning) {
        console.log("haba");
        arrayOperators.forEach(operator => operator.disabled = true);
    }
}


function calcValues() {
    getNumbers();
    clearDisplay();
    replaceResults();
    computeValues();
    disableOperators();
    
    
}


calcValues();





