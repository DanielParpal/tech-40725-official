<?php 

/* 
Pour cet exercice intégrateur, ce fichier vous est fourni pour vous aider à :
- Comprendre la modélisation de données avec un "tableau de tableaux associatifs"
- Développer votre algorithme de génération de contenu sans avoir recours à la base de données
- Enlever l'impression de "magie" au moment de l'utilisation de la requête de sélection

Toutefois, dans un problème d'examen, vous n'aurez sûrement pas une modélisation de données "manuelle" (en PHP) effectuée pour vous, alors vous devez déjà être confortable avec ce que la requête de sélection vous retournera (le tableau de tableaux associatifs).
*/
$recette_a = [
	"titre" => "ÉCORCES MAGIQUES AU CHOCOLAT, AUX ÉPICES ET AUX CANNEBERGES BIO",
	"description" => "Écorces « magiques »? Oui, oui! La magie s’opère dès que les canneberges fraîches entrent en contact avec le chocolat!",
	"image" => "images/gateau-canneberges.png",
	"url" => "https://www.chocolatsfavoris.com/recettes/ecorces-magiques-au-chocolat-aux-epices-et-aux-canneberges-bio"
];

$recette_b = [
	"titre" => "GÂTEAU ÉCLATÉ",
	"description" => "Le seul, l'unique... Le gâteaux Éclaté maison!",
	"image" => "images/gateau-eclate.png",
	"url" => "https://www.chocolatsfavoris.com/recettes/gateau-eclate"
];

// Définition du "tableau de tableaux associatifs"
$recettes = [
	$recette_a, $recette_b
];

?>

