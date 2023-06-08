/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

// déclaration des variables

nmax = 0,
nbNote =5,
nmin = 20,
moy = 0,
affichage = "";


affichage += `Sur l'ensemble des ${nbNote} notes :<ul>`

for(let i =1; i <= nbNote; i++){
    let notetmp = Number(prompt("Merci de saisir une note /20 :"))

    while(isNaN(notetmp) || notetmp<0 || notetmp>20){
        let notetmp = Number(prompt("Erreur de saisie ! Merci de saisir une note /20 :"))
    }

    affichage+= `<li> En note ${i}, vous avez saisi ${notetmp}`
}

moy += notetmp

if (notetmp>nmax) {
    nmax = notetmp
}


if (notetmp<nmin) {
    nmin = notetmp
}

affichage+= "</ul></hr>"


moy= Math.round(moy/nbNote)*100/100

affichage += `<li> la meilleure note est ${nmax}`
affichage += `<li> la moins bonne note est ${nmin}`
affichage += `<li> la moyenne est de ${nmax}/20`








resultat.innerHTML= affichage;

