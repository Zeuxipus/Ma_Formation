// Toujours créer une classe en commençant par une majuscule

export default class EtreVivant{
    constructor(nom, type) {
        this.nom = nom //this = le nom de la classe ici etrevivant
        this.type = type
    }

// ici Naissance() est une méthode
Naissance(){
    console.log("Tous les êtres vivants naissent");
}

Respiration(){
    console.log("Tous les êtres vivants respirent");
}

Alimentation(){
    console.log("Tous les êtres vivants mangent");
}
}
// Création d'une classe qui va hériter des méthodes==> Mammiferes.js