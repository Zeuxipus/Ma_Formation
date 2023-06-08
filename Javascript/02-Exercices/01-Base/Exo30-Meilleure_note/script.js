/**
 * EXERCICE26 - FOR - Meilleur Note / Moins bonne note
 */

// Création de la constante result permettant de recupérer l'élément HTML class="result"
const result = document.querySelector('.result');

// Déclaration des variables
let nbNotes = 5,
    noteMax = 0,
    noteMin = 20,
    moyNotes = 0,
    i=1,
    noteTmp=0,
    affichage = `<h2>Meilleur Note / Moins bonne note</h2><br><hr>`

affichage += `<p>Sur une serie de <b>${nbNotes}</b> notes :</p><ul>`

while (i <= nbNotes){
    noteTmp = Number(prompt(`Merci de saisir la note n°${i} (sur 20) :`))
    
    
    
    if(isNaN(noteTmp) || noteTmp < 0 || noteTmp > 20){
        noteTmp = prompt(`Erreur de saisie ! Merci de saisir la note n°${i} (sur 20) :`)
    }
    
    affichage += `<li>En note <b>${i}</b>, vous avez saisi <b>${noteTmp}</b></li>`
    
    moyNotes += noteTmp
    console.log(moyNotes);
    if(noteTmp > noteMax) {
        noteMax = noteTmp
    }
    
    if(noteTmp < noteMin) {
        noteMin = noteTmp
    }
    
    i++
}
moyNotes = Math.round((moyNotes/nbNotes)*10)/10

affichage += `<p>Sur l'ensemble des <b>${nbNotes}</b> notes : </p>
<ul>
    <li class="red">La moins bonne note est <b>${noteMin}</b></li>
    <li class="green">La meilleur note est <b>${noteMax}</b></li>
    <li class="gay">La moyenne des notes est <b>${moyNotes}</b></li>
</ul>`

// Injection du résultat dans l'element HTML .result
result.innerHTML = affichage;