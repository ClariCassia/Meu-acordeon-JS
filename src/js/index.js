let perguntas = document.querySelectorAll(".item");

perguntas.forEach((item, index) => {
    item.addEventListener("click", () => {
        let respostas = document.querySelectorAll(".resposta");
        let setas = document.querySelectorAll(".seta");

        let campoAtivo = respostas[index].classList.contains("resposta-ativa")
        console.log("🚀 ~ file: index.js:9 ~ item.addEventListener ~ campoAtivo:", campoAtivo)

        respostas.forEach((cadaResposta) => {
            cadaResposta.classList.remove("resposta-ativa");
            setas.forEach((setaAtiva) => {
                setaAtiva.classList.remove("seta-ativa");
            })
        })

        campoAtivo ? (respostas[index].classList.remove('resposta-ativa'), setas[index].classList.remove('seta-ativa'))
        : (respostas[index].classList.add('resposta-ativa'), setas[index].classList.add('seta-ativa'));

    })
})