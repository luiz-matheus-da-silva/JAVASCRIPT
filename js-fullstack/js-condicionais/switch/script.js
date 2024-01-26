let distanceLightYears = prompt("Qual a distância em anos-luz?")
let chosenOption = prompt("Escolha uma opção: \n1-Parsec(pc)\n2-Unidade astronômica(AU)\n3-Quilômetros(km)")

let chosenUnity
let convertedDistance

switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceLightYears * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertedDistance = distanceLightYears * 63241.1
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = distanceLightYears * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
}

alert("Distância em Anos-luz: " + distanceLightYears + "\n" + chosenUnity + ": " + convertedDistance)