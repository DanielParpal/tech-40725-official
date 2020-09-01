// Modélisation du chandail A grâce à une structure de données clé-valeur
// On nomme cette structure un 'objet' en JavaScript
var chandailA = {
	nom: 'Couche intermédiaire Rockwall de MEC - Femmes',
	prix: 99.95,
	evaluation: 5
};

// Modélisation du chandail B grâce à une structure de données clé-valeur (objet en JS)
var chandailB = {
	nom: 'Chandail à glissière courte Better Sweater de Patagonia - Femmes',
	prix: 125,
	evaluation: 5
};

var chandailC = {
	nom: 'Chandail Better Sweater de Patagonia - Femmes',
	prix: 169,
	evaluation: 4.5
};

var chandailD = {
	nom: 'Chandail à glissière Teslin de MEC - Femmes',
	prix: 50.38,
	evaluation: 3
};

// var chandails = [
// 	{
// 		nom: 'Couche intermédiaire Rockwall de MEC - Femmes',
// 		prix: 99.95,
// 		evaluation: 5
// 	},
// 	{
// 		nom: 'Chandail à glissière courte Better Sweater de Patagonia - Femmes',
// 		prix: 125,
// 		evaluation: 5
// 	},
// 	// ...
// ];

var chandails = [
	chandailA,
	chandailB,
	chandailC,
	chandailD
];

// console.log(chandails);

// console.log(chandails[1]);
// console.log(chandails[3]);

// console.log(chandails[1]['nom']);

for (var i = 0; i < chandails.length; i = i + 1) {
	if (chandails[i]['prix'] >= 100) {
		console.log(chandails[i]['nom']);	
	}
}




