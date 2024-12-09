function add(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid numbers provided');
  }
  return Number(a) + Number(b);
}

function subtract(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid numbers provided');
  }
  return Number(a) - Number(b);
}

function multiply(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid numbers provided');
  }
  return Number(a) * Number(b);
}

function divide(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid numbers provided');
  }
  if (Number(b) === 0) {
    throw new Error('Division by zero');
  }
  return Number(a) / Number(b);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
};