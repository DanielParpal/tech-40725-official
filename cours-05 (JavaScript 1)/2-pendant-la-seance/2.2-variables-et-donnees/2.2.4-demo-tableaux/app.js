// Définition de mon tableau
var listeProduits = [
	"t-shirt", // 0
	"jeans", // 1
	"casquette", // 2
	"manteau" // 3
];

console.log(listeProduits[2]);

listeProduits[1] = "pantalons";

console.log(listeProduits);

listeProduits.push("veston");

console.log(listeProduits);

console.log(listeProduits.length);

var monProduitATester = "t-shirt";
var estInclus = listeProduits.includes(monProduitATester);
console.log(estInclus);
