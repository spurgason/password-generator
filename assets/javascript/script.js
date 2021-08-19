// gets random lowercase letter
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// gets random uppercase letter
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


function getRandomSymbol() {
  const symbols = '!@#$%^&*()[]{}=<>/,.';
  return symbols[0]
}

console.log(getRandomSymbol())