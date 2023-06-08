/**
 * EXERCICE01 - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');


/**
 * DECLARATION DES VARIABLES
 */
var nb1 ,
    diametre,
    perimetre,
    aire,
    perimetrearr,
    airearr,
    affichage = "";


/**
 *   AFFICHAGE DU TITRE DE L'EXERCICE
 */

affichage += "<h3>Utilisation des fonctions() de l'objet Math</h3>";
affichage +="<p><b>Utilisation de &#960 (pi)</b></p>";

/**
 * RECUPERATION DES SAISIES UTILISATEUR
 */

nb1 = Number(prompt("Veuillez saisir un premier nombre : "));
affichage += "La valeur de &#960 est " ;

affichage +="<p><b>Calcul du perimètre<i>(d x &#960)</i> et de l'aire <i>(&#960 * r²)</i> d'un cercle</b></p>";

/**
 * COMPUTING
 */

diametre = nb1*2;
affichage += "Diamètre = <b>" +diametre +"</b>"+ " cm"+"<br/>";

perimetre = diametre*Math.PI;
affichage += "Périmètre = <b>" +perimetre +"</b>"+ " cm"+"<br/>";

aire = Math.PI*Math.pow(nb1,2);
affichage += "Aire = <b>" +aire +"</b>"+ " cm²"+"<br/>";

perimetrearr = Math.round(perimetre)
affichage += "Périmètre <i>(Arrondi)</i> = <b>" +perimetrearr +"</b>"+ " cm"+"<br/>";

airearr = Math.round(aire)
affichage += "Aire <i>(Arrondi)</i> = <b>" +airearr +"</b>"+ " cm²"+"<br/>";



/**
 * ``=>back tick pour faire des mises en forme de caractère
 * AFFICHAGE DES RESULTATS
 */
resultat.innerHTML = affichage;


