const modificar = document.getElementById('spoiler');
modificar.addEventListener('click', function darSpoiler(){
    const fisrtTxt = document.getElementById('textoInicial');
    fisrtTxt.textContent = "Personagem Jiraya morrer para o Pain kkk";
})



const validar = document.getElementById('validarIdade');
validar.addEventListener('click', function validarIdade(){
    const idade = document.getElementById('idadeUsu');
    const resposta = document.getElementById('respostaIdade');
    if(Number(idade.value) < 18){
        resposta.textContent = "Você não tem idade para o que está fazendo agora";
    }else{
        resposta.textContent = "Compra autorizada"
    }
})