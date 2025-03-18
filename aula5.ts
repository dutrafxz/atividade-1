let teclado = require ('promt-sync')();

let situacao: boolean = false;
let situacao2: boolean = true;

if(situacao || true){
    console.log('rodando dentro da if 1');
}
else{
    console.log('rodando dentro da else');
}