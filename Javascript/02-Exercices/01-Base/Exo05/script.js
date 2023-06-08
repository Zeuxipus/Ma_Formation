/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */
let text,
    traitement,
    tab,
    affichage = " ";


/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */
text=prompt("Veuillez saisir un mot")


affichage += "Création et utilisation des methodes applicable aux chaines de caracteres en JS"
affichage += "<br>Traitement d'une chaine de caracteres</b>"

min=text.toLowerCase();
affichage+=("La chaine en majuscule :${maj}");

tab=min.split("").join(",");
affichage+=("Mise en tableau :${tab}");

traitement=tab.split(" "),
affichage+=("La chaine en minuscule :${min}");




/**
 * COMPUTING
 */



/**
 * AFFICHAGE DES RESULTATS
 */

