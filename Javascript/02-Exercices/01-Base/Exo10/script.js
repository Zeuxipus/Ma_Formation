/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */
let email=" ",
    mdp=" ",
    affichage= " ",
    mailut = "contact@teamjs.fr",
    mdput= "leLundiAuSoleil";


/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */
email=prompt("Veuillez saisir votre adresse mail :")
mdp=prompt("Veuillez saisir votre mot de passe:")


/**
 * COMPUTING
 */

affichage +="<br><b>Test de connection</b></br>";
affichage +="<hr><br>Veuillez saisir vos identifiants :</br></hr>";

if (email== mailut){
    affichage += "<br>Addresse mail correcte</br>";
} else  {
    affichage += "<br>Adresse mail incorrecte</br>";
}

if (mdp==mdput){
    affichage +="<br>Mot de passe correct</br>";
} else  {
    affichage+= "<br>Mot de passe incorrect</br>";
}

/**
 * AFFICHAGE DES RESULTATS
 */



resultat.innerHTML = affichage
