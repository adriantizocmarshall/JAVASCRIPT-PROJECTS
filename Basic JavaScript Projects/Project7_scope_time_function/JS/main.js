//Example of a global variable
var X = 1;
function add_Numbers01() {
    document.write (X + 1);
}
function add_Numbers02() {
    document.write (X + 2);
}
add_Numbers01();
add_Numbers02();

//Example of a local variable
function add_Numbers03() {
    var X = 5;
    document.write (X + 3);
}
function add_Numbers04() {
    var X = 5;
    document.write (X + 7);
}
add_Numbers03();
add_Numbers04();

//Intentional error using local variable example
function add_Numbers05() {
    var X = 3;
    console.log(15 + X);
}
function add_Numbers06() {
    console.log(10 + X);
}
add_Numbers05();
add_Numbers06();

//Example of an if statement
function get_Date() {
    if (new Date() .getHours() < 18) {
        document.getElementById("demo").innerHTML = "How are you today?";
    }
}

//Second example of an if statement
function get_Date02() {
    if (new Date() .getHours() < 18) {
        document.getElementById("statement").innerHTML = "How was your day?";
    }
}

//Example of else statement
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote.";
    }
    else {
        Vote = "You are not old enough to vote.";
    }
    document.getElementById("ageQuery").innerHTML = Vote;
}

//Example of else if statement
function timeFunction() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}