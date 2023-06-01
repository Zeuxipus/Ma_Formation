/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */
var nom=""; var prenom=""; nomComplet="";

var affichage="";

affichage+="<h4>Addition de deux varriables type chaine (concaténation)</h4>"
/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */
nom = prompt("Veuillez saisir votre nom :")
affichage+="Vous avez saisi :<b>"+prenom+"<b><br>"

prenom = prompt("Veuillez saisir votre prénom :")
affichage+="Vous avez saisi :<b>"+nom+"<b><br>"

//affichage+="Bonjour <b>"+nom+" "+prenom+"<b><br>"

/**
 * COMPUTING
 */
prenom="Vous avez saisi "+prenom;
nom="Vous avez saisi "+nom;
nomComplet=prenom+" "+nom;
affichage+="Bonjour "+nom+" "+prenom


/**
 * AFFICHAGE DES RESULTATS
 */
/**console.log("Vous avez saisi: "+prenom);
console.log("Vous avez saisi: "+nom);
console.log(affichage);
resultat.textContent=(prenom);
resultat.textContent=(nom);
resultat.textContent=(nomComplet);
inner
*/
//resultat.innerHTML=;

