<?php 

// Variables utilisées dans la requête SQL d'insertion
$auteur = "Edgar Allan Poe";
$retroaction = "Ce poème témoigne de l'excellence de votre produit";

// Ajoute une ligne à la table des retroactions
$auteur = $db->quote($auteur);
$retroaction = $db->quote($retroaction);
$query = "INSERT INTO exercice_retroactions_produits (auteur, retroaction) VALUES ($auteur, $retroaction)";
$db->exec($query);

?>