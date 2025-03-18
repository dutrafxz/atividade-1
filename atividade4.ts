let teclado = require(`prompt-sync`)();
console.log(`--------------------------`)
console.log(`-     calculo media    -  `)
console.log(`--------------------------`);
let tempf: number = parseInt(teclado(`digite a temperatura em Fahrenheit: `));
let tempc: number = 0;

tempc = (5/9) * (tempf - 32);

console.log(`a temperatura em Celsius:${tempc}`)