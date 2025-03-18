var teclado = require("prompt-sync")();
console.log("--------------------------");
console.log("-     calculo media    -  ");
console.log("--------------------------");
var tempf = parseInt(teclado("digite a temperatura em Fahrenheit: "));
var tempc = 0;
tempc = (5 / 9) * (tempf - 32);
console.log("a temperatura em Celsius:".concat(tempc));
