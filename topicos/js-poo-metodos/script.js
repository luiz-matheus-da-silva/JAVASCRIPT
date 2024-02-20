class TransportSpaceship {
    constructor(name) {
      this.name = name
      this.currentVelocity = 0
    }
    
    set velocity(newVelocity) {
      if(newVelocity > 120) {
        this.currentVelocity = 120
      } else {
        this.currentVelocity = newVelocity
      }
    }
  }
  
  let spaceship = new TransportSpaceship("Transportador")
  spaceship.velocity = 130
  
  console.log(spaceship)
  
  //////////////////////////////////
  class ResourceProcessStation {
    constructor(name, monthlyProcessedLoad) {
      this.name = name
      this.monthlyProcessedLoad = monthlyProcessedLoad
    }
    
    get weeklyProcessedLoad() {
      return this.monthlyProcessedLoad / 4
    }
  }
  
  let resourceProcessor = new ResourceProcessStation("Gaia", 400)
  
  console.log(resourceProcessor.weeklyProcessedLoad)
  
  resourceProcessor.monthlyProcessedLoad = 320
  
  console.log(resourceProcessor.weeklyProcessedLoad)
  
  //////////////////////////////////
  class ResourceProcessorStation2 {
    constructor(name, monthlyProcessing) {
      this.name = name
      this.monthlyProcessedLoad = monthlyProcessing
    }
    
    static calculateProcessInHours(monthlyProcessing, hours) {
      return monthlyProcessing / 720 * hours
    }
  }
  
  let processor = new ResourceProcessorStation2("Gaia", 200)
  
  let totalProcessed = ResourceProcessorStation2.calculateProcessInHours(processor.monthlyProcessing, 10)
  
  console.log(totalProcessed)
  
  /////////////////////////
  
  class Spaceship2 {
    static get decelerationRate() {
      return 0.15
    }
    
    constructor(name) {
      this.name = name
      this.currentVelocity = 0
    }
    
    speedUp(acceleration) {
      this.currentVelocity += (acceleration * (1 - Spaceship2.decelerationRate))
      }
    }
  
  let spaceship2 = new Spaceship2("Apolo")
  spaceship2.speedUp(100)
  console.log(spaceship2)
  