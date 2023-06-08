/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */
let anciennete=prompt("Depuis combien d'années êtes vous dans l'entreprise ?"),
    age=prompt("Quel est votre age ?"),
    salaire= prompt("Saisir le dernier salaire:"),
    prime1=(salaire%2)*anciennete,
    prime=salaire*anciennete,
    surprime=salaire*2,
    surprime1=salaire*5,
    totalprime1= parseInt(prime1)+parseInt(surprime),
    totalprime= parseInt(prime)+parseInt(surprime1),
    affichage="";


/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */

if (anciennete>=1 && anciennete>=10 && 
    age>=46&& age<=49){
        affichage += `<h2>Le montant de l'indemnité pour un salarié de <b>${age}</b> ans et avec <b>${anciennete}</b> ans d'ancienneté s'élève à <b>${totalprime1} €`      
}else if(anciennete>=10 && anciennete<=80 && age>=50){
        affichage += `<h2>Le montant de l'indemnité pour un salarié de <b>${age}</b>ans et avec <b>${anciennete}</b> ans d'ancienneté s'élève à <b>${totalprime} €`
    }


/**
 * COMPUTING
 */



/**
 * AFFICHAGE DES RESULTATS
 */


resultat.innerHTML = affichage
