// The Password Generator will provide a password between 8 and 128 characters, based on user specifications

// Assignment Code and Event Listener for password generations
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Assignment Code and Event Listener for copy paste functionality 
function copyPassword() {
  let copyText = document.getElementById("password"); 
  copyText.select();
  document.execCommand("copy");
  alert("Copied the password: " + copyText.value);
}

let textArea = document.querySelector("textArea");
textArea.addEventListener("dblclick", copyPassword)


// Declare Variables
let password       = "";
let passwordLength = "";

// Declare Arrays
let alphaLower  = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphaUpper  = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
let number      = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let composition = [
  {name:  alphaLower,  include: false},
  {name:  alphaUpper,  include: false},
  {name:  specialChar, include: false},
  {name:  number,      include: false}
]

// Code to determine length of password through interaction with end user
function getPasswordLength() {
  // while loop continues until password requirements are validated
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

// Use of "confirm" dialog to assign boolean values to "include" key on composition array (of objects); determines password composition
function getPasswordComposition() {
  composition[0].include  = confirm("If possible, would you like to include lower-case characters in your password?");
  composition[1].include  = confirm("If possible, would you like to include upper-case characters in your password?");
  composition[2].include  = confirm("If possible, would you like to include special characters in your password");
  composition[3].include  = confirm("If possible, would you like to include numbers in your password");
}

// Filters the array of objects who's key value "include" is equal to true; restructures/reconfigures the composition array based on user input
function setPasswordComposition() {
  composition = composition.filter(function(obj) {
    return obj.include === true; 
  })
}

// Password generator loop to construct password
function generatePassword() {
 password = "";
 for (let i = 0; i < passwordLength; i++) {
  //  select random index value based on the length of the filtered composition array
   let random_index = Math.floor(Math.random() * composition.length);
  //  select name of array based on the object's "name" key
   let random_array = composition[random_index].name;
   password += random_array[Math.floor(Math.random() * random_array.length)]
 }
  return password 
}

// Write password to the #password input
function writePassword() {
  // reset composition array to default upon button click
  composition = [
    {name:  alphaLower,  include: false},
    {name:  alphaUpper,  include: false},
    {name:  specialChar, include: false},
    {name:  number,      include: false}
  ]
  getPasswordLength();
  getPasswordComposition();
  setPasswordComposition();
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  alert("hover over text area to copy password to clipboard")
  // clear passwordLength value in order to select new length on re-click
  passwordLength="";
}

// Screencastify for DEMO