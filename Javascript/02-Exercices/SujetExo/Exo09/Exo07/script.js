/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */
let AB=0,
    BC=0,
    AC=0,
    hypo=0,
    affichage=' ';


/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */
AB=prompt('Veuillez saisir la longueur de AB en cm:')
BC=prompt('Veuillez saisir la longueur de BC en cm:')


/**
 * COMPUTING
 */
hypo= Math.pow(AB,2)+Math.pow(BC,2);
AC=Math.sqrt(hypo)/100;


/**
 * AFFICHAGE DES RESULTATS
 */
affichage+= `<br>La longueur des deux cotés adjacents à angle droit étant de <b>${AB}</b> et <b>${BC}</b> cm</br>`;
affichage+= `La longueur de l'hypothénuse est de <b>${AC}</b> cm`;



resultat.innerHTML = affichage
