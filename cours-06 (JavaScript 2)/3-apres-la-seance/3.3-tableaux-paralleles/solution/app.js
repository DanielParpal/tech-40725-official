// 1a. Reprenez votre tableau des suggestions (vous pouvez le copier-coller dans un nouveau fichier pour conserver votre solution précédente intacte).
var suggestions = [
	"t-shirt",
	"chemise",
	"jeans",
	"casquette"
];

// 1b. Modélisez dans un tableau parallèle le prix correspondant à chacune des suggestions.
var prix = [
	20,
	40,
	50,
	30
];


// 1c. Affichez dans la console chacun des produits suggérés ainsi que son prix.
// Note : Utilisez la technique des tableaux parallèles présentée en cours.
for (var i = 0; i < suggestions.length; i = i + 1) {
	console.log("Le prix du produit", suggestions[i], "est", prix[i]);
}


console.log("=====Séparateur=====");


// 2a. Reprenez votre tableau des succursales (idem à 1a, vous pouvez le copier-coller).
var succursales = [
	"Montréal - rue Bridge",
	"Marché Central",
	"Brossard - Boulevard Taschereau"
];

// 2b. Modélisez dans un tableau parallèle la distance entre chacune des succursales et votre domicile. (ex. 1.25, 8,87 et 9.47)
var distances = [
	1.25,
	8.87,
	9.47
];

// 2c. Affichez dans la console chacune des succursales ainsi que la distance qui lui est associée.
for (var i = 0; i < succursales.length; i = i + 1) {
	console.log("La succursale", succursales[i], "est à une distance de:", distances[i]);
}






