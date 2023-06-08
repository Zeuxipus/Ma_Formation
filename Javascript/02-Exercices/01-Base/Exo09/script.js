/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */
let capitalinit=0,
    interets=4,
    duree=0,
    capitalfin=0,
    montantint=0,
    affichage=' ';


/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */

capitalinit=prompt("Donnez votre capital de départ en euros:")
duree=prompt("Donnez la durée du placement en années:")

/**
 * COMPUTING
 */
capitalfin=Math.round(capitalinit * Math.pow(1+(interets/100), duree), 2);
montantint=capitalfin-capitalinit;

/**
 * AFFICHAGE DES RESULTATS
 */
affichage+= `Avec un capital de départ de <b>${capitalinit}</b> € placé à un taut de <b>4%</b> pendant ${duree} an(s) nous aurons :`;
affichage+= `<br>Le montant total des intérets est de <b>${montantint}</b> €</br>`;
affichage+= `<br>Le capital final au bout de ${duree} années de placement sera de <b>${capitalfin}</b> €<br>`;

resultat.innerHTML = affichage


