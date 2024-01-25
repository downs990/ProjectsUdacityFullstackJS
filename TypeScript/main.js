var a = 4;
var b = 6;
var c = '5';
var d = 'cat';
var multiply = function (num1, num2) {
    console.log('${num1} * ${num2} =', num1 * num2);
};
var add = function (num1, num2) {
    console.log('${num1} + ${num2} =', num1 + num2);
};
multiply(a, b);
multiply(a, c);
add(a, b);
add(a, c);
add(a, d);
