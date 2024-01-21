//1. Dia da semana
let semana = 'Digite o número que representa do dia hoje:\n\n1. Domingo\n2. Segunda-feira\n3. Terça-feira\n4. Quarta-feira\n5. Quinta-feira\n6. Sexta-feira\n7. Sábado';
let dia = prompt(semana);
if(dia == 1 || dia ==7){alert('Bom fim de semana!')}
else if(dia == 2 || dia == 3 || dia == 4 || dia == 5 || dia == 6){alert('Boa semana!')}
else{alert('Informe uma das opções na próxima vez!')}


//2. Número positivos e negativos informar.

let numero = prompt('Informe um número diferente de 0!');
if(numero == 0){
    alert('Número inválido');
} else if (numero < 0){alert('Este número é negativo');}
else{alert('Este número é positivo!');}


//3. Resultado do game maior que 100.

let resultGame = prompt('Informe a pontuação do jogo!');
if(resultGame >= 100){
    alert('Parabéns, você venceu!');
}else{alert('Tente novamente para ganhar.');}


//4. Saldo da conta

let saldo = prompt('Informe o valor do saldo')
alert('Saldo da conta: R$ '+saldo)


//5. Mensagem de boas vindas

let nome = prompt('Insira seu nome')
alert('Bem-vindo '+nome+', ao nosso game!')

