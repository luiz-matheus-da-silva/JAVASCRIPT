
//informações da pessoa mais velha
let olderPersonName = prompt("Digite o nome da pessoa mais velha")
let olderPersonAge = prompt("Digite a idade da pessoa mais velha")
//informações da pessoa mais nova   
let youngerPersonName = prompt("Digite o nome da pessoa mais nova")
let youngerPersonAge = prompt("Digite a idade da pessoa mais nova")
//calcular a diferença de idade    
let ageDifference = olderPersonAge - youngerPersonAge
//exibe as informações    
alert(
    "Pessoa mais velha: " + olderPersonName + "\nIdade: " + olderPersonAge +
    "\n\nPessoa mais nova: " + youngerPersonName + "\nIdade: " + youngerPersonAge +
    "\n\nDiferença de idade: " + ageDifference
)
