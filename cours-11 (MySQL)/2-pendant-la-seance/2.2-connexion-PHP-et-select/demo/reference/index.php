<?php 

// Connexion à la base de données
include 'db/connexion-MySQL.php';

// Sélection des données avec une requête SELECT
include 'db/select-publications.php';

// Inclusion du fichier d'affichage
include 'views/app.html.php';

?>