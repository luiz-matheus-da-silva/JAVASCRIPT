function verifyEnablement() {
    let isEnabled = document.querySelector("select").value
    let inText = document.querySelector("input[name='some-text']")
    let pElement = document.getElementById("message")

    if (isEnabled == "enabled") {
        inText.disabled = false
        pElement.innerText = ""
        pElement.style.color = "black"
        pElement.style.backgroundColor = "transparent"
    } else {
        inText.disabled = true
        pElement.innerText = "DESABILITADO"
        pElement.style.color = "white"
        pElement.style.backgroundColor = "red"
    }
}