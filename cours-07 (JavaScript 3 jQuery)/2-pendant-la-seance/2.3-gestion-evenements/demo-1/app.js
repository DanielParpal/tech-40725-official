
// On attache un gestionnaire d'événement sur le champ (input) pour observer la saisie touche ('keyup')
// On utilise une sélection par id, car c'est la meilleure option ici
// Nous utiliserons l'action (méthode) .on pour mettre en place ce gestionnaire
$('#inputPrix').on('keyup', function() {
	// On définit les actions à prendre lorsque l'événement est déclenché
	var prixCourant = $('#inputPrix').val();
	console.log('Le prix est:', prixCourant);

	if (prixCourant > 50) {
		console.log('Le prix courant est supérieur à 50.');
		$('#alerte-sans-rabais-20').hide();
		$('#alerte-avec-rabais-20').show();
	} else {
		console.log("Le prix courant n'est pas supérieur à 50.");
		$('#alerte-avec-rabais-20').hide();
		$('#alerte-sans-rabais-20').show();
	}

});


// D'autres actions...
