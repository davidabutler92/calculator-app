//Business logic below
const add = function(number1, number2) {
  return number1 + number2;
}

const subtract = function(number1, number2) {
  return number1 - number2;
}

const multiply = function(number1, number2) {
  return number1 * number2;
};

const divide = function(number1, number2) {
  return number1 / number2;
};
//UI logic below
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const results = add(number1, number2);
    $("#output1").text(results);
  });
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#sub1").val());
    const number2 = parseInt($("#sub2").val());
    const results = subtract(number1, number2);
    $("#output2").text(results);
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#mult1").val());
    const number2 = parseInt($("#mult2").val());
    const results = multiply(number1, number2);
    $("#output3").text(results);
  });
  $("form#divide").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#div1").val());
    const number2 = parseInt($("#div2").val());
    const results = divide(number1, number2);
    $("#output4").text(results);
  });

});