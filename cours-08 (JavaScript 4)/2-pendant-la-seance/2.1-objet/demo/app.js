// Modélisation du chandail A grâce à une structure de données clé-valeur
// On nomme cette structure un 'objet' en JavaScript
var chandailA = {
	nom: 'Couche intermédiaire Rockwall de MEC - Femmes',
	prix: 99.95,
	evaluation: 5
};

console.log(chandailA);

// Affichage du nom du chandail A dans la console
console.log(chandailA['nom']);
console.log(chandailA.nom);

// Affichage du prix du chandail A dans la console
console.log(chandailA['prix']);
console.log(chandailA.prix);

// Modification de la valeur d'une des propriétés (clés) de l'objet
chandailA['evaluation'] = 4.8;
console.log(chandailA['evaluation']);

// Modélisation du chandail B grâce à une structure de données clé-valeur (objet en JS)
var chandailB = {
	nom: 'Chandail à glissière courte Better Sweater de Patagonia - Femmes',
	prix: 125,
	evaluation: 5
};
console.log(chandailB);
