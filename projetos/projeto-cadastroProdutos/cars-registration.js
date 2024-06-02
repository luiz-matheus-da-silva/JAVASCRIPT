function addCar() {
    //salva os valores do input
    let carPlate = document.querySelector("input[name='carPlate']").value
    let carYear = document.querySelector("input[name='carYear']").value
    let carBrand = document.querySelector("input[name='carBrand']").value
    let carPrice = document.querySelector("input[name='carPrice']").value

    //cria uma lista
    let newLi = document.createElement("li")
    newLi.innerText = `Placa: ${carPlate}, Ano: ${carYear}, Marca: ${carBrand}, Preço: R$ ${carPrice}`

    //cria o botão de remover
    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeCar(this)")
    removeButton.classList.add("btn")
    removeButton.classList.add("btn-danger")
    removeButton.classList.add("btn-sm")
    
    newLi.appendChild(removeButton)

    //pega a lista do DOM
    let listaDom = document.getElementById("cars-list")
    listaDom.appendChild(newLi)
}

function removeCar(button) {
    let liToRemove = button.parentNode
    document.getElementById("cars-list").removeChild(liToRemove)
}