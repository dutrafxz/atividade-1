let tot_pess: number = 0;
let num_pess: number = 0;
let teclado = require (`prompt-sync`) ();
let salario :number = parseInt(teclado(`digite a salario `))
let idade : number = 0;

do{
    idade =  parseFloat(teclado(`digite a idade do funcionario`))
salario = parseFloat(teclado(`digite o salario do funcionario`))
if(idade<30 && salario>3000){
    tot_pess++;
    num_pess++;

}
else{
    num_pess++;

}



}while(num_pess <=50)
console.log(`O total de pessoas e ${tot_pess}`);