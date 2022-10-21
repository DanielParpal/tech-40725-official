<?php

// Connexion à la base de données
include 'db/connexion-MySQL.php';

// Insertion conditionnelle (à la soumission du formulaire) dans la table des recettes
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	include 'db/insert-into-recettes-choco.php';	
}

// Sélection des données de ma table des recettes
include 'db/select-recettes-choco.php';

// Inclusion des données du fichier 'data.php' (les 2 recettes modélisées à l'exercice 2.2)
// Cela sera éventuellement remplacé par la requête de sélection SQL.
// include 'data.php';

// On inclut le fichier d'affichage
// Au point de départ, l'affichage des cartes est purement statique. Les données du fichier 'data.php' peuvent toutefois vous aider à écrire votre algorithme - ou vous pouvez passer directement à la requête de sélection si vous souhaitez.
include 'views/app.html.php';

?>
