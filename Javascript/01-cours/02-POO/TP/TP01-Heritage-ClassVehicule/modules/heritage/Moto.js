import Vehicule from "./Vehicule.js";

export default class Auto extends Vehicule {
    constructor(marque, modele, km, annee){
        super(marque, modele, km, annee);
        this.clim = false;
    }

    Display(){
        return(`<b>Moto : </b>${super.Display()} - ${this.clim?"Climatisée":"Non climatisée"}`)
        console.log(this);
    }
}