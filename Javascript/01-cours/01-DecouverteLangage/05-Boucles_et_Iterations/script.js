/*
LES BOUCLES ITERATIVES
*/


// BOUCLE WHILE  /  TANT QUE

let i = 1

while (i <=10) {
    console.log(`la boucle s'est executée ${i} fois`);
    i++
}



// BOUCLE DO WHILE  / FAIRE TANT QUE

do {
    console.log(`la boucle do while s'est executée ${i} fois`);
    i++
} while (i<=10)

console.log(`à la sortie ${i} vaut `+i);


// BOUCLE FOR  / POUR

for (let y = 1; y <=10; y++) {
    console.log(`la boucle for s'est exectuée ${y} fois`);
}

// avec le for on peut casser la boucle
// ex :
//ITERATION AVEC BREAK OU CONTINUE

console.log('instructions Break ... Continue');

let jourSem = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

for (let j=0; j<jourSem.length; j++) {
    if (j>= 1 && j<4) {
        console.log("début de la semaine");
        continue;
    }

    console.log(jourSem[j]);
    if (j=== 4){
        break
    }
}


/*
BOUCLE FOR ... IN / pour ... dans
*/

let contact = {
    nom: "Richard",
    prenom: "Pierre",
    tel:"0760018238",
    email:"john@doe.fr"
}

for (let key in contact) {
    console.log(key);
    console.log(contact[key]);
    console.log(key + " : "+contact[key]);
}


/* boucle imbriquée
*/

for (let a = 1; a<5; a++) {
    console.log("a = " + a);
    for (b=1; b<5; b++){
        console.log("b = "+ b);
    }
}