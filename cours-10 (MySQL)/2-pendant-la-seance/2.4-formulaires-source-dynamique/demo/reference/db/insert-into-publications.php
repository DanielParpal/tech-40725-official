<?php 

// Variables utilisées dans la requête SQL d'insertion
$description = $_POST['description'];

// Ajoute une ligne à la table des articles
$description = $db->quote($description);
$query = "INSERT INTO publications (description) VALUES ($description)";
$db->exec($query);

?>