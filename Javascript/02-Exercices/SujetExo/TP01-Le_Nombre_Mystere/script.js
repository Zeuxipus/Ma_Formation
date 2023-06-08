/**
 * TP01 - Deviner un nombre
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('.result');

let nombre = 0;


// Fonction pour générer un nombre aléatoire entre min et max (inclus)
function genererNombreAleatoire() {
    return Math.floor(Math.random() * 50);
  }
  
  // Fonction appelée lorsque l'utilisateur soumet sa tentative
  function Valider() {
    let nombre = Number(parseInt(document.getElementById('nombrepropose')));
    let numMystere = parseInt(document.getElementById('numMystere'));

  
    if (nombre === numMystere) {
        Afficher(`Le nombre ${nombre} est le nombre mystère !`)
      document.getElementById('rejouer').style.display = 'inline'; // Afficher le bouton Rejouer
    } else if (nombre < numMystere) {
        Afficher(`Désolé, le nombre mystère est plus petit que le ${nombre}`);
    } else {
        Afficher(`Désolé, le nombre mystère est plus grand que le ${nombre}`);
    }
}
  
  // Fonction appelée lorsque l'utilisateur clique sur le bouton Rejouer
  function rejouer() {
    var numMystere = genererNombreAleatoire();
  }
  
  // Initialisation du nombre mystère au chargement de la page
  window.onload = function() {
    var numMystere = genererNombreAleatoire();
    document.getElementById('nombrepropose');
  }


//Affichage des résultats
Afficher = (message) => {
    ResultaTentative = document.getElementById("resultat");
    ResultaTentative = document.getElementById("attempt");
    ResultaTentative.textContent = message

}
