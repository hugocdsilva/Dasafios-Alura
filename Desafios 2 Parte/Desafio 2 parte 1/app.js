let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole() {
    console.log('O botão do console foi clicado!');
}

function verificarAlert() {
    alert('Eu amo JS');
}


function verificarPrompt() {
    let cidade = prompt('Informe o nome de uma cidade que você visitou no Brasil');
    alert(`Estive em ${cidade} e lembrei de você!`);
}


function verificarSoma(){
    let numero1 = parseInt(prompt('Vamos somar 2 números\n\nInforme o primeiro número:'));
    let numero2 = parseInt(prompt('Informe o segundo número:'));
    let soma = numero1 + numero2;
    alert(`A soma dos número é ${soma}`);
}