//Import de la classe véhicule
import Vehicule from "./vehicule.js";

// création du tableau
let Vehicules = new Array();

// Stockage du DOM dans les variables
const immat = document.querySelector("#Immat")
const ticket = document.querySelector('#Ticket')
const payer = document.querySelector('#Payer')
const successBox = document.querySelector('#successBox')
const messageBox = document.querySelector('#messageBox')
const alertBox = document.querySelector('#alertBox')

const dateEntree = new Date();
const dateSortie = new Date();
const duree = (dateSortie - dateEntree);


payer.onclick = {
    findCar(){
    if(immat == findCar()) {
    ticket.onclick = () => {
        addToPark()
        switch (true) {
            case duree <= 15:
                prix = 0.80;
                break;
            case duree > 15 && duree <= 30:
                prix = 1.30;
                break;
            case duree > 30 && duree <= 45:
                prix = 1.70;
                break;
            case duree < 45:
                prix = 6;
                break;
        }
    }
    displayBox(messageBox.textContent = `Le prix à payer est de ${prix}`)
}else {
    displayBox(alertBox.textContent = `Le véhicule n'existe pas`)
}
}
}



function displayBox(domElement, message, delay) {
    domElement.style.display = "block"
    domElement.textContent = message
    setTimeout(() => {
        domElement.style.display = "none"
    }, delay)
}

//alertBox.style.display = "block"
//alertBox.textContent = "Le véhicule n'existe pas"


function addToPark() {
    let tmp = new Vehicule(immat.value, dateEntree)
    Vehicules.push(tmp);
    console.log(Vehicules);
}

function findCar() {
    findImmat = Vehicules.findLast((element) => element == immat)
}

function init() {
    alertBox.style.display = "none"
    messageBox.style.display = "none"
    successBox.style.display = "none"
    //addToPark()
    //updateTab()
}


window.onload = init()