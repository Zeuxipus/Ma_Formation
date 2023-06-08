export default class Contact {
    constructor(titre, nom, prenom, dateNaissance, telephone, mail){
        this.titre = titre
        this.nom = nom
        this.prenom = prenom
        this.dateNaissance = dateNaissance
        this.telephone = telephone
        this.mail = mail
    }
    ContactToString(){
        return(`Titre :${this.titrez} - Nom : ${this.nom} - Prenom :${this.prenom}`)
    }
}