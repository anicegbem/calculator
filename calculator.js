let numbers = document.getElementsByClassName('number');
let array = Array.from(numbers);
let result = document.getElementById('results');
let clear = document.getElementById('clear');
// result.textContent = "0"
result.innerHTML = "0";
let a = "";
let operators = document.getElementsByClassName('operator');
let arrayOperators = Array.from(operators);
let b = "";
// let equals = document.getElementById('equals');
let up = document.getElementById('up');
let values = "";
let display = document.getElementById('display');
let solution = "";
// let total = "";

// result.textContent = "0";

function addNumbers(a, b) {
    let value = b.split(' ');
    let number = value[0];
    /* From what i can infer the 'number' returned here, and subsequently
    converted to a Number, is an empty string. That seems to be the reason for
    the earlier diagnosed issue */
    // console.log("number: " + number);
    let digit = a;
    // let number = b;
    let one = Number(digit);
    let two = Number(number);
    // console.log("b: " + number);
    // console.log("a: " + digit)
    // console.log("one(a): " + one);
    // console.log("two(b): " + two)
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
    /*switching two and one seemed to solve the problem of having negative values
    in 'b'. The problem stems from the creation of 'b', where 'b' is formed from 
    the value of the 'solution' variable*/
    // console.log("a: " + one);
    // console.log("b(two): " + two);
    return (two - one);
    
}

function multiplyNumbers(a, b) {
    let value = b.split(' ');
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
        return "Cannot divide by zero"
    }
    return (two / one);
    
    
}

