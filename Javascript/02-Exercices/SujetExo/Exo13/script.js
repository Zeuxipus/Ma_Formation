/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');

/**
 * DECLARATION DES VARIABLES
 */

let age = prompt("Veuillez saisir l'âge de votre enfant :"),
affichage=" ";
/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */

affichage+="<h2><hr>Veuillez saisir l'âge de votre enfant afin de déterminer sa catégorie :</h2></hr>"

/**
 * COMPUTING
 */
if (age>= 3 && age<=6){
    affichage +="Catégorie baby";
}else if (age >= 7 && age<=8){
    affichage +="Catégorie poussin";
}else if(age>=9 && age<=10){
    affichage +="Catégorie pupille";
}else if (age>10 && age <=12){
    affichage +="Catégorie minime";
}else if (age>=13 && age<=18){
    affichage +="Catégorie cadet";
}else if (age<3){
    affichage +="Votre enfant est trop jeune pour pratiquer";
}else{
    affichage +="N'est plus un enfant";
}


/**
 * AFFICHAGE DES RESULTATS
 */


resultat.innerHTML = affichage
