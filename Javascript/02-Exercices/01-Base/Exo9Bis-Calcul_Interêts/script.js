/**
 * EXERCICE09Bis -  LE CALCUL D'INTERETS
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('.result');



let capitalDepart,
    interets,
    duree,
    capitalFinal = 0,
    affichage = "";


capitalDebut = document.querySelector('#capitalDepart')
int = document.querySelector('#interets')
annee = document.querySelector('#duree')

Valider = () => {
    capitalDepart = capitalDebut.value
    interets = int.value
    duree = annee.value
    capitalFinal = Number(Math.round(capitalDepart * Math.pow(1 + (interets / 100), duree)));
    interets = Number(Math.round(capitalFinal - capitalDepart))
    Afficher();
}

Afficher = () => {
    affichage += `<p> Avec un capital de ${capitalDepart}€ avec ${interets}% d'intérêts placés pendant ${duree}an(s)</p>`
    affichage += `<li>Le capital final sera de ${capitalFinal}€</li>`
    affichage += `<li>Le montant des intérêts sera de ${interets}€</li>`
    resultat.innerHTML = affichage;
}




