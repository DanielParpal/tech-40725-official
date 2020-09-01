// Définissons le tableau des titres de produits
var titres = [
	'Manteau en laine polaire Abisko Trail de Fjallraven - Femmes',
	'Chandail molletonné Cozy Up de Prana - Femmes',
	'Couche intermédiaire Rockwall de MEC - Femmes',
	'Chandail Better Sweater de Patagonia - Femmes'
];

var prix = [
	134.96,
	84.95,
	99.95,
	169.00
];

var evaluations = [
	0,
	3.5,
	5,
	4.5
];

console.log(prix);
console.log(evaluations);
console.log('-----');


// Mettons en place une boucle pour afficher tous les titres
for (var i = 0; i < titres.length; i = i+1) {
	console.log("Le produit " + i + " est : ", titres[i]);
	console.log("Le prix associé est:", prix[i]);
	console.log("Son évaluation est:", evaluations[i]);
	console.log("---");
}

