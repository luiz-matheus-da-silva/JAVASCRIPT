function setBlueBackground() {
    let styleText = document.getElementById("style-text")
    styleText.style.backgroundColor = "blue"
}
function setTransparentBackground() {
    let styleText = document.getElementById("style-text")
    styleText.style.backgroundColor = "transparent"
}
function setRedColor() {
    let styleText = document.getElementById("style-text")
    styleText.classList.add("red-color")
}
function removeRedColor() {
    let styleText = document.getElementById("style-text")
    styleText.classList.remove("red-color")
}