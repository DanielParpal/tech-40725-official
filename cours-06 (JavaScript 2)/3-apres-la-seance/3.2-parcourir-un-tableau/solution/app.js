// 1a. Assignez, à une nouvelle variable nommée suggestions, 4 titres de produits pouvant représenter des suggestions d'achat pour un client donné de votre application de commerce électronique.
// Idée 1 : définir d’un tableau
var suggestions = [
	"t-shirt",
	"chemise",
	"jeans",
	"casquette"
];

// 1b. En utilisant la technique des 6 étapes présentée en classe, écrivez une boucle permettant de parcourir le tableau des suggestions et de les afficher dans la console.
// Idée 2 : accéder à un élément (ex. 'jeans')
console.log("L'élément à l'index 2 est:", suggestions[2]);

// Idée 3 : déterminer la quantité d’éléments du tableau (ici: 4)
console.log("Quantité d'éléments:", suggestions.length);

// Idée 4 : Utiliser la boucle for dans son expression la plus simple
// Idée 6 : Rendre la condition de sortie dynamique
for (var i = 0; i < suggestions.length; i = i + 1) {
	// Idée 5 : Rendre l’index dynamique
    console.log(suggestions[i]);
}

console.log("=====Séparateur=====");

// 2a. Assignez, à une nouvelle variable nommée succursales, le nom de 3 succursales différentes pour une compagnie où vous allez souvent magasiner (ex. Pour Costco, on pourrait utiliser : Montréal - rue Bridge, Marché Central, et Brossard - Boulevard Taschereau)
var succursales = [
	"Montréal - rue Bridge",
	"Marché Central",
	"Brossard - Boulevard Taschereau"
];

// 2b. Écrivez une boucle permettant de parcourir le tableau des succursales et de les afficher dans la console. Essayez d'y arriver sans regarder les notes de cours ni votre solution au point 1b.
for (var i = 0; i < succursales.length; i = i + 1) {
	console.log(succursales[i]);
}



