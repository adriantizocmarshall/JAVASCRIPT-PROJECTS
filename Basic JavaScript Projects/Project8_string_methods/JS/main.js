//Example of concat() method
function fullSentence() {
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a complete ";
    var part4 = "sentence.";
    var wholeSentence = part1.concat(part2, part3, part4);
    document.getElementById("concatenate").innerHTML = wholeSentence;
}

//Excample of slice() method
function sliceMethod() {
    var Sentence = "A slice of pizza";
    var Section = Sentence.slice(11, 16);
    document.getElementById("slice").innerHTML = Section;
}

//Example of toString() method
function stringMethod() {
    var X = 182;
    document.getElementById("no2String").innerHTML = X.toString();
}

//Example of toPrecision() method
function precisionMethod() {
    var X = 12938.3012987376112;
    document.getElementById("precision").innerHTML = X.toPrecision(7);
}