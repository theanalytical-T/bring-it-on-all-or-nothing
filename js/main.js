// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let simp = true
alert(simp)

// Declare a variable, reassign it to your favorite color, and console log the value
let favColor = 'lime green'
favColor = 'navy blue'
console.log(favColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function expression(t1, t2, t3, t4) {
    return (t1 + t2 + t3) / t4
}

expression(5, 4, 8, 3)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function power(r2, d2) {
    console.log(Math.pow(r2, d2))
    //could also do r2 ** d2
}

power(2, 3)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function lesson(cray, zay) {
    if (cray) {//this is a truthy value
        alert(zay)
    } else {
        console.log(zay)
    }
    //Another option: b ? alert(zay) : console.log(zay)
}
//Another option: const lesson = (cray, zay) => cray ? alert(zay) : console.log(zay)

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number


