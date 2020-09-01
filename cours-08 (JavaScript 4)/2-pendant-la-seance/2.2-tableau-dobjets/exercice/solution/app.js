// Modélisez une recette sous la forme d'objet, et assignez-la à une nouvelle variable nommée recette_A.
// Note : vous aurez besoin des clés titre, description et url pour construire votre objet.
var recette_A = {
	titre: 'LE TEMPS DES FRAISES',
	description: 'Célébrez le temps des fraises à la façon Chocolats Favoris avec cette délicieuse tarte choco-fraise!',
	url: 'https://www.chocolatsfavoris.com/recettes/strawberry-fields'
};

// Modélisez une autre recette sous la forme d'objet, et assignez-là à une nouvelle variable nommée recette_B.
var recette_B = {
	titre: 'CORNETS DE RIZ SOUFFLÉ AU CHOCOLAT',
	description: 'Reproduisez nos fameux cornets Éclatés à la maison... À votre façon!',
	url: 'https://www.chocolatsfavoris.com/recettes/cornets-de-riz-souffle-au-chocolat'
}; 

// 2. Modélisez deux autres recettes sous la forme d'objets.
// Rappel : https://www.chocolatsfavoris.com/recettes
var recette_C = {
	titre: 'CUPCAKES BISCUITS ET CRÈME',
	description: 'Cupcakes au chocolat biscuit et crème... Quoi demander de plus?',
	url: 'https://www.chocolatsfavoris.com/recettes/cookies-and-cream-cupcakes'
};

var recette_D = {
	titre: "BARRES S'MORES",
	description: 'Une soirée autour du feu condensée en une délicieuse barre chocolatée. Littéralement!',
	url: 'https://www.chocolatsfavoris.com/recettes/barres-s-mores'
};

// 3. Regroupez vos 4 recettes dans un tableau, et assignez-le à une nouvelle variable nommée recettes.
var recettes = [
	recette_A,
	recette_B,
	recette_C,
	recette_D
];

// 4. Affichez votre tableau dans la console, et prenez le temps de l'inspecter.
console.log(recettes);


// 5. Affichez dans la console :
// - Le titre de la recette c
// - La description et l'url de la recette d
// - L'objet représentant la recette b (prenez le temps de l'inspecter dans la console)
// Note : vous devez utiliser votre tableau pour y arriver, et non pas les objets individuels créés précédemment.
console.log(recettes[2]['titre']);
console.log(recettes[3]['description'], recettes[3]['url']);
console.log(recettes[1]);

// 6. Parcourez votre tableau d'objets, et affichez tous les titres. Les sections 2.2 et 2.3 du cours 6 peuvent vous aider si jamais vous cherchez de l'inspiration.
for (var i = 0; i < recettes.length; i = i + 1) {
	console.log(recettes[i]['titre']);
} 




