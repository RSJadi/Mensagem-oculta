//cifra de César: (código da letra + deslocamento) % tamanhp do alfabeto 26
//usando o ASC seria; ((código da letra asc - código da primeira letra + deslocamento) % tamanho do alfabeto + código da primeira letra)

//O btoa() codifica uma string em base-64.
// O atob() decodifica uma string codificada em base 64.

var entrada = document.getElementById('input-text'); // para armazenar a mensagem inserida pelo usuário na variável chamada "entrada".
var saida = document.getElementById('output-text'); // variável para a mensagem de saída.
var deslocamento = document.getElementById('deslocamento'); // incremento, a chave de codificação escolhida.
var opcoes = document.getElementById("options"); // cifra de césar ou base64.
var opcao = document.querySelectorAll('option'); // qual cifra foi usada.
var codDecod = document.getElementById('radios'); // radios codificar e decodificar
var radioCod = document.getElementById('cod'); // botão radio codificar
var radioDecod = document.getElementById('decod'); // botão radio decodificar
var codificaDecodifica = document.querySelectorAll("#btn"); //div botão enviar.
var letras = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var enviar = document.getElementById('codificar'); //botão enviar, submit

opcoes.addEventListener('change', function (){ //Evento para o caso da opção base64 ser selecionada, o incremento sair da tela
    if (opcao == 'cesar') {
        deslocamento.style.display = 'block';
        deslocamento.style.display = 'center'; //botão de incremento ficar centralizado caso a opção cifra de César seja a escolhida.
    }else {
        deslocamento.style.display = 'none'; //Botão de deslocamento, incremento oculto da tela.
    }

}) 

radioCod.addEventListener('click', function(){ // Codificar
    enviar.value = 'Codificar!';
})

radioDecod.addEventListener('click', function(){ // Decodificar
    enviar.value = 'Decodificar!';
})

// função para codificar em base64
function base(){
    var text = document.getElementById('input-text').value; //pegar o valor da entrada
    var encoded = atob(text); //codificar
    var saida = document.getElementById('output-text')

    saida.innerText = encoded

}

// função para decodificar em base 64
function decodbase(){
    var text = document.getElementById('input-text').value;
    var cod = btoa(text);
    document.getElementById('output-text').innerHTML = cod; // exibir o reultado da função na área desejada (output)
}

// função para codificar em cifra de César
function cesar(){
    var entradaConteudo = document.getElementById('input-text').value;
    var minuscula = entradaConteudo.toLowerCase();
    var cod = (Number(deslocamento.value) % 26);
    var mensagem = '';
    for(i = 0; minuscula.length; i++){
        for(var j = 0; j < letras.length; j++){
            if(minuscula [i] == letras[j]){
                mensagem += letras [j + cod]
                break;
            } else if(minuscula[i] == ' ') {
                mensagem += '';
                break;
            }
        }
    }
    document.getElementById('output-text').innerHTML = mensagem
}

//função para decodificar em cifra de césar
function decodcesar() {
    var entradaConteudo = document.getElementById('input-text').value;
    var minuscula = entradaConteudo.toLowerCase().value;
    var cod = (Number(deslocamento.value) % 26);
    var mensagem = ' ';
    for(i = 0; minuscula.l; i--){
        for(var j = 0; j < letras.length; j--){
            if(minuscula [i] == letras[j]){
                mensagem += letras [j + cod]
                break;
            } else if (minuscula[i] == '') {
                mensagem += '';
                break;
            }
        }
    }
    document.getElementById('output-text').innerHTML = mensagem
}

/* enviar.addEventListener('click', function(e){
    e.preventDefault();
    if(radioCod.checked && opcoes.value === 'base64'){
        saida.innerText = base ();
    } else if(radioCod.checked && opcoes.value === 'base64'){
        saida.innerText = decodbase();
    } else if (radioCod.checked && opcoes.value === 'cesar'){
        saida.innerText = cesar();
    } else if (radioDecod.checked && opcoes.value === 'cesar'){
        saida.innerText = decodcesar();
    } else {
        saida.innerText = 'Tente novamente.'
    }
} ) */

function escolherFuncao (e){
    e.preventDefault();
    if(radioCod.checked && opcoes.value === 'base64'){
        saida.innerText = base ();
    } else if(radioCod.checked && opcoes.value === 'base64'){
        saida.innerText = decodbase();
    } else if (radioCod.checked && opcoes.value === 'cesar'){
        saida.innerText = cesar();
    } else if (radioDecod.checked && opcoes.value === 'cesar'){
        saida.innerText = decodcesar();
    } else {
        saida.innerText = 'Tente novamente.'
    }
}