let teclado = require(`promt-sync`)();
console.log(`--------------------------`)
console.log(`-     calculo media    -  `)
console.log(`--------------------------`);
let nome: string = teclado(`Digite o nome do aluno: `);
let n1: number = parseInt(teclado(`digite seu nome n1: `));
let n2: number = parseInt(teclado(`digite a nota N2:`));

let media: Number = (n1 + n2) /2;

console.log(`o nome do aluno e ${nome}e a media e ${media}`);
