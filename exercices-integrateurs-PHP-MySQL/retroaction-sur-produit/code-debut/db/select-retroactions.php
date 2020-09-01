<?php 

/**
 * Retourne toutes les lignes de la tables
 * La variable $retroactions contiendra toutes ces lignes
 */
$query = $db->query('SELECT * from exercice_retroactions_produits');
$retroactions = $query->fetchAll(PDO::FETCH_ASSOC);

?>