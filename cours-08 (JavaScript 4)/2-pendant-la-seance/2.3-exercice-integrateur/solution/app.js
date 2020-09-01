// 1. Mettez en place un tableau d'objets contenant les 4 gins. 
var ginA = {
	nom: "Absintherie des Cantons",
	pays: "can"
};

var ginB = {
	nom: "Arbikie Kirsty's Gin Highland Estate",
	pays: "gbr"
};

var ginC = {
	nom: "Be Origin Gin Exclusif",
	pays: "can"
};

var ginD = {
	nom: "City Gin",
	pays: "usa"
};

var gins = [
	ginA, ginB, ginC, ginD
];

// 2. Affichez le tableau d'objets dans la console, et le pays d'origine du gin à l'index 2 du tableau des gins ('can') -> cette étape est facultative, mais permet de valider que tout fonctionne bien, et d'avoir une bonne compréhension de la structure de données.
console.log(gins);
console.log(gins[2]["pays"]);

// Votre code viendra ci-dessous...
// On définit un gestionnaire d'événements pour observer les clics sur les items de liste
$('.filtre-pays').on('click', function() {
	
	// On remet tous les items de liste dans un état "initial" sans surlignement (sans 'active')
	$('.filtre-pays').removeClass('active');

	// On ajoute la classe 'active' à l'élément venant de déclencher l'événement 'click'
	$(this).addClass('active');

	// On vide la sélection des gins dans un premier temps, avant d'ensuite afficher seulement les gins du pays sélectionné
	$('.gin-media').hide();

	// On récupère le code pays de l'item de liste venant d'être cliqué
	var codePays = $(this).data('code-pays'); // récupérer la valeur dans l'attribut data-code-pays
	// console.log('.gin-' + codePays);

	$('.gin-' + codePays).show();

	var qteDeGins = 0;

	// Mettons en place un système de filtre (répétion + condition) afin de prendre une action spécifique sur certains items seulement (ici: ceux pour lesquels le code-pays correspond au code-pays récupéré)
	for (var i = 0; i < gins.length; i = i + 1) {
		if (gins[i]['pays'] == codePays) {
			console.log('Le gin', gins[i]['nom'], 'provient du pays', codePays);
			qteDeGins = qteDeGins + 1;
		}
	}

	// On affiche la quantité de gin(s) pour le pays venant d'être sélectionné
	console.log('Pour le pays', codePays, 'il y a' , qteDeGins, 'gin(s).');

});

