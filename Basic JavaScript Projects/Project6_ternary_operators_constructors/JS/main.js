//Example of a ternary operator using input from browser
function Ride_Function() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = can_ride + " to ride.";
}

//Example of a construction function that uses keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors") .innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

//Second example of construction function using "new" and "this" keywords
function Ball(Color, Type) {
    this.Ball_Color = Color;
    this.Ball_Type = Type;
}

var Charlie = new Ball("Brown", "Football");
var Linus = new Ball("Orange", "Pumpkin");

function myFunction02() {
    document.getElementById("New_and_This") .innerHTML =
    "Charlie wants to kick a " + Charlie.Ball_Color + "-colored " + Charlie.Ball_Type;
}

//Example of a nested function
function doSomething() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 1;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}