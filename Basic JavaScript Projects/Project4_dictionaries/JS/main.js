//Key value pair function indicating species, color, breed, age, and sound of animal
function my_Dictionary() {
    var Animal = {
        Species: "Cat",
        Color: "Black",
        Breed: "American Long Hair",
        Age: 7,
        Sound: "Meow"
    };
    delete Animal.Sound; //Deletes sound from dictionary
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}