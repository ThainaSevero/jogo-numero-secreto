const elementoChute = document.getElementById('chute');
//assim que abrirmos a aplicação, o reconhecimento já estará ativo
//tirando a variável da frente, isso rodará o tempo todo
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const reconhecer = new SpeechRecognition();
//.lang - muda a língua
reconhecer.lang = 'pt-Br'
//começar o reconhecimento
reconhecer.start()

reconhecer.addEventListener('result', onSpeak)

function onSpeak(evento){
    //acessando o que foi dito
    chute = evento.results[0][0].transcript
    exibeChute(chute);
    verificaSeValido(chute);
}

function exibeChute(chute) {
    elementoChute.innerHTML = ` 
        <div>Você disse:</div>
        <span class="box"> ${chute} </span>`
}

//quando acabar, fazer algo
reconhecer.addEventListener('end', () => reconhecer.start())
