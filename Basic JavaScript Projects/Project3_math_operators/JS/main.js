//Function for addition
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("addition").innerHTML = "2 + 2 = " + addition;
}

//Function for subtraction
function subtraction_Function() {
    var subtraction = 4 - 2;
    document.getElementById("subtraction").innerHTML = "4 - 2 = " + subtraction;
}

//Function for multiplication
function multiplication() {
    var multiplication = 2 * 2;
    document.getElementById("multiplication").innerHTML = "2 * 2 = " + multiplication;
}

//Function for division
function division() {
    var division = 4 / 2;
    document.getElementById("division").innerHTML = "4 / 2 = " + division;
}

//Function for all basic math operations
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10,\
    divided in half and then subtracted by 5 equals " + simple_Math;
}

//Function for the modulus operator
function modulus_Operator() {
    document.getElementById("modulus").innerHTML = 25 % 6;
}

//Function for the negation operator
function negation_Operator() {
    var x = 10;
    document.getElementById("negation").innerHTML = -x;
}

//Function for the increment operator
function increment_Operator() {
    var x = 5;
    x++;
    document.getElementById("increment").innerHTML = x;
}

//Function for the decrement operator
function decrement_Operator() {
    var x = 5.25;
    x--;
    document.getElementById("decrement").innerHTML = x;
}

//Alert displaying random number
window.alert(Math.random());

//Alert displaying random number between 0 and 100
window.alert(Math.random() * 100);

//Alert displaying PI
window.alert(Math.PI);