let numbers = document.getElementsByClassName('number');
let array = Array.from(numbers);
let result = document.getElementById('results');
let clear = document.getElementById('clear');
// result.textContent = "0"
result.innerHTML = "0";
let a = "0";
let operators = document.getElementsByClassName('operator');
let arrayOperators = Array.from(operators);
let b = "";
// let equals = document.getElementById('equals');
let up = document.getElementById('up');
let values = "";
let display = document.getElementById('display');
let decimal = document.getElementById('decimal');
let remove = document.getElementById('delete');
let warning = "Cannot divide by zero";
let solution = "";


// let solution = "";
// let total = "";

// result.textContent = "0";

function addNumbers(a, b) {
    let value = b.split(' ');
    let number = value[0];
    let digit = a;
    // console.log(digit);
    let one = Number(digit);
    let two = Number(number);
    let total = one + two;
    return total;
    
}

function subtractNumbers(a, b) {
    let value = b.split(' ');
    let number = value[0];
    // console.log("number: " + number);
    // console.log(number);
    // console.log("a: " + a);
    // console.log("b: " + number);
    let digit = a;
    let one = Number(digit);
    let two = Number(number);
    return (two - one);
    
}

function multiplyNumbers(a, b) {
    let value = b.split(' ');
    // console.log("value: " + value);
    // console.log("number: " + value);
    let number = value[0]
    let digit = a;
    let one = Number(digit);
    let two = Number(number);
    // console.log("one(a): " + one);
    // console.log("two(b): " + two);
    // console.log("number: " + number)
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
                // arrayOperators.forEach(operator => operator.disabled = true);
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
            
            // operate(a, b);
            // operateTwo(a, b);
            

            
            

            
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
        a = "0";
        b = "";
        solution = "";
        // decimal.disabled = false;
        // display.innerHTML = "0";
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
            // a = result.innerHTML;
            b = a + " " + operator.innerHTML + " ";
            // console.log(a);
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
            if(operator.innerHTML !== '=') {
                values = "";
                result.innerHTML = values;
                
                

            }
            
            removeValue();
            
            
            


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

function addDecimal() {
    decimal.addEventListener('click', function() {
        let row = Array.from(result.innerHTML);
        if(!row.includes(decimal.innerHTML)) {
            result.innerHTML += decimal.innerHTML;

        }
        
        
        
        
    })

}

function removeValue() {
    let item = Array.from(result.innerHTML);
    // console.log(a);
    remove.addEventListener('click', function() {
        // console.log(row);
        // let output = result.innerHTML.slice(0);
        if(b.length === 0 ) {
            if(result.innerHTML !== "0") {
                item.pop();
                let output = item.join("");
                result.innerHTML = output;
                a = result.innerHTML;
                
                
                

            }
        }
        // else if(result.innerHTML === "") {
        //     // console.log(row.length);
        //     result.innerHTML = "0";

        // }
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

// function operateTwo(a, b) {
//     // let array = b.split(' ');
//     // let first = array[0];
//     if(a.length !== 0 && b.length !== 0) {
//         arrayOperators.forEach(operator => 
//             operator.addEventListener('click', function getOperator() {
//                 if(operator.innerHTML === '+') {
//                     total = addNumbers(a, b);
//                     // a = result.innerHTML;
//                     console.log("total: " + total);
//                     console.log("b: " + b);
                    
                    
//                     // addValue(result.innerHTML);
                    
        
        
//                 }
    
//                 /*if(b.length !== 0 && result.innerHTML !== '') {
//                     if(operator.innerHTML === '+') {
//                         let total = addNumbers(result.innerHTML, b);
//                         // b = total + " " + operator.innerHTML
//                         console.log(total);
                        
//                         // addValue(result.innerHTML);
                        
            
            
//                     }
    
    
                    
//                 }*/
    
//                 b = total + " " + operator.innerHTML
                
    
//             })
//         )

//     }
    
//     // if(b.length !== 0 && result.innerHTML !== '') {
        
        

//     // }
    

// }

// function addTwo() {

// }

// addNumbers(a, b);


calcValues();





