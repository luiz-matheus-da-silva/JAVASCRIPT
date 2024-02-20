class BattleSpaceship extends Spaceship{
    constructor(name, weaponsQuantity, crewQuantity) {
        super(name, crewQuantity)
        this.weaponsQuantity = weaponsQuantity
        //verifica o tipo de acordo com a escolha do usuario
        if(Spaceship.type = "1") {
          Spaceship.type = "Batalha"
        }
        this.crewMaxQuantity = crewQuantity
      }
  }