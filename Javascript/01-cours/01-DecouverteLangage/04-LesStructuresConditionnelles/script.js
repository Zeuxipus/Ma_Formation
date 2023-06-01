/**
 * Les structures conditionnelles if else if
 */

//Avec plusieurs instructions
let estcrediteur = compte>0

if(estcrediteur) {
    console.log("Votre compte est créditeur !(avec booleen)");

} else {
    console.log("Votre compte est débiteur !(avec booleen");
}

//avec récupération saisie utilisateur

let age=Number(prompt("Indiquer votre age"));

if(age>=18) {
    console.log("Vous êtes majeur");
}else {
    console.log("Vous êtes mineur");
}


/**
 * Avec Sinon
 */

if (compte>0) {
    console.log("votre compte est crediteur");
    console.log(`Vous avez ${compte} €`);
}else if (compte===0){
    console.log("Votre compte est null");
    console.log(`Vous avez ${compte} €`);
}else {
    console.log("votre compte est débiteur");
    console.log(`Vous avez ${compte} €`);
}


/**
 * Les Opérateurs de comparaison
 */

// (== comparaison de la valeur)
// (=== comparaison de la valeur et du type)
// (!= vérifie si 2 valeurs sont différentes)
// (!== vérifie valeur et type)

console.log(1==1);//vrai
console.log(1==="1");// faux
console.log(1=="1");//vrai
