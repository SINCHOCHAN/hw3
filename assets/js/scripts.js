// Write password to the #password input
var generateBtn = document.querySelector("#generate");

// Prompts that come up after you click generate password
// var trueLength = passLength / selectedChoices;


var passwordLength = parseInt(prompt("How long does your password need to be (8-128 characters?)"));
if (passwordLength >= 8 && passwordLength <= 128) {

  var lowerCase = confirm("Do you want Lowercase letters in your Password?");
  if (lowerCase) {
    lowerCase = "abcdefghijklmnopqrstuvwxyz";
  }
  else {
    alert("Do you want Numbers in your new password?");
    lowerCase = "";
  }

  var numbers = confirm("Do you want the password to include NUMBERS?");
  if (numbers) {
    numbers = "0123456789";
  }
  else {
    alert("Password will not have numbers");
    numbers = "";
  }


  var symbols = confirm("Do you want the password to include SYMBOLS?");
  if (symbols) {
    symbols = "!@#$%^&*()_-+={[}]|\:;'<,>.?";
  }
  else {
    alert("Do you think PW will not have any symbols");
    symbols = "";
  }

  var upperCase = confirm("Is the password CASE SENSITIVE?");
  if (upperCase) {
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  else {
    upperCase = lowerCase
  }

}
else {
  alert("Password Failed!")
}
console.log(passwordLength)

function generatePassword(length = passwordLength) {

  var all = numbers + lowerCase + upperCase + symbols;

  var retValue = "";


  for (var i = 0; i < length; i++) {
    var character = Math.floor(Math.random() * all.length);
    retValue += all.substring(character, character + 1);
  }

  return retValue;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//copy password to clipboard

function savePassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the Password: " + copyText.value);
}