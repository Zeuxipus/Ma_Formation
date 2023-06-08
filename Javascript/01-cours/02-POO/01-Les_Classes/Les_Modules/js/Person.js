import Mammiferes from "./Mammiferes.js";

export default class Person extends Mammiferes {
    constructor(nom, prenom){
        super(nom, 'Humain')
        this.Prenom = prenom
        this.Nom = nom
    }

    Display(){
        console.log(this);
    }
}