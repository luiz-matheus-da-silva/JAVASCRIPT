let spaceship = prompt("Qual o nome da nave?")
let chosenOption = prompt("Deseja entrar em dobra espacial? \n1-Sim\n2-Não")
let warpCount = 0
while (chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Deseja realizar a próxima dobra?\n1-Sim\n2-Não")
    
}

alert(`A nave ${spaceship} dobrou ${warpCount} vezes.`)


