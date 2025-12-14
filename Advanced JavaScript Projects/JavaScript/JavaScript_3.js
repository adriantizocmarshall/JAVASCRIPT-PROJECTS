function displayType(character) {
  var characterName = character.getAttribute("data-character-name");
  alert(characterName + " is a character from " + character.innerHTML + ".");
}
