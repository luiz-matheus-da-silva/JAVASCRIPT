

let slowDown = (velocity, printer) =>
{
    let deceleration = 20

    while (velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }

    alert("Nave parada. As comportas podem ser abertas.")
}

let spacechipVelocity = 150

slowDown(spacechipVelocity, function(velocity){
    console.log(`Velocidade atual: ${velocity}`)
})