var add = function(number1, number2){
return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

var subtract = function(number1, number2){
return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = subtract(number1, number2);
alert(result);

var multiply = function(number1, number2){
return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiply(number1, number2);
alert(result);

var divide = function(number1, number2){
return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = divide(number1, number2);
alert(result);

var bodyMass= function(number1, number2){
return (number1 * 703) / (number2 * number2);
};

var number1 = parseInt(prompt("Enter your weight in pounds:"));
var number2 = parseInt(prompt("Enter your height in inches:"));
var result = bodyMass(number1, number2);
alert(result);

var temp= function(number1){
return (number1 * 9/5 + 32)
};

var number1 = parseInt(prompt("Enter degrees in Celsius:"));
var result = temp(number1);
alert(result);

var gL= function(number1){
return (number1 * 3.78541)
};

var number1 = parseInt(prompt("Enter measurement in gallons"));
var result = gL(number1);
alert(result);