function operate(a, b) {
    // solution = result.innerHTML;
    let value = b.split(' ');
    let first = value[1];
    arrayOperators.forEach(operator => 
        operator.addEventListener('click', function () {
            if(operator.innerHTML === '=') {
                if(first === '+') {
                    result.innerHTML = addNumbers(a, b);
                    // a = result.innerHTML;
                    b = "";
                    solution = result.innerHTML;
                    

                }
                if(first === '-') {
                    result.innerHTML = subtractNumbers(a, b);
                    // a = result.innerHTML;
                    up.innerHTML = "";
                    solution = result.innerHTML;

                }
                
                // b = solution + " " + first + " ";
                // addValue(result.innerHTML);
                


            }
            
            if(operator.innerHTML === '+') {
                
                if(first === "-"){
                    result.innerHTML = subtractNumbers(a, b);
                    solution = result.innerHTML;
                    b = solution + " " + operator.innerHTML + " ";
                }
                if(first === "/"){
                    result.innerHTML = divideNumbers(a, b);
                    solution = result.innerHTML;
                    b = solution + " " + operator.innerHTML + " ";
                }
                if(first === "x"){
                    result.innerHTML = multiplyNumbers(a, b);
                    solution = result.innerHTML;
                    b = solution + " " + operator.innerHTML + " ";
                }
                
                else {
                    solution = addNumbers(a, b);
                    // console.log("b: " + b);
                    // a = total;
                    // result.innerHTML = addNumbers(a, b);
                    // solution = result.innerHTML;
                    up.innerHTML = solution + " " + operator.innerHTML + " ";
                    

                }
                
                // console.log(total);
                // if(first === "-"){
                //     result.innerHTML = subtractNumbers(a, b);
                //     solution = result.innerHTML;
                //     b = solution + " " + operator.innerHTML + " ";
                // }

            }

            if(operator.innerHTML === "-") {
                if(first === "+"){
                    result.innerHTML = addNumbers(a, b);
                    solution = result.innerHTML;
                    b = solution + " " + operator.innerHTML + " ";
                }
                else if(first === "x"){
                    result.innerHTML = multiplyNumbers(a, b);
                    solution = result.innerHTML;
                    b = solution + " " + operator.innerHTML + " ";
                }
                else if(first === "/"){
                    result.innerHTML = divideNumbers(a, b);
                    solution = result.innerHTML;
                    b = solution + " " + operator.innerHTML + " ";
                }
                else {
                    // result.innerHTML = subtractNumbers(a, b);
                    // a = total;
                    result.innerHTML = subtractNumbers(a, b);
                    solution = result.innerHTML;
                    b = solution + " " + operator.innerHTML + " ";
                    // if(a !== "" && b !== "") {
                    //     solution = result.innerHTML;
                    //     b = solution + " " + operator.innerHTML + " ";

                    // }
                    
                    

                }
                
                // if(first === "+"){
                //     result.innerHTML = addNumbers(a, b);
                //     solution = result.innerHTML;
                //     b = solution + " " + operator.innerHTML + " ";
                // }
                // console.log(total);

            }


            if(operator.innerHTML === 'x') {
                if(first === '+') {
                    result.innerHTML = addNumbers(a, b);
                    solution = result.innerHTML;
                    b = solution + " " + operator.innerHTML + " ";

                }
                else if(first === '-') {
                    result.innerHTML = subtractNumbers(a, b);
                    solution = result.innerHTML;
                    b = solution + " " + operator.innerHTML + " ";

                }
                else if(first === '/') {
                    result.innerHTML = divideNumbers(a, b);
                    solution = result.innerHTML;
                    b = solution + " " + operator.innerHTML + " ";

                }
                else {
                    result.innerHTML = multiplyNumbers(a, b);
                    // console.log("result: " + result.innerHTML);
                    // console.log("a: " + a);
                    // console.log("b: " + b);
                    solution = result.innerHTML;
                    b = solution + " " + operator.innerHTML + " ";
                    // if(a !== "" && b !== "" && result.innerHTML === a) {
                    //     solution = result.innerHTML;
                    //     b = solution + " " + operator.innerHTML + " ";

                    // }
                    

                }
                

            }

            if(operator.innerHTML === '/') {
                if(first === '+') {
                    result.innerHTML = addNumbers(a, b);
                    solution = result.innerHTML;
                    b = solution + " " + operator.innerHTML + " ";

                }
                else if(first === '-') {
                    result.innerHTML = subtractNumbers(a, b);
                    solution = result.innerHTML;
                    b = solution + " " + operator.innerHTML + " ";

                }
                else if(first === 'x') {
                    result.innerHTML = multiplyNumbers(a, b);
                    solution = result.innerHTML;
                    b = solution + " " + operator.innerHTML + " ";

                }
                else {
                    result.innerHTML = divideNumbers(a, b);
                    solution = result.innerHTML;
                    b = solution + " " + operator.innerHTML + " ";

                }
                

            }
            // a = solution
            // solution = result.innerHTML;
            // b = solution + " " + operator.innerHTML + " ";
            // we created a variable - 'solution' and set the value to the result.innerHTML
            
            

        })
        
    
        
        
        
    )

    

    computeValues();
    
      
    
    
    
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
            // operateTwo(a, b);
            

            
            

            
        })
        
        
    );

    replaceResults();

    

    
}

function clearDisplay() {
    clear.addEventListener('click', function removeValues() {
        result.innerHTML = "0";
        up.innerHTML = "";
        values = "";
        a = "";
        b = "";
        solution = "";
        // display.innerHTML = "0";
    })

}

function computeValues() {
    let value = b.split(' ');
    let first = value[1];
    arrayOperators.forEach(operator => 
        operator.addEventListener('click', function getOperator() {
            // a = result.innerHTML;
            if(solution === "") {
                // a = total;
                b = a + " " + operator.innerHTML + " ";
                
                

            }
            else if(operator.innerHTML === '=') {
                if(first === '+') {
                    // up.innerHTML = b + " " + a + " " + "=";
                    result.innerHTML = addNumbers(a, b);
                }
                else if(first === '-') {
                    // up.innerHTML = b + " " + a + " " + "=";
                    result.innerHTML = subtractNumbers(a, b);
                    // solution = result.innerHTML;
                }
                else if(first === 'x') {
                    // up.innerHTML = b + " " + a + " " + "=";
                    result.innerHTML = multiplyNumbers(a, b);
                    // solution = result.innerHTML;
                }
            }



            /*else if(solution === "" ) {
                b = total + " " + operator.innerHTML + " ";
                // console.log("works");
                

            }*/
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
            // /operateTwo(a, b);
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





// console.log(a);

// console.log(operate(multiplyNumbers, 5, 2));