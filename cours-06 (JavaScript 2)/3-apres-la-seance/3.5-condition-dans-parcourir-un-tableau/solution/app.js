// 1. Mettez en place un tableau nommé evaluations_produits, et donnez-lui les valeurs initiales suivantes : 5, 3, 4, 4, 3, 5, 2, 4, 3, 1, 2
var evaluations_produits = [
	5, 3, 4, 4, 3, 5, 2, 4, 3, 1, 2
];

// 2. Parcourez le tableau evaluations_produits, et pour chacune des évaluations...
for (var i = 0; i < evaluations_produits.length; i = i + 1) {
	// console.log("Pour l'élément en position", i, "évaluation de:", evaluations_produits[i]);

	if (evaluations_produits[i] >= 4) {
		// Si elle est supérieure ou égale à 4, écrivez dans la console : Produit recommandé!
		console.log("Produit recommandé, évaluation de", evaluations_produits[i], "/5");
	} else {
		// Sinon, écrivez dans la console : Produit à éviter. Évaluation de n/5.
		console.log("Produit à éviter, évaluation de", evaluations_produits[i], "/5");
	}
}

console.log("=====Séparateur=====");
for (var evaluation of evaluations_produits) {
	
	if (evaluation >= 4) {
		// Si elle est supérieure ou égale à 4, écrivez dans la console : Produit recommandé!
		console.log("Produit recommandé, évaluation de", evaluation, "/5");
	} else {
		console.log("Produit à éviter, évaluation de", evaluation, "/5")
	}

}



