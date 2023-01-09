// Assignment code here
function generatePassword () {
  var length = window.prompt("How long do you want your password?");
  if (length > 128 || length < 8) {
    window.alert("Password must be between 8-128 characters");
  }
  // window.confirm prompts users with questions
  var capitalLetters =  window.confirm("Do you want to include capital letters?");
  var lowerCaseLetters = window.confirm("Do you want to include lower-case letters?");
  var specialCharacters = window.confirm("Do you want to include special characters?");
  var numbers = window.confirm("Do you want to include numbers?");
  // These variables are the characters that can be used in a generated password.
  var caps = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var special = ["!","@","#","$","%","^","&","*","(",")"]
  var numbs = ["1","2","3","4","5","6","7","8","9","0"]
  var allChars = []
  // these if statements use the users qualifications to create a password
  if (capitalLetters === true) {
    allChars =  allChars.concat(caps)
  }
  if (lowerCaseLetters === true) {
    allChars = allChars.concat(lowers)
  }
  if (specialCharacters === true) {
    allChars = allChars.concat(special)
  }
  if (numbers === true) {
    allChars = allChars.concat(numbs)
  }
  var password = ""
  for (i = 0; i <= length; i++) {
    var randomPass = Math.floor(Math.random() * allChars.length);
    var generatePass = allChars[randomPass];
    password = password.concat(generatePass) 
  } console.log(password)
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);