// const number = 0;

// for (let i = 22; i >= number; i++) {
//   if (i >= 29) {
//     break;
//   } else if (i === 23) {
//     console.log(i);
//   } else {
//     alert(i);
//   }
// }

// let number = 21;

// while (number < 28) {
//   number += +1;
//   if (number === 23) {
//     console.log(number);
//   } else alert(number);
// }

// Je déclare une variable ingredients dans laquelle je stocke mes ingrédients dans un tableau.
let ingredients = [
  " pâtes",
  " oeuf",
  " sel",
  " poivre",
  " lardon",
  " oignon",
  " parmesan",
];

// Je trie les éléments de mon  tableau selon les valeurs de l'encodage UTF-16.
ingredients = ingredients.sort();

// J'affiche le nombre d'ingrédients en utilisant la méthode .length pour savoir la longueur de mon tableau. Puis j'affiche le résultat dans la balise dont la class est .ingr.
document.querySelector(
  ".ingr"
).innerHTML += `Il nous faut ${ingredients.length} ingrédients pour la véritable recette de la Carbonara. Voici ce quil nous faut :`;

// J'intègre chaque élément de mon tableau (ingrédient) dans une balise <li> pour pouvoir créer une liste ordonnée.
ingredients.forEach((ingredient) => {
  return (document.querySelector(
    ".list"
  ).innerHTML += `<li>${ingredient}</li>`);
});
