// The Password Generator will provide a password between 8 and 128 characters, based on user specifications

// Assignment Code and Event Listener 
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Variable Declaration
let password       = "";
let passwordLength = "";

// Arrays
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

// Assign boolean values to keys on composition array (of objects)
function getPasswordComposition() {
  composition[0].include  = confirm("If possible, would you like to include lower-case characters in your password?");
  composition[1].include  = confirm("If possible, would you like to include upper-case characters in your password?");
  composition[2].include  = confirm("If possible, would you like to include special characters in your password");
  composition[3].include  = confirm("If possible, would you like to include numbers in your password");
}

// Filters the array of objects who's value "include" is equal to true
function setPasswordComposition() {
  composition = composition.filter(function(el) {
    return el.include === true; 
  })
}

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
}


// copy and paste button
// refreshing page as part of writePassword Function
// what happens when confirm prompts are all ignored... must select one criteria 
// add comments 
// screencastify 