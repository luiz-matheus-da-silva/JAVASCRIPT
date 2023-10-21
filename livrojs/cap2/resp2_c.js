function calcularPromocao() {
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outProduto = document.getElementById("outProduto");
    var outTerceiro = document.getElementById("outTerceiro");

    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    var desconto = preco * 0.5;
    var promocao = desconto + preco * 2;

    outProduto.textContent = produto + " - Promoção: Leve 3 por R$: " + promocao.toFixed(2);
    outTerceiro.textContent = " O 3º produto custa apenas R$: " + desconto.toFixed(2);
}

var btVerPromocao = document.getElementById("btVerPromocao");
btVerPromocao.addEventListener("click", calcularPromocao);