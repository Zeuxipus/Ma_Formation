/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */

let capital=0,
    taux=0,
    duree=0,
    affichage=' ';

/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */

capitalinit=prompt("Donnez votre capital de départ en euros:")
duree=prompt("Donnez la durée du placement en années:")

const capitinit=document.querySelector("€");
const interet=document.querySelector("%");
const annee=document.querySelector("an");


/**
 * COMPUTING
 */



/**
 * AFFICHAGE DES RESULTATS
 */


resultat.innerHTML = affichage
