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
let options = [lowerCasedCharacters, upperCasedCharacters, specialCharacters, numbers];
let password = "";


// Assignment Code
function getPasswordOptions() {
  let passwordCriteria = [
    parseInt(prompt('How many characters do you want in your password?')),
    parseInt(prompt('How many numbers do you want in your password?')),
    parseInt(prompt('How many special characters do you want in your password?'))
  ]
  let passwordLength = (passwordCriteria[0] - passwordCriteria[1] - passwordCriteria[2]);
  window.passwordLength = passwordLength;
  let passwordNumbers = passwordCriteria[1];
  window.passwordNumbers = passwordNumbers;
  let passwordCharacters = passwordCriteria[2];
  window.passwordCharacters = passwordCharacters;
}
getPasswordOptions();

// function generatePassword() {
//   for (let i = 0; i < window.passwordLength; i++) {
//     let random_array_index = Math.floor(Math.random() * options.length);
//     let random_array = options[random_array_index];
//     let random_index = Math.floor(Math.random() * random_array.length);
//     password += random_array[random_index];
//   }
//   return password
// }

// Attempt at a Nested For Loop
// function generatePassword() {
//   for (let i = 0; i < passwordLength; i++) {
//     for (let j = 0; j < passwordNumbers; j++) {
//       let random_index = Math.floor(Math.random() * numbers.length);
//       password += numbers[random_index];
//       console.log(password);
//     }
//     for (let y = 0; y < passwordCharacters; y++) {
//       let random_index = Math.floor(Math.random() * specialCharacters.length);
//       password += specialCharacters[random_index];
//       console.log(password);

//     }
//     let random_index = Math.floor(Math.random() * lowerCasedCharacters.length);
//     password += lowerCasedCharacters[random_index];
//     console.log(password);

//   }
//   return password
// }


function generatePassword() {
  password = "";
  for (let i = 0; i < passwordLength; i++) {
    let random_index = Math.floor(Math.random() * lowerCasedCharacters.length);
    password += lowerCasedCharacters[random_index];
  }
  for (let j = 0; j <  passwordNumbers; j++) {
    let random_index = Math.floor(Math.random() * numbers.length);
    password += numbers[random_index];
  }
  for (let y = 0; y <  passwordCharacters; y++) {
    let random_index = Math.floor(Math.random() * specialCharacters.length);
    password += specialCharacters[random_index];
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
