<?php 

/**
 * Retourne toutes les lignes de la tables 'recettes_chocolats_favoris'
 * La variable $recettes contiendra toutes ces lignes
 */
$query = $db->query('SELECT * from recettes_chocolats_favoris');
$recettes = $query->fetchAll(PDO::FETCH_ASSOC);

?>