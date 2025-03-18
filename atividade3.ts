let teclado = require(`prompt-sync`)();
console.log(`--------------------------`)
console.log(`-     calculo media    -  `)
console.log(`--------------------------`);
let tempc: number = parseInt(teclado(`digite a temperatura em Celsius: `));
let tempf: number ;
tempf=(tempc*(9/5)) + 32;

console.log(`a temperatura em FAHRENHEIT:${tempf}`)
