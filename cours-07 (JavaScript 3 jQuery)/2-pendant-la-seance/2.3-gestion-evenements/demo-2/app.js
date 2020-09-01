// Montrer comment récupérer la valeur d'un attribut data
var maValeurData = $('#premier-element').data('test'); // en fait, vous récupérez la valeur stockée dans data-test
// console.log(maValeurData);


// data-test-bidon-abc => .data('test-bidon-abc')


// Maintenant, parlons de $(this)
$('.btn').on('click', function() {

	$(this).html('boom!');
	var dataTest = $(this).data('test');
	console.log(dataTest);

});
