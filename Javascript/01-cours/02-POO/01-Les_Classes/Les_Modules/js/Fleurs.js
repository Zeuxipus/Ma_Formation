import Vegetaux from "./Vegetaux.js";

export default class Fleurs extends Vegetaux {
    constructor(nom, type){
        super(nom, type)
        this.Naissance()
    }

    Naissance(){
        console.log("Je vienis d'une graine ou d'un bulbe...")
        this.photsynthese = true
    }

    Fane(){
        console.log("Je fane");
        this.photsynthese = false
    }
}