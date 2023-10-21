// declara a função mostrarOla
function mostrarOla() {
    // obtém o conteúdo do campo (com id=) nome
    var inNome = document.getElementById("nome");
    var nome = inNome.value
    // exibe no parágrafo (resposta): "Olá " e o nome informado
    var outResposta = document.getElementById("resposta");
    outResposta.textContent = "Olá " + nome;
}
// cria uma referência ao botão (com id=) mostrar
var btMostrar = document.getElementById("mostrar");
// registra para o botão "mostrar" um ouvinte para o evento click,
// que ao ser clicado irá chamar a função mostrarOla
btMostrar.addEventListener("click", mostrarOla);