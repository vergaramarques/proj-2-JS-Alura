let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero de 1 a 10');
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Parabens! Acertou');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagensTentativas =`Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroAleatorio) {
            exibirTextoNaTela('p', 'O numero secreto e menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto e maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if (quantidadeElementosLista ==  numeroLimite) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    console.log(numeroAleatorio);
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
