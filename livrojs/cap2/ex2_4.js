function cacularPreco() {
    var inPreco = document.getElementById("inPreco");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor");

    var preco = Number(inPreco.value);
    var consumo = Number(inConsumo.value);

    var quilo = consumo * 0.001;
    var precoFinal = preco * quilo;

    outValor.textContent = "Valor a pagar R$: " + precoFinal.toFixed(2);
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", cacularPreco);