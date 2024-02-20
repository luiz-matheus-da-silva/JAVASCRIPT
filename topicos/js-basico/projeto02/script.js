//informações da pessoa mais velha
let olderPersonName = prompt("Insira o nome da pessoa mais velha: ");
let olderPersonAge = prompt("Insira a idade da pessoa mais velha: ");
//informações da pessoa mais nova
let youngerPersonName = prompt("Insira o nome da pessoa mais nova: ");
let youngerPersonAge = prompt("Insira a idade da pessoa mais nova: ");
//calcular a diferença de idade
let difAge = olderPersonAge - youngerPersonAge;
//exibe as informações
alert(
    olderPersonName + " possui " + olderPersonAge + " anos. É a pessoa mais velha. \n"
    + youngerPersonName + " possui " + youngerPersonAge +
    " anos. É a pessoa mais nova. \n A diferença de idade é de " + difAge + " anos."
    );

