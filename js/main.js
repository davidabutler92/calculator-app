const add = function(number1, number2) {
  return number1 + number2;
}

const subtract = function(number1, number2) {
  return number1 - number2;
}

const multiply = function(number1, number2) {
  return number1 * number2;
}

const division = function(number1, number2) {
    return number1 / number2
}

$(document).ready(function() {
  $("form#add").submit(funtion(event) {
    event.preventDefault();
    const number1 = parseInt($("input#add1").val());
    const number2 = parseInt
  });
});



