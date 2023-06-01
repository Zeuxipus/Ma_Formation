const resultat = document.querySelector('.result');
/*
    Les UserInput
*/



let nom,
    prenom;
//déclaration fléchée des variables
Valider = () =>{
    nom = document.querySelector('#nom').value //on récup la val de nom
    prenom = document.querySelector('#prenom').value
    Afficher();
}
// si on veut on peut faire appel à une fonction dans une autre fonction
Afficher = () =>{
    resultat.innerHTML = `<h3> Vous avez saisi ${nom} ${prenom}</h3>`
}








//resultat.innerHTML= affichage;