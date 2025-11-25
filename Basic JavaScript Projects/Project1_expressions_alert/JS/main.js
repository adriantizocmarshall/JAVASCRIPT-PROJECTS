var A = "This is a string ";

document.write (A);

var B = 7;

window.alert (B);

var C = "I said, " + "\"I\'m not sure if this will work\"";

document.write (C);

var D = 5, E = 6, F = 7;

//This is an example of an expression using declared variables.
document.write (D + E + F);

Sent1 = "This the beginning of the string";
Sent2 = " and this is the end of the string";

document.write (Sent1 + Sent2); //This is a concatenated string.

//This is an HTML Event.

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}