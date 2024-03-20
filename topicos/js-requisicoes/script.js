let komodoShip = {
    name: "Komodo",
    velocity: 80,
    acceleration: 10
}

const velocityAfert2Seconds = (velocity, acceleration) => {
    new Promise(function(resolve, reject) {
        setTimeout(() => {
            if (acceleration > 0) {
                velocity += acceleration * 2
                console.log(`Nova velocidade: ${velocity}`)
                resolve(velocity)
            } else {
                console.log("Aceleração inválida")
                reject("Não possui aceleração")
            }
        }, 2000)
    })
}

velocityAfert2Seconds(komodoShip.velocity, komodoShip.acceleration)

console.log("Execução de Promises")