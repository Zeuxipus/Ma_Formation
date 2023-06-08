/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */
let affichage = "";


for (let i = 1; i<=10; i++){
    affichage += `<br>Table de ${i}</br>`;
    for (let j = 1; j <=10; j++){
        affichage += `<li> ${i} x ${j} = `+ i*j+`</li>`
    }
}







resultat.innerHTML=affichage;

