/**
 * Les tableaux numériques
 */

//Déclaration d'un tableau numérique (2 façons de faire)
let montTableau= [];
// ou => let montTableau= new Array();

//Affecter une valeur à un tableau numérique
montTableau[0] = "Pomme"; //affectation de Pomme en pos. 0
montTableau[1] = "Poire";

//Afficher le contenu d'un tableau
console.table(montTableau);

//Afficher une valeur à index
console.log(montTableau[1]);

//Déclaration et affectation de valeur en même temps
let legumes = ["carotte", "chou", "haricot"];
//equivaut à : let legumes = new array("carotte", "chou", "haricot")

//Réaffecter une valeur dans un tableau
console.log(legumes[2]);
legumes[2]="epinard";
console.log(legumes[2]);

//Ajouter des valeurs
legumes.push("courgette");
console.table(legumes);
legumes.push("aubergine");
console.table(legumes);

//Retirer la derniere valeur du tableau
legumes.pop();
console.table(legumes);

