/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */
let boisson1 = "Eau",
    boisson2 = "Jus d'orange",
    boisson3 = "Café",
    boisson4 = "Thé",
    choix = 0,
    affichage = "";


/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */
choix=prompt("Faites votre choix")

affichage += "***** DISTRIBUTEUR DE BOISSON *****</br>";
affichage += "1) Eau </br>2) Jus d'orange</br>3) Café</br>4) Thé</br>"


/**
 * COMPUTING
 */
switch(choix){
    case choix = 1 :
    affichage += `Votre ${boisson1} est servi`
    break;
    case choix = 2:
        affichage += `Votre ${boisson2} est servi`
        break;
    case choix = 3:
        affichage += `Votre ${boisson3} est servi`
        break;
    case choix = 4:
        affichage += `Votre ${boisson4} est servi`
    default:
        affichage += "Veuillez saisir une boisson entre 1 et 4"
}


/**
 * AFFICHAGE DES RESULTATS
 */


resultat.innerHTML = affichage
