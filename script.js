// The Password Generator will provide a password between 8 and 128 characters, based on user specifications

// Assignment Code and Event Listener 
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Variable Declaration
let password       = "";
let passwordLength = "";
// let useLower       = false;
// let useUpper       = false;
// let useSpecial     = false;
// let useNumber      = false;

// Arrays
// let alphaLower  = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// let alphaUpper  = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// let specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
// let number      = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let composition = [alphaLower, alphaUpper, specialChar, number];

// Object Literal
let options = {
  alphaLower:  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  alphaUpper:  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  specialChar: ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"],
  number:      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
}



function getPasswordLength() {
  while ((isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)) {
    passwordLength = parseInt(prompt("Length?"));
    if (isNaN(passwordLength)) {
      alert('This tool requires a numerical value');
    }
    else if (passwordLength < 8) {
      alert('This tool requires a numerical value that is larger than 8');
    }
    else if (passwordLength > 128) {
      alert('This tool requires a numerical value that is smaller than 128');
    }
    else {
      alert("Your password will be " + passwordLength + " characters long");
      break;
    }
  }
}

console.log(composition);
function getPasswordComposition() {
  composition[0] = confirm("Would you like to include lower-case characters in your password?");
  composition[1] = confirm("Would you like to include upper-case characters in your password?");
  composition[2] = confirm("Would you like to include special characters in your password");
  composition[3] = confirm("Would you like to include numbers in your password");
}
function setPasswordComposition() {
  composition = composition.filter(function(selection) {
    if (selection === true) {
      return selection;
    }
  }
)};



// function generatePassword() {
//   password = "";
//   for (let i = 0; i < passwordLength; i++) {
//     let random_index = Math.floor(Math.random() * alphaLower.length);
//     password += alphaLower[random_index];
//   }
//   for (let j = 0; j <  passwordNumbers; j++) {
//     let random_index = Math.floor(Math.random() * number.length);
//     password += number[random_index];
//   }
//   for (let y = 0; y <  passwordCharacters; y++) {
//     let random_index = Math.floor(Math.random() * specialChar.length);
//     password += specialChar[random_index];
//   }
//   return password
// }


// Write password to the #password input
function writePassword() {
  getPasswordLength();
  getPasswordComposition();
  setPasswordComposition();
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}