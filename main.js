
// Déclaration et affectation de variables

let prenom = "AbdelMouhaimine";
console.log(prenom);

// Manipulation de variables numériques

let a=10,b=5;
console.log("La Somme de a et b est : ", a + b);
console.log("La Différance de a et b est : ", a - b);
console.log("Le Produit de a et b est : ", a * b);
console.log("La quotient de a et b est : ", a / b);

// Concaténation de chaînes de caractères

let nom = "Eljassimi";
let nomComplet = prenom + ' ' + nom;
console.log(nomComplet);

// Utilisation des variables booléennes

let age = 24;
let majeur;

if(age>= 18){
    majeur="true"
}else{
    majeur="false";
}
console.log("Majeur est : ",majeur);


// Échange de valeurs entre deux variables

let x = 5;
let y = 10;

console.log("Avant l'echange :");
console.log("x =", x);
console.log("y =", y);

[x, y] = [y, x];

console.log("Apres l'echange :");
console.log("x =", x);
console.log("y =", y);

//  Calcul de la circonférence d'un cercle

let rayon = 5;
let c = rayon * 2 * Math.PI;
console.log("la circonférence est : ",c);

// Conversion de température

let celsius = 5;
let f = celsius * 9/5 + 32;
console.log("Conversion de température est :", f);

// Calcul de l'âge

let anneeNAissance=2000;
let anneeActuelle=2024;

console.log("L'age est : ",anneeActuelle-anneeNAissance);


// Calcul du périmètre d'un rectangle

let longeur=10,largeur=10;
let P = 2*(longeur+largeur);
console.log("Périmètre d'un rectangle est :",P);

// Moyenne de trois nombres

let note1= 16,note2=19,note3=12;
let moyenne = (note1+note2+note3)/3;
console.log("La Moyenne est :",moyenne);
