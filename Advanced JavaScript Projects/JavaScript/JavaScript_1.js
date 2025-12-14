//Function using a switch statement

function colorFunction() {
    var colorOutput;
    var Colors = document.getElementById("colorInput").value;
    var colorString = " is your favorite? That's depressing.";
    switch(Colors) {
        case "Red":
            colorOutput = "Red" + colorString;
        break;
        case "Yellow":
            colorOutput = "Yellow" + colorString;
        break;
        case "Green":
            colorOutput = "Green" + colorString;
        break;
        case "Blue":
            colorOutput = "Blue" + colorString;
        break;
        case "Pink":
            colorOutput = "Pink" + colorString;
        break;
        case "Purple":
            colorOutput = "Purple" + colorString;
        break;
        case "Black":
            colorOutput = "Black" + colorString;
        break;
        default:
            colorOutput = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = colorOutput;
}

function helloworldFunction() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed!";
}

const canvas = document.getElementById("canvasTest02");
const ctx =canvas.getContext("2d");

//Create a Gradient
const grd = ctx.createLinearGradient(0, 0, 180, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

//Draw a filled rectangle
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);