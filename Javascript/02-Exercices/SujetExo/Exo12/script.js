/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */

let Nb1 = 0,
    Nb2 = 0,
    affichage = " ";

/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */

Nb1 = prompt("Veuillez saisir un premier nombre/chiffre :")
Nb2 = prompt("Veuillez saisir un second nombre/chiffre :")

/**
 * COMPUTING
 */

if (Nb1%Nb2===0) {
    affichage += `<br>Le nombre ${Nb1} est divisible par ${Nb2} !</br>`
}else{
    affichage += `<br>Le nombre ${Nb1} n'est pas divisible par ${Nb2} !</br>`
}

/**
 * AFFICHAGE DES RESULTATS
 */


resultat.innerHTML = affichage
