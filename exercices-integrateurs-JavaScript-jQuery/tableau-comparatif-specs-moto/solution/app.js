// 1. Modélisez les 4 motos à l'aide de la structure clé-valeur appropriée. Voici les données pour chacune des motos 
var motoA = {
	annee: 2018,
    modele: "CBR 1000RR SP",
    image: "images/CBR1000RRSP.png",
    comparee: false
};
    
var motoB = {
	annee: 2018,
    modele: "CBR 1000RR",
    image: "images/CBR1000RR.png",
    comparee: false
};

var motoC = {
    annee: 2017,
    modele: "CBR 600RR",
    image: "images/CBR600RR.png",
    comparee: false
};

var motoD = {
	annee: 2018,
    modele: "CBR 650F",
    image: "images/CBR650F.png",
    comparee: false
};

// 2. Regroupez les 4 motos sous une structure appropriée, et assignez cette structure à une nouvelle variable que vous nommerez 'motos'.
var motos = [
	motoA, motoB, motoC, motoD
];

// 3. Mettez en place un gestionnaire d'événements pour observer le click des boutons de comparaison.
$(".btn-ajout-comparaison").on("click", function() {

	// 4. Videz la section (liste) affichant les motos comparées, afin d'avoir une liste vide à laquelle vous ajouterez les motos appropriées plus tard.
	$("#section-motos-comparees").html("");

	// 5. Récupérez l'index de la moto, à partir de l'attribut data approprié de l'élément cliqué.
	var indexMoto = $(this).data("index-moto");

	// 6. Mettez en place une condition permettant de tester si la moto cliquée est présentement dans un état "comparé" (valeur de true pour la clé/propriété "comparee" de la moto appropriée).
	// On pourrait écrire aussi : if (motos[indexMoto]["comparee"] == true)
	if (motos[indexMoto]["comparee"]) {
		// 7. Changez l'état pour un état "non comparé" dans le tableau d'objets, en donnant une valeur de false à la propriété "comparee" de la moto appropriée.
		motos[indexMoto]["comparee"] = false;
		
		// 8. Affichez la bannière informant l'utilisateur du succès de l'opération
		$("#banniere-moto-enlevee").show().delay(2000).fadeOut(1000);
		
		// 9. Modifiez le contenu HTML du bouton venant d'être cliqué, afin d'afficher "Comparer"
		$(this).html("Comparer");

	} else {
		// 10. Changez l'état pour un état "comparé" dans le tableau d'objets, en donnant une valeur de true à la propriété "comparee" de la moto appropriée.
		motos[indexMoto]["comparee"] = true;

		// 11. Affichez la bannière informant l'utilisateur du succès de l'opération
		$("#banniere-moto-ajoutee").show().delay(2000).fadeOut(1000);

		// 12. Modifiez le contenu HTML du bouton venant d'être cliqué, afin d'afficher "Enlever"
		$(this).html("Enlever");

	}

	// 13. Création de la liste des motos comparées
	for (var i = 0; i < motos.length; i = i + 1) {
		// On pourrait écrire aussi : if (motos[i]["comparee"] == true)
		if (motos[i]["comparee"]) {
			var contenu = '<li class="list-group-item">';
			contenu = contenu + motos[i]["modele"];
			contenu = contenu + "</li>";
			
			$("#section-motos-comparees").append(contenu);
		}
	}

});












    