let person = {
    name: "Luiz",
    age: 18,
    eyeColor: "brown"
}

let {name, age, eyeColor} = person

console.log(name)
console.log(age)
console.log(eyeColor)

let car = ['Ferrari', '2016', 'Red']
let [brand, year, color] = car

console.log(brand)
console.log(year)
console.log(color)

let brands = ['Adidas', 'Nike', 'Puma', 'Penalty']
function printBrands([adidas, nike, puma, penalty]) {
    console.log(adidas, nike, puma, penalty)
}

printBrands(brands)