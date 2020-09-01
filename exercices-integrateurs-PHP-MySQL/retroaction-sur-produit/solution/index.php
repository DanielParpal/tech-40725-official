<?php 

// Connexion à la base de données
include 'db/connexion-MySQL.php';

// Insertion conditionnelle à ce que le formulaire vienne d'être soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	include 'db/insert-into-retroactions.php';
}

// Sélection des données pour affichage éventuel
include 'db/select-retroactions.php';

// Affichage des données
include 'views/app.html.php';

?>