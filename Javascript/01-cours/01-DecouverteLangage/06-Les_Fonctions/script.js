/*
    Création de fontions
*/



//Les fontions natives
/*       - alert ("hello world")
        - console.log(var)
        prompt()
*/

// la fontction permet de repeter une action dans le code plus facilement

// Création de la fonction
function hello() {
    console.log("Hellow !");
}

// Appel de la fonction
hello()


// Création d'une fonction avec paramètres et sans retour
function helloParams(firstname="User", lastname="example") {
    console.log(`Hello ${firstname} ${lastname}`);
}

// Appel
helloParams(`Orlane`,`Coulon`);
helloParams(`Steve`);
helloParams(`Moumou`);
helloParams(`Ina`);


// Création d'une fonction avec retour
function helloReturn(firstname="user") {
    let chaine = `Hello ${firstname}`

    return chaine
    //return peut stocker le resultat dans une variable
}

// Stocker une fonction dans une variable
let maChaine = helloReturn("toto")
console.log(maChaine);


// En mode dynamique
let firstname = prompt("Veuillez saisir votre prénom :")
let display = helloReturn(firstname)
console.log(display);
