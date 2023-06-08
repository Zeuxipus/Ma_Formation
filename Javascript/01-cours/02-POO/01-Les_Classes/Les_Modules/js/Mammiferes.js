import EtreVivant from "./EtreVivant.js";


export default class Mammiferes extends EtreVivant {
    constructor(nom, type){// Constructor représente tous ce qui s'enclenche par défaut
        super(nom, type);
        this.eat = false
        this.Naissance();
    }

    Naissance(){
        super.Naissance()  // super == héritage de la methode
        console.log("Naissance après une période de gestation");
    }

    Alimentation(){
        super.Alimentation()
        this.eat = true
    }
}