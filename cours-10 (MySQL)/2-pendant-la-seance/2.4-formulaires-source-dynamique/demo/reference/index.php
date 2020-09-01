<?php 

// Connexion vers le serveur de bases de données
include 'db/connexion-MySQL.php';

// Insertion d'une nouvelle ligne dans la table des publications
// GET: 
//   1.1 Lorsqu'on accède à une page en "lecture"
//   1.2 Formulaire -> lorsque le type n'est pas POST
// POST: 
//   2.1 Formulaire -> lorsque le type est spécifié comme étant POST

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	include 'db/insert-into-publications.php';
}

// Sélection des données de la table des publications
include 'db/select-publications.php';

// Inclusion du fichier d'affichage
include 'views/app.html.php';


?>