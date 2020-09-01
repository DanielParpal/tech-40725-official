<?php 

// Variables utilisées dans la requête SQL d'insertion
$description = 'Hoodie Abercrombie';
$prix = 99.99; 
$image = 'resources/img/hoodie.jpg';

// Ajoute une ligne à la table des articles
$description = $db->quote($description);
$image = $db->quote($image);
$query = "INSERT INTO articles (description, price, picture_url) VALUES ($description, $prix, $image)";
$db->exec($query);

?>