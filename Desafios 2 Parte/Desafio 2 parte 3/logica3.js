/*1. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function indice( peso, altura){
   return peso/(altura * altura);
}

let peso = parseFloat(prompt('Vamos calcular seu IMC\n\nInforme seu peso em "kg":'));
let altura = parseFloat(prompt('Informe sua altura em "metros":'));

let imc = indice(peso, altura);

alert(`De acordo com seu peso ${peso.toFixed(2)}kg e sua altura ${altura.toFixed(2)}m, seu IMC é: ${imc.toFixed(2)}.`);
*/

/*2. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(numero){
  let numeroInicialMulti = 1;
  let numeroFatorial = 1;

  for(numeroInicialMulti = numero; numeroInicialMulti >= 1; numeroInicialMulti--){
      numeroFatorial *= numeroInicialMulti;
     
  }
  return numeroFatorial;
}
numero = parseInt(prompt('Digite um número e vamos Fatorar ele: '));
resultado = fatorial(numero);
alert(`Resultado da fatoração do número ${numero} é: ${resultado}.`)
*/

/*3. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

let valorEmDolar = 4.80;

function conversao(valorEmReais){
   let valorConvertido = valorEmDolar * valorEmReais;
   return valorConvertido.toFixed(2);
}
valorEmReais = parseFloat(prompt('Digite o valor em Reais e vamos converter para Dollar'));
resultado = conversao(valorEmReais);
alert(`A conversão de R$ ${valorEmReais}, tendo em vita o dolar hoje está custando $ ${valorEmDolar}, é de: $ ${resultado}.`);
*/

/*4. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function sala(altura, largura){
   perimetro = (altura * 2) + (largura * 2);
   return perimetro;
}
altura = parseFloat(prompt('Vamos calcular o perímetro da sala\n\nInforme a altura em metros:'));
largura = parseFloat(prompt('Informe a largura em metros:'));
resultado = sala(altura, largura);
alert(`O perimetro da sala é: ${resultado} metros.`);
*/

/*5. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function perimetro(raio){
   comprimento = 2 * 3.14 * raio;
   return comprimento;
   }
   raio = parseFloat(prompt('Informe o raio da circuferencia em metros:'));
   resultado = perimetro(raio);
   alert(`O perimetro do circulo é: ${resultado} metros.`);
   */

/*6. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(valor){
     for(let i = 0; i <= 10; i++){
      let multi = i * valor;
      console.log(`${valor} x ${i} = ${multi}`);
   }
}
valor = parseInt(prompt('Informe um valor para fazer a tabuada'));
tabuada(valor);
*/

