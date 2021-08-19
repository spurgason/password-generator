var resultEl = document.getElementById('password')
var generateEl = document.getElementById('generate')

generateEl.addEventListener('click', () => {
  var length = +confirmLength;
  var hasLower = confirmLower; 
  var hasUpper = confirmUpper;
  var hasNumber = confirmNumber;
  var hasSymbol = confirmSymbol;


  resultEl.innerHTML = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
});

// generate password function
function generatePassword(lower, upper, number, symbol, length) {
  var generatePassword = '';

  var typesCount = lower + upper + number + symbol;

  // console.log('typesCount', typesCount);

  var typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  // console.log('typesArr:', typesArr);

  if (typesCount === 0) {
    return '';
  }

  for(var i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];

      // console.log('funcName', funcName);

      generatePassword += randomFunc[funcName]();
    });
  }

  return generatePassword;
}
// checking what they want in password
var confirmLength = window.prompt('How many character would you like?')
var confirmLower = window.confirm('Would you like lowercase letters?')
var confirmUpper = window.confirm('Would you like uppercase letters?')
var confirmNumber = window.confirm('Would you like numbers?')
var confirmSymbol = window.confirm('Would you like symbols?')


var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};


// gets random lowercase letter
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// gets random uppercase letter
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// gets random number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// gets random symbol
function getRandomSymbol() {
  var symbols = '!@#$%^&*()[]{}=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}



