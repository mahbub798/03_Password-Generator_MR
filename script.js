// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["`", "~", "@", "#", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "'", "<", ">", "/", "|"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getRandom(array) {
  var randomCharacter = array[Math.floor(Math.random() * array.length)];
  return randomCharacter;
}


function generatePassword(){

  var lengthOfPassword = prompt("How many character of password I would like to contain?");

  if(lengthOfPassword<8){
    alert("Your password must be equal or greater than 8 characters.");
    return;
  }

  if(lengthOfPassword>128){
    alert("Your password must be equal or less than 128 characters.");
    return;
  }

  console.log(lengthOfPassword);

  var lowerCaseLetter = confirm("Click Ok to confirm include lower case letter.");
  var upperCaseLetter = confirm("Click Ok to confirm include upper case letter.");
  var numericCharacter = confirm("Click Ok to confirm include numeric character.");
  var specialCharacter = confirm("Click Ok to confirm include special character.");

  if(lowerCaseLetter === false && 
    upperCaseLetter === false &&
    numericCharacter === false &&
    specialCharacter === false){
      alert("You must pick at least one criteria for your password.");
      return;
  }
  
  var result = [];
  var possible = [];
  var guaranteed = [];

  if(lowerCaseLetter){
    possible = possible.concat(lowercase);
    guaranteed.push(getRandom(lowercase));
  }

  if(upperCaseLetter){
    possible = possible.concat(uppercase);
    guaranteed.push(getRandom(uppercase));
  }

  if(numericCharacter){
    possible = possible.concat(number);
    guaranteed.push(getRandom(number));
  }

  if(specialCharacter){
    possible = possible.concat(special);
    guaranteed.push(getRandom(special));
  }

  for(var i = 0; i < lengthOfPassword; i++){
    var possibleChar = getRandom(possible);

    result.push(possibleChar);
  }

  for(var i = 0; i < guaranteed.length; i++){
    result[i] = guaranteed[i]
  }

  return result.join('');

}




// function getRandomLowerCaseCharacter(){
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpperCaseCharacter(){
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumericCharacter(){
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSpecialCharacter(){
//   const symbols = '~@#$%^&*()_{}[]`=<>/\|?';
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }
