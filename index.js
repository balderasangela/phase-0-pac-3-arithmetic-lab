let number = 0


function add(a, b) {
    number = a + b;
    return number
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    number = a * b;
  return number;
}
function divide(a, b){ //divide a and b and return the result.
  number = a / b;
  return number;
}


function increment(a, b){ //Increment a by 1 and return the result.
  return (number = ++a);
}
function decrement(a, b){ //Decrement a by 1 and return the result.
  return (number = --a);
}
function makeInt(a){ //Parse a as an integer and return that integer.
  number = parseInt(a, 10);
  return number;
}
function preserveDecimal(a){ //Parse a as a float (number with decimals) and return that number.
  number = parseFloat(a, 10);
  return number;
}

