/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */
let longueur = 0,
    largeur = 0,
    airecarre = 0,
    perimetre = 0,
    airerect= 0,
    perimetrerect = 0,
    longueurrect= 0,
    largeurrect=0,
    affichage = ' ';


/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */
longueur=prompt('Veuillez saisir la longueur du carré en cm:')
largeurrect= prompt('Veuillez saisir la largeur du rectangle en cm:')
longueurrect= prompt('Veuillez saisir la longeur du rectangle en cm:')


/**
 * COMPUTING
 */
perimetre = longueur*4;
airecarre= longueur*longueur;

perimetrerect = longueurrect*2+largeurrect*2;
airerect = longueurrect*largeurrect;


/**
 * AFFICHAGE DES RESULTATS
 */
affichage +=`<hr><b>Calcul de l'aire et d'un périmètre d'un carré</b></hr>`;
affichage+= `<br>Les longueurs des cotés du carré étant de <b>${longueur}</b> cm</br>`;
affichage += `Le périmètre du carré est de  <b>${perimetre}</b> cm`;
affichage += `<br>L'aire du carré est de  <b>${airecarre}</b> cm</br>`;


affichage +=`<hr><b>Calcul de l'aire et d'un périmètre d'un rectangle</b></hr>`;
affichage+= `<br>Les longueurs des cotés du rectangle étant de  <b>${longueurrect}</b> cm</br>`;
affichage += `Le périmètre du rectangle est de  <b>${perimetrerect}</b> cm`;
affichage += `<br>L'aire du carré est de  <b>${airerect}</b> cm</br>`;



resultat.innerHTML = affichage