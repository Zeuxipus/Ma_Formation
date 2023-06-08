/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */
let revenus = 0,
    nbAdultes = 0,
    NbEnfants=0,
    nbParts = 0,
    revenuImposable = 0,
    montantImpot=0;
    


/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */
revenus = prompt("Veuillez saisir le montant des revenus du foyer:");
NbAdultes = prompt("Veuillez saisir le nombre d'adultes au sein du foyer:");
NbEnfants = prompt("Veuillez saisir le nombre d'enfants au sein du foyer:");


/**
 * CALCUL DU NOMBRE DE PART
 */
if(NbEnfant <=2) {
    nbParts=nbAdultes + NbEnfants - 0.5
}

revenuImposable = revenus / nbParts


if(revenuImposable >= 10778 && revenuImposable <= 27478) {
    montantImpot = (revenuImposable - 10777 * 0.11)
} else if (revenuImposable >=27479 && revenuImposable <= 78570) {
    montantImpot = (revenuImposable - 27478) * 0.3 + (27478-10777)*0.11
}else if (revenuImposable >= 78571 && revenuImposable <= 168994) {
    montantImpot = (revenuImposable - 78570) * 0.41 + (78570 - 27478)*0.3 + (27478 - 10777)*0.11
}else if (revenuImposable >= 168995) {
    montantImpot = (revenuImposable - 168994) *0.45 +(168994 - 78570)*0.41 + (78750-27478)*0.3 + (27478-10777)*0.11
}


montantImpot *= nbParts
/**
 * AFFICHAGE DES RESULTATS
 */


resultat.innerHTML = `le montant de l'impot sur le revenu pour un foyer composé de ${nbAdultes} adultes et de ${NbEnfants} enfants est de ${montantImpot}`
