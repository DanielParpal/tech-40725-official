<?php 

// Variables utilisées dans la requête SQL d'insertion
$titre = "Un super réfrigérateur";
$prix = 1799;
$image = 'images/monfridge.png';

// Ajoute une ligne à la table des réfrigérateurs
$titre = $db->quote($titre);
$prix = $db->quote($prix);
$image = $db->quote($image);

$query = "INSERT INTO examen_refrigerateurs(titre, prix, image) VALUES ($titre, $prix, $image)";
$db->exec($query);

?>