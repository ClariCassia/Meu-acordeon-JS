//* Pegar todos as perguntas


  let pergunta = document.getElementsByClassName('pergunta');

 


//* Percorrer todos os acordeons quando clicar neles, colocar o painel a amostra e ao clicar novamente 
//* testar se o painel naquele indice não tiver a classe painel ativo (ou seja com display block), add class
//* se tiver remover class


for (let i = 0; i < pergunta.length; i++) {
    pergunta[i].addEventListener('click', () => {
        let respostas = document.getElementsByClassName('resposta')
        let setas = document.getElementsByClassName('seta')
        if (respostas[i].classList.contains !== ('painel-ativo')) {
            respostas[i].classList.toggle('resposta-ativa')
            setas[i].classList.toggle('seta-ativa')
        }
    })
}

