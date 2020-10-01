// 3. Définissez la variable "paysExpedition"
var paysExpedition = 'HND';

// 4. Définissez la variable "paysLivraisonIncluse"
var paysLivraisonIncluse = [
	"COL",
	"GAB",
	"MDV"
];

// 5. Définissez une variable "tarifLivraisonNonIncluse"
var tarifLivraisonNonIncluse = 25;

// 6. Écrivez le contenu de chacune des variables dans la console, grâce à 3 commandes "console.log".
console.log("Le pays d'expédition est:", paysExpedition);
console.log("Les pays pour lesquels la livraison est incluse sont:", paysLivraisonIncluse);
console.log("Le tarif de livraison pour les autres pays est:", tarifLivraisonNonIncluse + "$");

// 7. Ajoutez un nouveau pays au tableau, avec l'action (méthode) .push()
// 7.1 Regardez le nouveau contenu de paysExpedition dans la console
paysLivraisonIncluse.push("TUR");
console.log(paysLivraisonIncluse);

