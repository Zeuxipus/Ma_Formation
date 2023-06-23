export default class Vehicule {
    constructor(immat, dateEntree){
        this.immat = immat
        this.dateEntree = dateEntree
        this.dateSortie = ""
    }
    VehiculeToString(){
        return(`Immatriculation du véhicule :${this.immat} - Date d'entrée : ${this.dateEntree} - Date de sortie :${this.dateSortie}`)
        console.log(this.immat);
    }
}