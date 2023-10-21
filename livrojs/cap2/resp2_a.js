function mostrarPromocao() {
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outMedicamento = document.getElementById("outMedicamento");
    var outValor = document.getElementById("outValor");

    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);

    var promocao = Math.floor(preco) * 2;

    outMedicamento.textContent = "Promoção de " + medicamento;
    outValor.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2);
}

var btMostrarPromocao = document.getElementById("btMostrarPromocao");
btMostrarPromocao.addEventListener("click", mostrarPromocao);