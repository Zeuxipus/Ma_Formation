export default class Vehicule {
    constructor(marque, modele, km, annee){
        this.marque = marque
        this.modele = modele
        this.km = km
        this.annee = annee
    }

    Display(){
        return(`${this.marque} - ${this.modele} - ${this.km}km - ${this.annee}`);
    }
}

