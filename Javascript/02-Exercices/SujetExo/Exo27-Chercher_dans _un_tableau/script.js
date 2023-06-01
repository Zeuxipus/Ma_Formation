/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */

let affichage = "",
    nbNote,
    moy,
    etudiants = [{
        prenom: "José",
        nom: "Garcia",
        matieres: {
            francais: 16,
            anglais: 7,
            humour: 14
        }
    },
    {
        prenom: "Antoine",
        nom: "De Caunes",
        matieres: {
            francais: 15,
            anglais: 6,
            humour: 16,
            informatique: 4,
            sport: 10
        }
    }
    ];

for (let etudiant of etudiants) {
    affichage += `<hr><br>${etudiant.prenom} ${etudiant.nom}</br></hr>`
    total=0
    nbNote=0;
    for (let key in etudiant.matieres) {
        affichage += `<li>${key} : ${etudiant.matieres[key]} /20</li>`
        total += etudiant.matieres
        nbNote++;
    }

moy=total/nbNote
affichage += `Moyenne générale : ${Math.round(moy*10)/10}`
}




resultat.innerHTML = affichage;