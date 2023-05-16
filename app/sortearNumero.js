const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio(); 

function gerarNumeroAleatorio() {
    //parseInt arredonda o número p/ inteiro
    //o +1 inclui o maiorValor(nesse caso, 100)
    return parseInt(Math.random() * maiorValor + 1);
}

console.log('O número secreto é', numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor; 