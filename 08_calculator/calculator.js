const add = function(num1,num2) {
	return Number(num1) + Number(num2); //add 2 numbers
};

const subtract = function(num1, num2) {
	return Number(num1) - Number(num2); //substract 2 numbers
};

const sum = function(array) {
  let sum = 0; //initiate sum to 0
  for (let i = 0; i < array.length; i++) { //loop over array
    sum = sum + array[i]; //add array items to sum
  }
  return sum;
};

const multiply = function(array) {
  let sum = array[0] //initiate sum to first item of array to avoid 0
  for (let i = 1; i < array.length; i++) { //loop through array
    sum = sum * array[i]; //multiply each item
  }
  return sum;
};

const power = function(num1, num2) {
	let sum=num1; //initiate sum to first variable for case of 0 or 1 on num2
  for (let j = 1; j < num2; j++) { //loop based on num2
    sum = sum * num1; //multiply num1
  }
  return sum;
};

const factorial = function(num) {
  if (num==0) {return 1}; //case of 0 return 1
  let sum=num; //initiate sum to one of the items
  for (let i=num-1; i>0; i--) { //loop down from initial item till 1
    sum = sum * i; //multiply each item
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
