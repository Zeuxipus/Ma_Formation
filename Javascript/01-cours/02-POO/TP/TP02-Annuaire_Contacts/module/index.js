import Contact from "./js/Contacts.js";

// Récupération des éléments du DOM
const tableau = document.querySelector("#tableau")
const Valider = document.querySelector('#Valider')


const contacts = new Array();

function createFakeContact() {
    let annuaire = [
        {
            titre: "Monsieur",
            nom : 'Térieur',
            prenom : 'Alain',
            dateNaissance : '1996/05/14',
            telephone : '+33761981542',
            mail : 'alain@terieur.com',
        },

        {
            titre: "Madame",
            nom : 'Croche',
            prenom : 'Sarah',
            dateNaissance : '1999/07/23',
            telephone : '+33799666204',
            mail : 'sarah@croche.com.com',
        },

        {
            titre: "Madame",
            nom : 'Elsait',
            prenom : 'Esther',
            dateNaissance : '1990/09/27',
            telephone : '+33742619815',
            mail : 'esther@elsait.com',
        }
    ];

    
    // Ajout des contacts à la collection contacts
    
    for (let contact of annuaire){
        let tmp = new Contact(contact.titre, contact.nom, contact.prenom, new Date(contact.dateNaissance).toLocaleDateString(), contact.telephone, contact.mail)
        contacts.push(tmp)
    }
    console.log(contacts);
}

function UpdateTab(){
    // on vide le tableau
    tableau.innerHTML = '' 

    // on rempli le tableau avec les nouvelles valeurs
    for(let i=0; i<contacts.length; i++){
        tableau.innerHTML += `
        <td>${i+1}</td>
        <td>${contacts[i].titre}</td>
        <td>${contacts[i].nom}</td>
        <td>${contacts[i].prenom}</td>
        <td>${contacts[i].dateNaissance}</td>
        <td>${contacts[i].telephone}</td>
        <td>${contacts[i].mail}</td>
        `
    }
}

Valider.onclick = () => {
    // récupération des saisies utilisateur
    const nom = document.querySelector("#nom").value;
    const prenom = document.querySelector("#prenom").value;
    const dateNaissance = new Date(document.querySelector("#dateNaissance").value).toLocaleDateString();
    const telephone = document.querySelector("#telephone").value;
    const mail = document.querySelector("#mail").value;

    // récuoerer la valeur des btn radio
    const titre = document.getElementById('Mr').checked ? "Mr" : "Mme"

    if(nom != "" && dateNaissance != "" && telephone !="" && mail!=""){
        //instanciation de l'objet contact
        let tmp = new Contact(titre, nom, prenom, dateNaissance, telephone, mail)
        contacts.push(tmp)
        UpdateTab()
    }else {
        alert("Veuillez renseigner tous les champs")
    }
}

function Init(){
    createFakeContact()
    UpdateTab()
}

window.onload = Init()