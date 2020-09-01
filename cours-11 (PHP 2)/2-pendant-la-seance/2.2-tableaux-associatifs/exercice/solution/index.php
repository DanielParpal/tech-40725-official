<?php

// 1. Définissez le tableau associatif permettant de modéliser la recette A.
$recetteA = [
	'titre' => 'ÉCORCES MAGIQUES AU CHOCOLAT, AUX ÉPICES ET AUX CANNEBERGES BIO',
	'description' => 'Écorces « magiques »? Oui, oui! La magie s’opère dès que les canneberges fraîches entrent en contact avec le chocolat!',
	'image' => 'images/gateau-canneberges.png',
	'url' => 'https://www.chocolatsfavoris.com/recettes/ecorces-magiques-au-chocolat-aux-epices-et-aux-canneberges-bio'
];

// var_dump($recetteA);

// 2. Définissez le tableau associatif permettant de modéliser la recette B.
// - titre : GÂTEAU ÉCLATÉ
// - description : Le seul, l'unique... Le gâteaux Éclaté maison!
// - image : images/gateau-eclate.png
// - url : https://www.chocolatsfavoris.com/recettes/gateau-eclate

$recetteB = [
	'titre' => 'GÂTEAU ÉCLATÉ',
	'description' => 'Le seul, l\'unique... Le gâteaux Éclaté maison!',
	'image' => 'images/gateau-eclate.png',
	'url' => 'https://www.chocolatsfavoris.com/recettes/gateau-eclate'
];

// var_dump($recetteB);

// 3. Effectuez l'inclusion du fichier d'affichage ('app.html.php'), et prenez le temps de vous familiariser avec la carte Bootstrap déjà en place.
include 'app.html.php';



?>






