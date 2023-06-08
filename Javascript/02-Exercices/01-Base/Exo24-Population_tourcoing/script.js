/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */
let taux=0.89,
    nbHab = 96209,
    date = 2015,
    nbAnnee=0,
    affichage = `<h2>Accroissement de la population de Tourcoing</h2><p>En  ${date}, il y avait ${nbHab} habitants`;

for (nbAnnee=0; nbAnnee<=50; nbAnnee++) {
    nbHab += nbHab*(taux/100)
    affichage += `En ${++date}, il y aura ${Math.round(nbHab)} habitants</hr>`
    if (nbHab >=120000){
        break
    }
}

affichage += `<p>Avec un taux de ${taux}% , en ${date}, il y aura ${Math.round(nbHab)} en `












resultat.innerHTML= affichage;

