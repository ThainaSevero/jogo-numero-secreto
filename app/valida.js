function verificaSeValido(chute){
    //transformar em inteiro
    const numero = +chute;

    if (numeroInvalido(numero)) {
        //quando n for um numero, será criada uma div 
        elementoChute.innerHTML += '<div> Valor Inválido </div>'
        return;
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div> Valor inválido: O número secreto está entre ${menorValor} e ${maiorValor} </div>`
        return;
    }

    if (numero === numeroSecreto) {
        //trata de todo body do HTML
        document.body.innerHTML = `
            <h3> Você acertou! </h3>
            <h3> O número secreto é ${numeroSecreto} </h3>

            <button class="botao-jogar-novamente "id="jogar-novamente"> Jogar novamente </button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div> O número secreto é menor <i class="fa-solid fa-arrow-down"></i> </div>`
    } else {
        elementoChute.innerHTML += `<div> O número secreto é maior <i class="fa-solid fa-arrow-up"></i> </div>`
    }
}

//retorna se o chute é um numero ou nao  
function numeroInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor;
}

//quando, dentro do body, um botao de ID "jogar-novamente" for clickado, a janela ira reiniciar
document.body.addEventListener('click', (evento) => {
    if (evento.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})