// Chaîne de caractères représentant le pays d'expédition
var paysExpedition = "FRA";

// Tableau représentant les pays pour lesquels la livraison est incluse
var paysLivraisonIncluse = [
    "CAN",
    "MEX",
    "USA"
];

// Nombre représentant le tarif pour une livraison vers un pays où la livraison n'est pas incluse
var tarifLivraisonNonIncluse = 25;

// Affichage dans la console des trois variables
console.log("Le pays d'expédition est " + paysExpedition);
console.log("Les pays pour lesquels la livraison est incluse sont " + paysLivraisonIncluse.toString());
console.log("Le tarif pour une livraison dans un pays ne figurant pas dans la liste d'inclusion est " + tarifLivraisonNonIncluse + "$");

// Solution 2.3
var prixArticle = 50;

if (paysLivraisonIncluse.includes(paysExpedition)) {
	console.log('Le pays est inclus');
} else {
	console.log("Le pays n'est pas inclus");
	prixArticle = prixArticle + tarifLivraisonNonIncluse;
}

console.log('Le prix final est', prixArticle);

