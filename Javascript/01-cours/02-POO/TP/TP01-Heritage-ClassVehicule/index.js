import Auto from "./modules/heritage/Auto.js";
import Moto from "./modules/heritage/Moto.js";
const result = document.querySelector('.result')

let voiture = new voiture("Peugeot", "308", 150000, 2014, false)
let moto = new moto("BMW", "R1150R rockster", 68000, 2005)

result.innerHTML += `<div>${voiture.display()}</div>`
result.innerHTML += `<div>${moto.display()}</div>`