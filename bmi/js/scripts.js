var weight=parseInt(prompt("weight: "));
var height=parseInt(prompt("height:"));

var bmi = function (weight, height) {
  return (weight / (height * height))*10000;
};

var result = bmi(weight, height);
alert("Your BMI is " + result.toFixed(2));