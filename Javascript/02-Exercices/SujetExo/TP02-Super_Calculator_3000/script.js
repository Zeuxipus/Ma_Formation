/**
 * EXERCICEXX - Les Variables et Opérateurs Arithmétiques - Les variables type chaîne de caractères
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const resultat = document.querySelector('#app');
const touches = [...document.querySelectorAll('.bouton')]
const listeKeycode = touches.map(touche => touche.dataset.key)
const ecran = document.querySelector('.ecran')
const ecran1 = document.querySelector('.ecran1')

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)    
})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur))
        switch (valeur) {
            case '8':
                ecran.textContent = '';
                ecran1.textContent = '';
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul

                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
                ecran1.textContent += touche.innerHTML;
        }
}

window.addEventListener('error', (e) => {
    alert(`Une erreur est survenue dans votre calcul : ${e.message}`)
})

//resultat.innerHTML =;
