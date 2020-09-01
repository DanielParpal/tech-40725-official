// $("p").html("Bonjour");

// $("p").click(function(){
//   console.log("Vous venez de cliquer un paragraphe");
// });


// $("div").click(function(){
//   console.log("Vous venez de cliquer une division");
//   $("p").html("oops!");
// });

// combiner avec un gestionnaire d'événement
$("#premier-paragraphe").click(function() {
	var mon_identifiant = $("#premier-paragraphe").data("identifiant");	
	console.log(mon_identifiant);
});


$("p").click(function() {
	$(this).html("test");
});
