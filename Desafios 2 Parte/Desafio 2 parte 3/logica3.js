//1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function indice( peso, altura){
   return peso/(altura * altura);
}

let peso = parseFloat(prompt('Vamos calcular seu IMC\n\nInforme seu peso em "kg":'));
let altura = parseFloat(prompt('Informe sua altura em "metros":'));

let imc = indice(peso, altura);

alert(`De acordo com seu peso ${peso.toFixed(2)}kg e sua altura ${altura.toFixed(2)}m, seu IMC é: ${imc.toFixed(2)}.`);



