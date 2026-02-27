function criarBotaoVoltar(){

    // Elemento botão
    const btnVoltar = document.createElement('button');

    btnVoltar.innerText = 'Voltar';
    btnVoltar.style.marginTop = '20px';


    // Logica do cliik

    btnVoltar.addEventListener('click', function(){
        window.location.href = '../index.html'
    });

    document.body.appendChild(btnVoltar);

};

window.onload = criarBotaoVoltar();