//Example of while loop.
function while_Loop() {
    var loop = "";
    var X = 1;
    while (X < 15) {
        loop += X + "<br>";
        X++;
    }
    document.getElementById("loop").innerHTML = loop;
}

//Example of for loop.
function for_Loop() {
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Clarinet"];
    var Content = "";
    var Y;
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("list_Instruments").innerHTML = Content;
}

//Example of an array function.
function arrayFunction() {
    var Cat = [];
    Cat[0] = "small";
    Cat[1] = "medium";
    Cat[2] = "large";
    Cat[3] = "Isadora";
    document.getElementById("array").innerHTML = "I have a " + Cat[2] + " cat" + " named " + Cat[3] + ".";
}

//Example of function that utilizes a constant.
function constantFunction() {
    const Musical_Instrument = {type: "guitar", brand: "Fender", color: "black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("constant").innerHTML = "The brand of the " +
        Musical_Instrument.type + " is " + Musical_Instrument.brand + ".";
}

//Example of a function that uses the "let" keyword.
function letFunction() {
    let gameFranchise = "Silent Hill"
    let franchiseFavorite = "Silent Hill 4: The Room";
    document.getElementById("letKeyword").innerHTML = "My favorite video game franchise is " + gameFranchise + " and my favorite game is " + franchiseFavorite + ".";
}

//Example of a function that stores an object using the let keyword.
function carFunction() {
    let car = {
        make: "Dodge ",
        model: "Viper ",
        year: "2021 ",
        color: "red ",
        description : function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("carObject").innerHTML = car.description();    
}