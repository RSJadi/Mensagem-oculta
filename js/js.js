//cifra de César: (código da letra + deslocamento) % tamanhp do alfabeto 26
//usando o ASC seria; ((código da letra asc - código da primeira letra + deslocamento) % tamanho do alfabeto + código da primeira letra)

//O btoa() codifica uma string em base-64.
// O atob() decodifica uma string codificada em base 64.

let entrada = document.getElementById('inputText'); // para armazenar a mensagem inserida pelo usuário na variável chamada "entrada".
let saida = document.getElementById('output-text'); // variável para a mensagem de saída.
let deslocamento = document.getElementById('deslocamento'); // incremento, a chave de codificação escolhida.
let num = document.querySelector('.desloc') // numero de césar(div)
let opcoes = document.querySelector('#options'); // cifra de césar ou base64.
let opcao = document.getElementsByTagName('option'); // qual cifra foi usada.
let codDecod = document.getElementById('radios'); // radios codificar e decodificar
let radioCod = document.getElementById('cod'); // botão radio codificar
let radioDecod = document.getElementById('decod'); // botão radio decodificar
let codificaDecodifica = document.querySelectorAll("#btn"); //div botão enviar.
let letras = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
let enviar = document.getElementById('codificar'); //botão enviar, submit

opcoes.addEventListener('change', function (){ //Evento para o caso da opção base64 ser selecionada, o incremento sair da tela

    if (opcoes.value == 'cesar') {
        deslocamento.style.display = 'inline'; //botão de incremento ficar centralizado caso a opção cifra de César seja a escolhida.
    }else if(opcoes.value == 'base64'){
        deslocamento.style.display = 'none'; //Botão de deslocamento, incremento oculto da tela.
    } else{
        alert("Escolha uma opção")
    }

}) 

radioCod.addEventListener('click', function(){ // Codificar
    enviar.innerText = 'Codificar mensagem!';
})

radioDecod.addEventListener('click', function(){ // Decodificar
    enviar.innerText = 'Decodificar mensagem!';
})

// função para codificar em base64
function base(){
    let text = document.getElementById('inputText').value; //pegar o valor da entrada
    let encoded = btoa(text); //codificar
   
    return encoded
    
}

// função para decodificar em base 64
function decodbase(){
    let text = document.getElementById('inputText').value;
    let cod = atob(text);

    return cod

}

// função para codificar em cifra de César
function cesar(){
    let entrada = inputText.value;
    let minuscula = entrada.toLowerCase();
    let cod = (Number(deslocamento.value) % 26);
    let mensagem = '';
    for(let i = 0; i < minuscula.length; i++){
        for(let j = 0; j < letras.length; j++){
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
    return mensagem
}

//função para decodificar em cifra de césar
function decodcesar() {
    let entrada = document.getElementById('inputText').value;
    let minuscula = entrada.toLowerCase();
    let cod = (Number(deslocamento.value) % 26);
    let mensagem = '';
    for(i = 0; i < minuscula.length; i++){
        for(let j = letras.length; j >= 0; j--){
            if(minuscula [i] == letras[j]){
                mensagem += letras [j - cod]
                break;
            } else if (minuscula[i] == '') {
                mensagem += '';
                break;
            }
        }
    }
    document.getElementById('output-text').innerHTML = mensagem
    return mensagem
}

enviar.addEventListener('click', function(event){
    event.preventDefault();
    if(radioCod.checked && opcoes.value === "base64"){
       saida.innerText = base();

    } else if(radioDecod.checked && opcoes.value === "base64"){
        saida.innerText = decodbase();

    } else if(radioCod.checked && opcoes.value === "cesar"){
        saida.innerText = cesar();

    } else if(radioDecod.checked && opcoes.value === "cesar"){
        saida.innerText = decodcesar();

    } else{
        saida.innerText = "Nunca desista dos seus sonhos!"
    }
});

