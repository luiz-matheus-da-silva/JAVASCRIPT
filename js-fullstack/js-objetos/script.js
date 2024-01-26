let spaceship = {
    currentVelocity: 0,
    speedUp: function (acceleration) {
        this.currentVelocity += acceleration
    }
}

//o usuario define as caracteristicas da nave
function registerSpaceship() {
    spaceship.spaceshipName = prompt("Informe o nome da nave:")
    spaceship.spaceshipType = prompt("Informe o tipo da nave:")
    spaceship.maxVelocity = prompt("Informe a velocidade máxima da nave (km/s):")
}

//acelera a nave
function acelerate() {
    let acceleration = Number(prompt("Quantos km/s você deseja acelerar?"))
    spaceship.speedUp(acceleration)
    if (spaceship.currentVelocity > spaceship.maxVelocity) {
        alert(`VELOCIDADE MÁXIMA ULTRAPASSADA!
    \nVelocidade da Nave: ${spaceship.currentVelocity} km/s
    \nVelocidade máxima da Nave: ${spaceship.maxVelocity} km/s`)
    }
}

//para a nave
function stop() {
    alert(`
    Nave: ${spaceship.spaceshipName}
    \nVelocidade da Nave: ${spaceship.currentVelocity} km/s
    \nVelocidade máxima da Nave: ${spaceship.maxVelocity} km/s`)
    spaceship.currentVelocity = 0
}

//loop de exibicao
function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("O que você deseja fazer?\n1- Acelerar\n2-Parar")
        switch (chosenOption) {
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção inválida")
        }
    } while (chosenOption != "2");
}

registerSpaceship()
showMenu()