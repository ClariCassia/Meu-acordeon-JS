let pergunta = document.getElementsByClassName('pergunta');

 
for (let i = 0; i < pergunta.length; i++) {
    pergunta[i].addEventListener('click', () => {

        let respostas = document.getElementsByClassName('resposta')
        let setas = document.getElementsByClassName('seta')

        for (let j = 0; j < respostas.length; j++) {
            respostas[j].classList.remove('resposta-ativa')
            setas[j].classList.remove('seta-ativa')
        }

        respostas[i].classList.add('resposta-ativa')
        setas[i].classList.add('seta-ativa')
    })
}

