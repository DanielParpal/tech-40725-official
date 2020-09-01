// 1a. Assignez, à une nouvelle variable nommée distance, la distance entre votre domicile et la succursale de Ben & Jerry's la plus proche.
// https://www.google.com/maps/search/ben+%26+jerry's/
var distance = 6;

// 1b. Mettez en place une condition permettant de déterminer si cette succursale est à moins de 10km
if (distance < 10) {
	// 1c. Si c'est le cas, écrivez dans la console "Ce soir, j'irai manger The Tonight Dough"
	console.log("Ce soir, j'irai manger The Tonight Dough");
} else {
	// 1d. Sinon, écrivez dans la console "Ce soir, je devrai manger de la Haagen Dazz à la place"
	console.log("Ce soir, je devrai manger de la Haagen Dazz à la place");
}


// 2a. Assignez, à une nouvelle variable nommée options, les valeurs suivantes : "bleu", "vert", "noir", "rose"
var options = [
	"bleu",
	"vert",
	"noir",
	"rose"
];

// 2b. Affichez dans la console le contenu de la variable options
console.log(options);

// 2c. Assignez à une nouvelle variable nommée couleur votre couleur préférée
var couleur = "rose";
console.log("Votre couleur est:", couleur);

// 2d. Mettez en place une condition permettant de tester si votre couleur préférée fait partie des options de couleur
if (options.includes(couleur)) {
	// Si c'est le cas : affichez dans la console "Votre couleur fait partie des options!"
	console.log("Votre couleur fait partie des options!");
} else {
	// Sinon : affichez dans la console "Votre couleur ne fait malheureusement pas partie des options."
	console.log("Votre couleur ne fait malheureusement pas partie des options.");
}

// 2e. Modifiez temporairement votre couleur préférée pour vous assurer que votre condition fonctionne correctement.
// on doit changer la valeur en 2c temporairement









