// 1. Modélisation des données
var tailles = [4, 5, 6, 7, 8, 9, 10, 11, 12];

var botteA = {
	marque: 'UGG',
	nom: 'Classic mini platform',
	imageSrc: 'images/ugg-classic-mini-platform.jpeg',
	imageAlt: 'Ugg classic mini platform',
	taillesDispo: [5, 8]
};

var botteB = {
	marque: 'UGG',
	nom: 'NEUMEL PLATFORM Women',
	imageSrc: 'images/ugg-neumel-platform.jpeg',
	imageAlt: 'Ugg neumel platform',
	taillesDispo: [4, 5, 6, 8, 10]
};

var botteC = {
	marque: 'UGG',
	nom: 'CLASSIC MINI II Women',
	imageSrc: 'images/ugg-classic-mini-ii.jpeg',
	imageAlt: 'Ugg classic mini ii',
	taillesDispo: [7, 8, 9, 10, 12]
};

var botteD = {
	marque: 'UGG',
	nom: 'CLASSIC ULTRA MINI Women',
	imageSrc: 'images/ugg-classic-ultra-mini.jpeg',
	imageAlt: 'Ugg classic ultra mini',
	taillesDispo: [6, 9]
};

var botteE = {
	marque: 'UGG',
	nom: 'Ma belle botte E',
	imageSrc: 'images/ugg-classic-ultra-mini.jpeg',
	imageAlt: 'Ma belle botte E',
	taillesDispo: [7]
};

var bottes = [
botteA, botteB, botteC, botteD,
];


// 2. L'état initial de la page (HTML + CSS) doit être généré dynamiquement, en utilisant les données (JavaScript)

// On génère les boutons de taille dynamiquement
for (var i = 0; i < tailles.length; i = i + 1) {
	$('#boutonsFiltreTaille').append('<button type="button" data-taille="' + tailles[i] + '" class="btn btn-outline-dark btn-taille mr-2">' + tailles[i] + '</button>');
}

// On génère les cartes des bottes dynamiquement
for (var i = 0; i < bottes.length; i = i + 1) {
	var elementsHTML = '<div class="col-3">';
	elementsHTML = elementsHTML + '<div class="card" style="width: 100%;">';
	elementsHTML = elementsHTML + '<img src="' + bottes[i]["imageSrc"] + '" class="card-img-top" alt="' + bottes[i]["imageAlt"] + '" />';
	elementsHTML = elementsHTML + '<div class="card-body">';
	elementsHTML = elementsHTML + '<h5 class="card-title">' + bottes[i]["marque"] + '</h5>';
	elementsHTML = elementsHTML + '<p class="card-text">' + bottes[i]["nom"] + '</p>';
	elementsHTML = elementsHTML + '<a href="#" class="btn btn-dark">Ajouter</a>';
	elementsHTML = elementsHTML + '</div></div></div>';

	$("#produits").append(elementsHTML);
}


// Votre code viendra ci-dessous
// 3. Les algorithmes donnant l’interactivité à la page doivent être dynamiques - en d'autres mots, ils doivent utiliser les données modélisées en 1.

var tailleSelectionnee = -1;

// Mise en place d'un gestionnaire d'événements qui 
// observe le click sur les btn-taille
$(".btn-taille").on('click', function() {

	// On récupère la valeur de l'attribut data-taille
	// du bouton venant d'être cliqué
	tailleSelectionnee = $(this).data("taille");
	console.log(tailleSelectionnee);


	// On restaure la classe btn-outline-dark pour tous
	// les boutons de taille
	$('.btn-taille').removeClass("btn-dark");
	$('.btn-taille').addClass("btn-outline-dark");

	// On donne la classe btn-dark au bouton de taille
	// venant d'être cliqué
	$(this).removeClass("btn-outline-dark");
	$(this).addClass("btn-dark");


	// On vide la division contenant toutes les bottes
	$("#produits").html("");

	// On parcourt le tableau d'objets des bottes et on
	// filtre les bottes pour lesquelles la taille est dispo
	for (var i = 0; i < bottes.length; i = i + 1) {
		var taillesDisponibles = bottes[i]["taillesDispo"];
		// On écrit la condition du filtre
		if (taillesDisponibles.includes(tailleSelectionnee)) {
			// On ajoute la carte associée à la botte
			var elementsHTML = '<div class="col-3">';
			elementsHTML = elementsHTML + '<div class="card" style="width: 100%;">';
			elementsHTML = elementsHTML + '<img src="' + bottes[i]["imageSrc"] + '" class="card-img-top" alt="' + bottes[i]["imageAlt"] + '" />';
			elementsHTML = elementsHTML + '<div class="card-body">';
			elementsHTML = elementsHTML + '<h5 class="card-title">' + bottes[i]["marque"] + '</h5>';
			elementsHTML = elementsHTML + '<p class="card-text">' + bottes[i]["nom"] + '</p>';
			elementsHTML = elementsHTML + '<a href="#" class="btn btn-dark">Ajouter</a>';
			elementsHTML = elementsHTML + '</div></div></div>';

			$("#produits").append(elementsHTML);
		}
	}
});

// On observe un click sur le bouton test (qui pourrait
// être un bouton d'ajout au panier)
$('#btn-test').on('click', function() {
	if (tailleSelectionnee == -1) {
		console.log("Vous n'avez pas encore sélectionné une taille");
	} else {
		console.log("La taille sélectionnée est: " + tailleSelectionnee);
	}
});




