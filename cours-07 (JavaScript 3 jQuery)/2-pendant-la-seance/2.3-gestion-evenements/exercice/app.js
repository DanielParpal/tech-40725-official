// 3. Ajouter un gestionnaire d'événement (copier-coller le bloc de code)
// 3.1 La sélection sera faite sur tous les éléments avec une "class" de "btn-achat"
// 3.2 L'événement sera un clic de souris ('click')

$('.btn-achat').on('click', function () {
	// 3.3 Les actions à prendre :
	// - On récupère la valeur de l'attribut data-tag-produit grâce à la méthode .data() et le sélecteur $(this)
	// - On affiche cette valeur dans la console
	var tagProduit = $(this).data('tag-produit');
	console.log(tagProduit);

});

