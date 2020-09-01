<?php 

// Connexion vers le serveur de bases de données
include 'db/connexion-MySQL.php';

// Insertion d'une nouvelle ligne dans la table des publications
include 'db/insert-into-publications.php';

// Sélection des données de la table des publications
include 'db/select-publications.php';

// Inclusion du fichier d'affichage
include 'views/app.html.php';


?>