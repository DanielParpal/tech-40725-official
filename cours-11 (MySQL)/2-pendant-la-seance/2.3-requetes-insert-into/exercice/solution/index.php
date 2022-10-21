<?php

// Connexion à la base de données
include 'db/connexion-MySQL.php';

// Insertion dans la table des articles
include 'db/insert-into-articles.php';

// Sélection des articles
include 'db/select-articles.php';

// Insertion du fichier d'affichage
include 'views/app.html.php';

?>