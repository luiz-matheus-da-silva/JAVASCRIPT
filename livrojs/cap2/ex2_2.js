function converterDuracao() {
    // cria referência aos elementos da página
    var inTitulo = document.getElementById("inTitulo");
    var inDuracao = document.getElementById("inDuracao");
    var outTitulo = document.getElementById("outTitulo");
    var outDuracao = document.getElementById("outDuracao");

    // obtém conteúdos dos campos de entrada
    var titulo = inTitulo.value;
    var duracao = inDuracao.value;

    // arredonda para baixo o resultado da divisão
    var horas = Math.floor(duracao / 60);
    // obtém o resto da divisão entre os números
    var minutos = duracao % 60;

    // altera o conteúdo dos parágrafos de resposta
    outTitulo.textContent = titulo;
    outDuracao.textContent = horas + " hora(s) e " + minutos + " minuto(s)";
}

// cria uma referência ao elemento btConverter (botão)
var btConverter = document.getElementById("btConverter");
// registra um evento associado ao botão, para carregar uma função
btConverter.addEventListener("click", converterDuracao);