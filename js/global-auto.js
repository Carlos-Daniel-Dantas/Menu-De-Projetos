// 1, Lógica automatica para Menu (Index)
// Buscamos todos os inputs do tipo botao dentro da classe .project__button-group

const botoesProjeto = document.querySelectorAll('.project__button-group input[type="button"] ');
console.log(botoesProjeto)

if (botoesProjeto.length > 0) {

    botoesProjeto.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            // O index começa em 0, então somamos 1 para bater com "projeto01", "Projetos02"...
            const numeroProjeto = (index + 1).toString().padStart(2, '0');
            window.location.href = `./pages/projeto${numeroProjeto}.html`;
        });
    });
}

// 2, Lógicas das páginas de projeto (Botão Voltar)

const criarBotaoVoltar = () => {
    
    const btnVoltar = document.createElement('button');
    btnVoltar.innerText = 'Voltar';

    // Herdara o estilo de 'button' do CSS
    btnVoltar.className = 'btn-navegacao';

    btnVoltar.addEventListener('click', () =>{
        window.location.href = '../index.html'
    });

    document.body.appendChild(btnVoltar);
 
}

if (botoesProjeto.length === 0) {
    window.addEventListener('load', () => {
        criarBotaoVoltar();
    })
}

