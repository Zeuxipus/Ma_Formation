// petit enfant de la classe etreVivant

import Mammiferes from "./Mammiferes.js";

export default class Chien extends Mammiferes {
    Alimentation(){
        if(!this.eat) {
            console.log("Je mange");
            this.eat= true
        }else {
            console.log("J'ai déjà mangé");
        }
    }

    Respiration(){
        console.log("Inspiration ..... Expiration  J'ai des poumons");
    }
}