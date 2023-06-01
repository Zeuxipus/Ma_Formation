/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */

let saisieUt = " ",
    voyelle = ["a","e","i","o","u","y"]
    affichage = " ";

/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */

saisieUt = prompt("Veuillez saisir une lettre :")

/**
 * COMPUTING
 */

if (voyelle.includes(saisieUt)) {
    affichage += `<br>La lettre ${saisieUt} est une voyelle !</br>`
}else{
    affichage += `<br>La lettre ${saisieUt} est une consonne, ce n'est pas une voyelle !</br>`
}

/**
 * AFFICHAGE DES RESULTATS
 */


resultat.innerHTML = affichage
