<?php 

// Variables utilisées dans la requête SQL d'insertion
$titre = $_POST['titre'];
$description = $_POST['description'];
$image = $_POST['image'];
$url = $_POST['url'];

// Ajoute une ligne à la table des recettes de chocolats favoris
$titre = $db->quote($titre);
$description = $db->quote($description);
$image = $db->quote($image);
$url = $db->quote($url);

$query = "INSERT INTO recettes_chocolats_favoris (titre, description, image, url) VALUES ($titre, $description, $image, $url)";
$db->exec($query);

?>