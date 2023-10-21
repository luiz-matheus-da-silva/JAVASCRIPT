function mostrarPromocao() {
    // cria referência aos elementos da página
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outPromocao = document.getElementById("outPromocao");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");

    // obtém conteúdos dos campos de entrada
    var veiculo = inVeiculo.value;
    var preco = Number(inPreco.value);

    // calcula a entrada
    var entrada = preco * 0.50;
    var parcela = Math.round((preco * 0.50) / 12);

    // altera o conteúdo dos parágrafos de resposta
    outPromocao.textContent = "Promoção: " + veiculo;
    outEntrada.textContent = "Entrada de R$:" + entrada.toFixed(2);
    outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", mostrarPromocao);