function addTask() {
    let inTask = document.querySelector("input[name='inTask']").value

    //cria uma lista
    let newLi = document.createElement("li")
    newLi.classList.add("list-group-item")
    newLi.classList.add("text-white")
    newLi.classList.add("fs-4")
    newLi.classList.add("m-2")
    newLi.innerText = `${inTask}`

    //botão remover
    let btnRemove = document.createElement("button")
    btnRemove.type = "button"
    btnRemove.innerText = "Delete"
    btnRemove.setAttribute("onclick", "removeItem(this)")
    btnRemove.classList.add("btn")
    btnRemove.classList.add("btn-danger")
    btnRemove.classList.add("btn-md")
    btnRemove.classList.add("p-2")
    btnRemove.classList.add("m-2")

    newLi.appendChild(btnRemove)

    //manipula o DOM
    let tasksList = document.getElementById("tasksList")
    tasksList.appendChild(newLi)
}

function removeItem(button) {
    let taskToRemove = button.parentNode
    document.getElementById("tasksList").removeChild(taskToRemove)
}