let spaceshipName = prompt("Insira o nome da nave:")

let spaceshipInvertedName = ""

for (let i = spaceshipName.length - 1; i >= 0; i--) {
    if (spaceshipName[i] == "e" || spaceshipName[i] == "E") {
        alert("Caractere proibido 'e' encontrado. Parando inversão.")
        break
    } else {
        spaceshipInvertedName += spaceshipName[i]
    }
}

alert(`Nome original da nave: ${spaceshipName}\nNome após ocultação: ${spaceshipInvertedName}`)