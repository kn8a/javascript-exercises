const add = function(num1,num2) {
	return Number(num1) + Number(num2);
};

const subtract = function(num1, num2) {
	return Number(num1) - Number(num2);
};

const sum = function(array) {
  let sum = 0;
  //return array;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

const multiply = function(array) {
  let sum = array[0]
  for (let i = 1; i < array.length; i++) {
    sum = sum * array[i];
  }
  return sum;
};

const power = function(num1, num2) {
	let sum=num1;
  for (let j = 1; j < num2; j++) {
    sum = sum * num1;
  }
  return sum;
};

const factorial = function(num) {
  if (num==0) {return 1};
  let sum=num;
  for (let i=num-1; i>0; i--) {
    sum = sum * i;
  }
  return sum;
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
