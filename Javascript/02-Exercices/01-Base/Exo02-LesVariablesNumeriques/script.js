/**
 * EXERCICE01 - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');


/**
 * DECLARATION DES VARIABLES
 */
var nb1 ,
    nb2,
    addition,
    affichage = "";


/**
 *   AFFICHAGE DU TITRE DE L'EXERCICE
 */

affichage += "<h3>Addition de deux variables de type arithmétique</h3>";

/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */

nb1 = Number(prompt("Veuillez saisir un premier nombre : "));
affichage += "Vous avez saisi : <b>" + nb1+"</b><br/>";

nb2 = Number(prompt("Veuillez saisir un autre nombre : "));
affichage += "Vous avez saisi : <b>" + nb2 +"</b><br>";

/**
 * COMPUTING
 */

addition = nb1 + nb2;
affichage += "La somme de <b>" + nb1 +" + " + nb2 +" = "+addition+ "</b><hr/>";


/**
 * ``=>back tick pour faire des mises en forme de caractère
 * AFFICHAGE DES RESULTATS
 */
resultat.innerHTML = affichage;


