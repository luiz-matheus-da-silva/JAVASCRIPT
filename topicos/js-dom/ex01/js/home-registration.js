//pegar os valores dos inputs]
function saveHouse() {
    let houseNumber = document.querySelector("input[name='houseNumber'").value
    let neighborhoodName = document.querySelector("input[name='neighborhoodName'").value
    let cityName = document.querySelector("input[name='cityName'").value
    let houseArea = document.querySelector("input[name='houseArea'").value

    let newListValue = document.createElement("li")
    newListValue.innerText = `Número: ${houseNumber}, Cidade: ${cityName}, Bairro: ${neighborhoodName}, Área: ${houseArea} m2`

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")
    

    newListValue.appendChild(removeButton)

    document.getElementById("house-list").appendChild(newListValue)
}

function removeHouse(button) {
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
}
