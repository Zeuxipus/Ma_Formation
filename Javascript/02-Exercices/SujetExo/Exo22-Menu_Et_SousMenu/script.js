/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 * 
 * for (let a = 1; a<5; a++) {
    console.log("a = " + a);
    for (b=1; b<5; b++){
        console.log("b = "+ b);
    }
}
 */
let affichage = "";

for (let chap = 1; chap<=3; chap++){
    affichage += `<br>Chapitre ${chap}</br>`;
    for (let part = 1; part <=3; part++){
        affichage += `<li>Partie ${chap}.${part}</li>`
    }
}







resultat.innerHTML=affichage;

