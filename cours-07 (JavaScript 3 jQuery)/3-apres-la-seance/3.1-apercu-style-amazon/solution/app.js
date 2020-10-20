// 3.1 Lorsque vous passez votre souris par dessus une division avec une "class" de "book-display", vous affichez le bouton "Quick look" correspondant. 
$('.book-display').on('mouseenter', function() {

	// Actions
	var idBtn = $(this).data('id-btn');
	$('#btn-quick-look-' + idBtn).show();

});

// 3.2 Lorsque la souris sort d'une des division avec une "class" de "book-display", le bouton "Quick look" correspondant est masqué
$('.book-display').on('mouseleave', function() {

	// Actions
	var idBtn = $(this).data('id-btn');
	$('#btn-quick-look-' + idBtn).hide();

});

// 3.3 Lorsque l'utilisateur clique sur un des boutons "Quick look", vous affichez dans la console "Le bouton permet d'ouvrir la fenêtre modale : {fenetreModale}", où {fenetreModale} est dynamiquement lu à partir de l'attribut data-modal-window du bouton cliqué. Cela remplace l'affichage réel de la fenêtre modale.
$('.btn-quick-look').on("click", function() {

	// on devra faire un console.log()
	var fenetreModale = $(this).data('modal-window');
	console.log("Le bouton permet d'ouvrir la fenêtre modale : " + fenetreModale);

});









