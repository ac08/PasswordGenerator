// Ready Arrays

let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let password = "";

let options = [lowerCasedCharacters, upperCasedCharacters, specialCharacters, numbers];


// Assignment Code
function getPasswordOptions() {
  let passwordLength = parseInt(
    prompt('How many characters do you want in your password?')
  )
  window.passwordLength = passwordLength;
}
getPasswordOptions();

function generatePassword() {
  for (let i = 0; i < window.passwordLength; i++) {
    let random_array_index = Math.floor(Math.random() * options.length);
    let random_array = options[random_array_index];
    let random_index = Math.floor(Math.random() * random_array.length);
    password += random_array[random_index];
  }
  return password
}

let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
