// 1a. Reprenez vos tableaux parallèles de suggestions et prix de la portion 1 de 3.3-tableaux-paralleles.
var suggestions = [
	"t-shirt",
	"chemise",
	"jeans",
	"casquette"
];

var prix = [
	20,
	40,
	50,
	25
];


// 1b. Affichez dans la console toutes les suggestions pour lesquelles le prix est inférieur ou égal à 25$.
for (var i = 0; i < suggestions.length; i = i + 1) {
	if (prix[i] <= 25) {
		console.log("La suggestion", suggestions[i], "coûte 25$ ou moins.");	
	}
}


console.log("=====Séparateur=====");

// 2a. Reprenez vos tableaux parallèles de succursales et distances de la portion 2 de 3.3-tableaux-paralleles.
var succursales = [
	"Montréal - rue Bridge",
	"Marché Central",
	"Brossard - Boulevard Taschereau"
];

var distances = [
	1.25,
	8.87,
	9.47
];


// 2b. Pour toutes les succursales :
for (var i = 0; i < succursales.length; i = i + 1) {
	
	var distance = distances[i];

	if (distance < 5) {
		// 2c. Si la succursale est à moins de 5km, affichez dans la console : "La succursale X est à distance de marche (n km)."
		console.log("La succursale", succursales[i], "est à distance de marche,", distance, "km.");
	} else {
		// 2d. Sinon, affichez dans la console : "La succursale X n'est pas à distance de marche (n km)."
		console.log("La succursale", succursales[i], "n'est pas à distance de marche,", distance, "km.");
	}
}


