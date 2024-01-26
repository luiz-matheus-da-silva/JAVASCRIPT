let spaceship = prompt("Insira o nome da espaçonave: ")

let char = prompt("Qual caractere deseja substituir?")

let newChar = prompt("Qual caractere você quer pôr no lugar?")

let newSpaceship = ""

for (let i = 0; i < spaceship.length; i++) {
    if (spaceship[i] == char) {
        newSpaceship += newChar
    } else {
        newSpaceship += spaceship[i]
    }
}

alert(`O novo nome da nave é ${newSpaceship}`)