/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */
let HT=0,
    TTC=0,
    TVA=0.2,
    TVAcalc=0,
    affichage=' ';
    

/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */

HT=prompt("Veuillez saisir le prix de l'objet Hors Taxe en euros:")

/**
 * COMPUTING
 */
TVAcalc=(HT*TVA);
TTC =parseInt(HT)+parseInt(TVAcalc);

/**
 * AFFICHAGE DES RESULTATS
 */
affichage+= `Le prix de l'objet HT est de <b>${HT}</b>€ avec un taux applicable de <b>20%</b>`;
affichage+= `<br>Le montant de la TVA sera de <b>${TVAcalc}</b>€</br>`;
affichage+= `Le prix de l'objet TTC est de <b>${TTC}</b>€`;

resultat.innerHTML = affichage
