
//classe nave
class Spaceship {
  static get DECELERATION_RATE() {
    return 17
  }

  constructor(name, crewQuantity) {
    this.name = name
    this.crewQuantity = crewQuantity
    this.currentVelocity = 0
  }

  speedUp(acceleration) {
    this.currentVelocity += (acceleration *(1 - DECELERATION_RATE))
  }
}

//classe batalha
class BattleSpaceship extends Spaceship{
  constructor(name, currentVelocity, type, quantityWeaponsAvailable) {
    super(name, currentVelocity)
    //verifica o tipo de acordo com a escolha do usuario
    if(Spaceship.type = "1") {
      Spaceship.type = "Batalha"
    }
      this.quantityWeaponsAvailable = quantityWeaponsAvailable
  }
}

class TransportSpaceship extends Spaceship{
  constructor(name, currentVelocity, type, crewQuantity) {
    super(name, currentVelocity)
    //verifica o tipo de acordo com a escolha do usuario
    if(Spaceship.type = "2") {
      Spaceship.type = "Transporte"
    }
    this.crewMaxQuantity = crewQuantity
  }
}

//função para atribuir os dados a nave
function descripeSpaceship() {
  Spaceship.name = prompt("Insira o nome da nave:")
  Spaceship.type = prompt("Qual o tipo da nave?\n1-Batalha\n2-Transporte")
  if(Spaceship.type = "1") {
    BattleSpaceship.quantityWeaponsAvailable = prompt("Insira a quantidade de armas disponíveis:")
  } else {
    TransportSpaceship.crewMaxQuantity = prompt("Insira a quantidade de tripulantes:")
  }
}

//função para exibir o menu
function showMenu() {
  let chosenOption = prompt("O que deseja fazer?\n1-Acelerar a nave\n2-Trocar a nave\n3-Imprimir e sair")
  do {
    switch(chosenOption) {
      case "1": {
        let acceleration = prompt("Informe a velocidade que deseja acelerar:")
        Spaceship.speedUp(acceleration)
      }
      case "2": {
        descripeSpaceship()
      }
      case "3": {
        alert(`Nave: ${Spaceship.name}\nTipo:${Spaceship.type}\nVelocidade Atual:${Spaceship.currentVelocity}`)
      }
    }
  } while(chosenOption != "4")
}

descripeSpaceship()
showMenu()