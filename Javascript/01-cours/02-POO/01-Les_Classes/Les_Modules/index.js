import Person from './js/Person.js'
import Fleurs from './js/Fleurs.js'
import Chien from './js/Chien.js'


/*
    Person
*/

// Création d'un tableau de personne
let persons = new Array();

let p1 = new Person();
p1.Nom = "Coko"
p1.Prenom = "Fran"
//console.log(p1);


let p2 = new Person("Dodo", "Dan")
//console.log(p2);

persons.push(p1)
persons.push(p2)

for (let person of persons){
    person.Display()
}

let medor = new Chien("Médor", "Bouledogue")
let cosmos = new Fleurs("Cosmos", "Rose")

let etreVivant = [medor, cosmos, p1, p2]

for (let etre of etreVivant){
    console.log(`------ ${etre.nom}------`);
    etre.Naissance()
    etre.Respiration()
    etre.Alimentation()
    if(etre.constructor.name == "Fleur"){
        etre.Fane()
    }
    console.log("--------------------");
}

console.log(medor.eat);