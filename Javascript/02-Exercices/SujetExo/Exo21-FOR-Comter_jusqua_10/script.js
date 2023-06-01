/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */
let i= 0,
    affichage= " ";

affichage += "<h2>Compter jusqu'à 10.</h2>"

while (i<=10) {
    affichage += `<li> ${i}</li>`;
    i++
}

affichage += "Super je sais compter !!"
resultat.innerHTML=affichage;

