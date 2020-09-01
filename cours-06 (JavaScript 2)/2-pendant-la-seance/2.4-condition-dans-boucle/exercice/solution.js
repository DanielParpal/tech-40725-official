// Modélisation du tableau des recettes de Chocolats Favoris
var recettes = [
	'LE TEMPS DES FRAISES',
	'CORNETS DE RIZ SOUFFLÉ AU CHOCOLAT',
	'CUPCAKES BISCUITS ET CRÈME'
];

// Modélisation du tableau de la description des recettes
var descriptions = [
	'Célébrez le temps des fraises à la façon Chocolats Favoris avec cette délicieuse tarte choco-fraise!',
	'Reproduisez nos fameux cornets Éclatés à la maison... À votre façon!',
	'Cupcakes au chocolat biscuit et crème... Quoi demander de plus?'
];

var urls = [
	'https://www.chocolatsfavoris.com/recettes/strawberry-fields',
	'',
	'https://www.chocolatsfavoris.com/recettes/cookies-and-cream-cupcakes'
];

console.log(descriptions);
console.log(urls);
console.log('-----');

// Boucle permettant de parcourir le tableau
for (var i = 0; i < recettes.length; i = i + 1) {
	// Affichage d'une phrase dans la console
	// si le lien est brisé
	if (urls[i] == "") {
		console.log("Le lien est brisé, et la recette", recettes[i], "ne s'affichera pas");
	} else {
		console.log(urls[i]);
	}
}


