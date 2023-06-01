/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */
let mot,
    reverse;



/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */

mot = prompt("Veuillez saisir un mot :")
affichage += ("Vous avez saisi "${mot})

reverse = mot.split('').reverse().join('')
if (reverse === mot) {
    affichage += ("Le mot "${mot}" est un palindrome");}
    else {affichage += ("Le mot "${mot}" n'est pas un palindrome");}



/**
 * COMPUTING
 */



/**
 * AFFICHAGE DES RESULTATS
 */

