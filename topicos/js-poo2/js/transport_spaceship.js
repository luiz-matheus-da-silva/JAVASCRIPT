class TransportSpaceship extends Spaceship{
    constructor(name, sitsQuantity, crewQuantity) {
      super(name, crewQuantity)
      this.sitsQuantity = sitsQuantity
      //verifica o tipo de acordo com a escolha do usuario
      if(Spaceship.type = "2") {
        Spaceship.type = "Transporte"
      }
      this.crewMaxQuantity = crewQuantity
    }
  }