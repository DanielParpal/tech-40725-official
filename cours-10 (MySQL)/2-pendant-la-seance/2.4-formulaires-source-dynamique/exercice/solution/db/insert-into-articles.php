<?php 

// Variables utilisées dans la requête SQL d'insertion
// 5. Finalement, connectez votre formulaire à la requête d'insertion :
$description = $_POST['description'];
$prix = $_POST['prix']; 
$image = $_POST['imageURL'];

// Ajoute une ligne à la table des articles
$description = $db->quote($description);
$image = $db->quote($image);
$query = "INSERT INTO articles (description, price, picture_url) VALUES ($description, $prix, $image)";
$db->exec($query);

?>