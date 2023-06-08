import Vehicule from "./Vehicule.js";

export default class Auto extends Vehicule {
    constructor(marque, modele, km, annee, clim){
        super(marque, modele, km, annee);
        this.clim = clim;
    }

    Display(){
        return(`<b>Voiture : </b>${super.Display()} - ${this.clim?"Climatisée":"Non climatisée"}`)
        console.log(this);
    }
}