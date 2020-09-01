<?php 

// Variables utilisées dans la requête SQL d'insertion
$auteur = $_POST["auteur"];
$retroaction = $_POST["description"];

// Ajoute une ligne à la table des retroactions
$auteur = $db->quote($auteur);
$retroaction = $db->quote($retroaction);
$query = "INSERT INTO exercice_retroactions_produits (auteur, retroaction) VALUES ($auteur, $retroaction)";
$db->exec($query);

?>