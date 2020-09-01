<?php

// Connexion à notre base de données
include 'db/connexion-MySQL.php';

// Insertion d'un article à chaque rafraîchissement
// 4. Maintenant, nous devons corriger un petit problème. Nous devons seulement ajouter un article au moment de la soumission d'un formulaire, et non pas à chaque rafraîchissement. Utilisez la condition suivante pour y arriver. Votre inclusion vers le fichier d'insertion dans la base de données doit être conditionnelle :
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	include 'db/insert-into-articles.php';	
}

// 1. Dans index.php, ajoutez une inclusion vers le fichier 'db/select-articles.php' après l'inclusion du fichier d'insertion (point 3).
include 'db/select-articles.php';

// 2. Dans index.php, ajoutez l'inclusion vers le fichier d'affichage 'views/app.html.php'
include 'views/app.html.php';

?>
