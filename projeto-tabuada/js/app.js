class App {
    addTableMultiplicator() {
        let number = document.querySelector("input[name=inNumber]").value
        console.log(number)
        this.AddMultiplicationList(number)
    }

    AddMultiplicationList(number) {
        let tableList = document.getElementById("tableList")

        for (let index = 0; index <= 10; index++) {
            
            let result = number * index
            let newLi = document.createElement("li")
            newLi.innerHTML = `${number} x ${index} = ${result}`
            newLi.classList.add("list-group-item")
            tableList.appendChild(newLi)
        }
        let buttonToRemove = this.createRemoveButton()
        let divRemoveBtn = document.getElementById("removeBtn")
        divRemoveBtn.appendChild(buttonToRemove)


    }

    createRemoveButton() {
        let button = document.createElement("button")
        button.setAttribute("onclick", "app.remove()")
        button.innerHTML = "Remover"
        button.classList.add("btn")
        button.classList.add("btn-md")
        button.classList.add("btn-danger")
        return button
    }

    remove() {
        let tableList = document.getElementById("tableList");
        tableList.innerHTML = ""; // Remove todos os itens da lista
        let buttonToRemove = document.querySelector(".btn-danger");
        buttonToRemove.remove(); // Remove o botão de remoção
        document.querySelector("input[name=inNumber]").value = ""
        document.querySelector("input[name=inNumber]").focus()
    }
}

