//* LE SWITCH CASE 

let age = 3;
let result = "";

switch(true) {
    case age <= 6 :
        result = "Votre enfant est dans la catégorie 'Baby'"
        break;
    case age <= 8:
        result = "categorie poussin"
        break;
    case age <= 10 :
        result = "categorie cadet"
        break;
    default:
        result = "impossible"
        break
}

//* permet d'écrire plus de conditions plus vite
// utiliser if/else si 2,3 conditions