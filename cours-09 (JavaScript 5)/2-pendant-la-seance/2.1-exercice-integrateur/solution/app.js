// 1. Modélisation des données
var tailles = [5, 6, 7, 8, 9, 10];

var botteA = {
	marque: 'UGG',
	nom: 'CLASSIC MINI PLATFORM Women',
	imageSrc: 'images/ugg-classic-mini-platform.jpeg',
	imageAlt: 'Ugg classic mini platform',
	taillesDispo: [5, 8]
};

var botteB = {
	marque: 'UGG',
	nom: 'NEUMEL PLATFORM Women',
	imageSrc: 'images/ugg-neumel-platform.jpeg',
	imageAlt: 'Ugg neumel platform',
	taillesDispo: [5, 6, 8, 10]
};

var botteC = {
	marque: 'UGG',
	nom: 'CLASSIC MINI II Women',
	imageSrc: 'images/ugg-classic-mini-ii.jpeg',
	imageAlt: 'Ugg classic mini ii',
	taillesDispo: [7, 8, 9, 10]
};

var botteD = {
	marque: 'UGG',
	nom: 'CLASSIC ULTRA MINI Women',
	imageSrc: 'images/ugg-classic-ultra-mini.jpeg',
	imageAlt: 'Ugg classic ultra mini',
	taillesDispo: [6, 9]
};

var bottes = [
botteA, botteB, botteC, botteD,
];

// 2. Génération dynamique de l'état initial
// On génère les boutons de filtre
for (var i = 0; i < tailles.length; i = i + 1) {
	var boutonHTML = '<button type="button" data-taille="' + tailles[i] + '" class="btn btn-outline-dark btn-filtre-taille mr-2">';
	boutonHTML = boutonHTML + tailles[i];
	boutonHTML = boutonHTML + '</button>';

	$('#boutonsFiltreTaille').append(boutonHTML)
}

// On génère les cartes Bootstrap (1 botte -> 1 carte)
for (var i = 0; i < bottes.length; i = i + 1) {
	var carteHTML = '<div class="col-3">';
	carteHTML = carteHTML + '<div class="card">';
	carteHTML = carteHTML + '<img ';
	carteHTML = carteHTML + 'src="' + bottes[i]['imageSrc'] + '"';
	carteHTML = carteHTML + 'class="card-img-top img-fluid"';
	carteHTML = carteHTML + 'alt="' + bottes[i]['imageAlt'] + '" />';
	carteHTML = carteHTML + '<div class="card-body">';
	carteHTML = carteHTML + '<h5 class="card-title">' + bottes[i]['marque'] + '</h5>';
	carteHTML = carteHTML + '<p class="card-text">' + bottes[i]['nom'] + '</p>';
	carteHTML = carteHTML + '<a href="#" class="btn btn-dark">Ajouter</a>';
	carteHTML = carteHTML + '</div>';
	carteHTML = carteHTML + '</div>';
	carteHTML = carteHTML + '</div>';

	$("#produits").append(carteHTML);	
}


// 3. Algorithmes dynamiques donnant l'interactivité des éléments

// Mise en place d'un gestionnaire d'événements observant
// le click sur les boutons de filtre par taille
$('.btn-filtre-taille').on('click', function() {
	// On récupère la valeur de la taille cliquée
	var nouvelleSelection = $(this).data("taille");
	console.log(nouvelleSelection);

	// On redonne l'apparence de base à tous les boutons de taille
	$('.btn-filtre-taille').removeClass('btn-dark');
	$('.btn-filtre-taille').addClass('btn-outline-dark');

	// On donne l'apparence de sélection au bouton cliqué
	// Note: cela pourrait aussi être accompli avec .toggleClass()
	// de manière plus concise, mais avec une plus grande abstraction
	$(this).removeClass('btn-outline-dark');
	$(this).addClass('btn-dark');	
	
	// On vide la division contenant toutes les cartes
	$("#produits").html("");

	// On affiche seulement les cartes désirées
	for (var i = 0; i < bottes.length; i = i + 1) {
		console.log(bottes[i]['taillesDispo']);

		if (bottes[i]['taillesDispo'].includes(nouvelleSelection)) {
			var carteHTML = '<div class="col-3">';
			carteHTML = carteHTML + '<div class="card">';
			carteHTML = carteHTML + '<img ';
			carteHTML = carteHTML + 'src="' + bottes[i]['imageSrc'] + '"';
			carteHTML = carteHTML + 'class="card-img-top img-fluid"';
			carteHTML = carteHTML + 'alt="' + bottes[i]['imageAlt'] + '" />';
			carteHTML = carteHTML + '<div class="card-body">';
			carteHTML = carteHTML + '<h5 class="card-title">' + bottes[i]['marque'] + '</h5>';
			carteHTML = carteHTML + '<p class="card-text">' + bottes[i]['nom'] + '</p>';
			carteHTML = carteHTML + '<a href="#" class="btn btn-dark">Ajouter</a>';
			carteHTML = carteHTML + '</div>';
			carteHTML = carteHTML + '</div>';
			carteHTML = carteHTML + '</div>';

			$("#produits").append(carteHTML);	
		}
	}
});