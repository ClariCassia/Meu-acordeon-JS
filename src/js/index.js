let perguntas = document.querySelectorAll(".item");

perguntas.forEach((item, index) => {
    item.addEventListener("click", () => {
        let respostas = document.querySelectorAll(".resposta");
        let setas = document.querySelectorAll(".seta");

        if (!respostas[index].classList.contains("resposta-ativa")) {
            respostas.forEach((cadaResposta) => {
                cadaResposta.classList.remove("resposta-ativa");
                setas.forEach((setaAtiva) => {
                    setaAtiva.classList.remove("seta-ativa");
                })
            })
            respostas[index].classList.add("resposta-ativa");
            setas[index].classList.add("seta-ativa");

        } else {
            respostas[index].classList.remove("resposta-ativa");
            setas[index].classList.remove("seta-ativa");
        }
    })
})