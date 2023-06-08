/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */
let cent= prompt("Donnez une taille en cm"),
    poids=prompt("Donnez un poids en kg"),
    taille=0,
    affichage = " ";


/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */



/**
 * COMPUTING
 */
if (((poids>=43 && poids<=47) && (cent>=145 && cent<172)) || ((poids>=48 && poids<=53)&&(cent>=145 && cent<169)) || ((poids>=54 && poids<=59)&&(cent>=145 && cent<166))|| ((poids>=60 &&poids<=65)&&(cent>=145 && cent<163))|| (poids>=60 && poids<=65)&&(cent>=145&&cent>160)){
    taille = 1
    affichage += `Pour ${cent}cm et ${poids}kg, prendre la taille ${taille}`
}else if(((poids>=48 && poids<=53) && (cent>=169 && cent<183)) || ((poids>=54 && poids<=59)&&(cent>=166 && cent<178)) || ((poids>=60 && poids<=65)&&(cent>=163 && cent<175))|| ((poids>=66 &&poids<=71)&&(cent>=160 && cent<172))){
    taille=2
    affichage += `Pour ${cent}cm et ${poids}kg, prendre la taille ${taille}`
}else if(((poids>=54 && poids<=59) && (cent>=178 && cent<186)) || ((poids>=60 && poids<=65)&&(cent>=175 && cent<186)) || ((poids>=77 && poids<=77)&&(cent>=163 && cent<186))|| ((poids>=66 &&poids<=71)&&(cent>=160 && cent<172))){
    taille=3
    affichage += `Pour ${cent}cm et ${poids}kg, prendre la taille ${taille}`
}else {
    `Pour ${cent} et ${poids}, aucune taille ne correspond ${taille}`
}


/**
 * AFFICHAGE DES RESULTATS
 */


resultat.innerHTML = affichage
