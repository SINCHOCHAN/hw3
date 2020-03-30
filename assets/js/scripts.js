const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)
// Write password to the #password input
function writePassword() {
    var passwordNow = newPass.join('');
    var passwordText = document.querySelector("#password");
    passwordText.value = passwordNow;
} 

var newPass = [];
var Lowercase = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m",];
var Uppercase = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M",];
var Symbols = ["@","#","$","%","^","&",]
var Numbers = ["0","1","2","3","4","5","6","7","8","9",]

passLength = prompt("pick a # between 8 and 128 please")
var selectedChoices = 4;


// Prompts that come up after you click generate password
// var trueLength = passLength / selectedChoices;
console.log(selectedChoices);
var doLowercase = confirm("Do you want Lowercase letters in your Password?")
var doUppercase = confirm("Do you want Uppercase letters in your new password?")
var doSymbols = confirm("Do you want Symbols in your new password?")
var doNumbers = confirm("Do you want Numbers in your new password?") 

function passGen(Milk) {
    for (var i = 0; i < trueLength; i++) {
        var numnum = Math.floor(Math.random() * Milk.length); 
        newPass.push(Milk[numnum]);
    }


}

function copyFunction() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}

if (!doLowercase) {
    // passGen(Lowercase);
    selectedChoices--
}
if (!doUppercase) {
    // passGen(Uppercase);
    selectedChoices--
}
if (!doSymbols) {
    // passGen(Symbols);
    selectedChoices--
}
if (!doNumbers) {
    // passGen(Numbers);
    selectedChoices--
}

var trueLength = passLength / selectedChoices;
if (doLowercase) {
    passGen(Lowercase); 
}
if (doUppercase) {
    passGen(Uppercase);
}
if (doSymbols) {
    passGen(Symbols);
}
if (doNumbers) {
    passGen(Numbers);
}