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
	'https://www.chocolatsfavoris.com/recettes/cornets-de-riz-souffle-au-chocolat',
	'https://www.chocolatsfavoris.com/recettes/cookies-and-cream-cupcakes'
];

console.log(descriptions);
console.log(urls);
console.log('-----');

// Boucle permettant de parcourir le tableau
for (var i = 0; i < recettes.length; i = i + 1) {
	// Affichage d'une phrase dans la console
	console.log("Ce soir, je mangerai : ", recettes[i]);
	console.log("La description est: ", descriptions[i]);
	console.log("Pour plus d'informations, visitez le :", urls[i]);
	console.log('---');
}


