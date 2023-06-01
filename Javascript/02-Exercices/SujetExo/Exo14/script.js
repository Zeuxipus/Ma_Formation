/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */
let AB= prompt("Veuillez saisir la longueur du segment AB"),
    BC= prompt("Veuillez saisir la longueur du segment BC"),
    CA= prompt("Veuillez saisir la longueur du segment CA"),
    affichage=" ";


/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */
affichage +="<hr><h2>De quelle nature est le triangle ABC</h2></hr>";



/**
 * COMPUTING
 */

if (AB===BC) {
    if (BC===CA){
        affichage+= "Le triangle est aquilatéral";
    }else {
        affichage+= "Le triangle est isocèle en B";
    }
}else if (AB===CA){
    affichage+= "Le triangle est isocèle en A";
}else if (BC===CA){
    affichage+= "Le triangle est isocèle en C";
}else {
    affichage+= "Le triangle n'est isocèle ni en A ni en B ni en C";
}

/**
 * AFFICHAGE DES RESULTATS
 */


resultat.innerHTML = affichage
