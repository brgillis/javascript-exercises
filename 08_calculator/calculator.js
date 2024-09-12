const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(a) {
	return a.reduce((cumSum, next) => cumSum + next, 0);
};

const multiply = function(a) {
	return a.reduce((cumProd, next) => cumProd * next, 1);
};

const power = function(a, b) {
  return Math.pow(a,b);
};

const factorial = function(a) {
	let res = 1;
  for(let x=a; x>0; --x) {
    res *= x;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
