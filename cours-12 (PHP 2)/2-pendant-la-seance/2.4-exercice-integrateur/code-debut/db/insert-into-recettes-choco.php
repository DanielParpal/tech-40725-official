<?php 

// Variables utilisées dans la requête SQL d'insertion
$titre = "Un bon gâteau";
$description = "Vous ne pourrez résister!";
$image = "Une image quelconque";
$url = "https://changez-moi.com";

// Ajoute une ligne à la table des recettes de chocolats favoris
$titre = $db->quote($titre);
$description = $db->quote($description);
$image = $db->quote($image);
$url = $db->quote($url);

$query = "INSERT INTO recettes_chocolats_favoris (titre, description, image, url) VALUES ($titre, $description, $image, $url)";
$db->exec($query);

?>