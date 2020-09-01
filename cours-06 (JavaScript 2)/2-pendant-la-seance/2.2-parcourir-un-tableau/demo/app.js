// Définition d'un tableau - un tableau nous permet de regrouper
// plusieurs éléments DE MÊME NATURE
// Voir séance #5 au besoin
var produits = [
	'Manteau en laine polaire Abisko Trail de Fjallraven - Femmes',
	'Chandail molletonné Cozy Up de Prana - Femmes',
	'Couche intermédiaire Rockwall de MEC - Femmes',
	'Chandail Better Sweater de Patagonia - Femmes'
];

// Affichage du tableau dans la console, ainsi que de l'élément à l'index 2
// Utilisation de la propriété .length sur un tableau
// Voir séance #5 au besoin
console.log(produits);
console.log(produits[2]);
console.log(produits.length);

console.log('-----');

// Parcourir un tableau (séance 6)
for (var i = 0; i < produits.length; i = i + 1) {
	console.log('i:', i, produits[i]);
}

