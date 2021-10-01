// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = `abcdefghkmnpqrstuvwxyz`
var lowercasearray = lowercase.split("")
var specialCharacters = `!@#$%^&*()`
var specialCharactersarray = specialCharacters.split("")
var uppercase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
var uppercasearray = uppercase.split("")
var numbers = `0123456789`
var numbersarray = numbers.split("")
var arrayofstrings = [`lowercase`, `specialCharacters`, `uppercase`, `numbers`]
console.log (uppercasearray[14])

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var password = []


  var passwordLength = prompt("How many characters would you like for your password?");

 if (passwordLength <= 8 || passwordLength > 128) {
    confirm("Password must be longer than 8 characters, and less than 128.")
    generatePassword()
  } else {


  var specialCharacters = confirm("Would you like special characters in your password?");

  var uppercase = confirm("Would you like uppercase characters in your password?");

  var lowercase = confirm("Would you like lowercase characters in your password?");

for (var i = 0; i < passwordLength; i++) {
  var categories = arrayofstrings[Math.floor(Math.random() *arrayofstrings.length)]
if (categories === "uppercase") {
  var UP = uppercasearray[Math.floor(Math.random() *uppercasearray.length)]
  password.push(UP)
}
else if (categories === "lowercase") {
  var LC = lowercasearray[Math.floor(Math.random() *lowercasearray.length)]
  password.push(LC)
}  
else if (categories === "number") {
  var NU = numbersarray[Math.floor(Math.random() *numbersarray.length)]
  password.push(NU)
}  
else if (categories === "specialCharacters") {
  var SC = specialCharactersarray[Math.floor(Math.random() *specialCharactersarray.length)]
  password.push(SC)
console.log (generatePassword)
}}

return password
}}



// After clicking on generatePassword I'd like to generate a prompt (edited) 

// And then once they've typed in their length of the password, we will ask if they want special characters through a confirm

// The same confirm for uppercase and lowercase characters

// Then we will generate a password by randomly selected characters from their "confirmed" charsets

// we can concatenate all the randomly selected characters into one string called password

// return our password from the generatePassword function