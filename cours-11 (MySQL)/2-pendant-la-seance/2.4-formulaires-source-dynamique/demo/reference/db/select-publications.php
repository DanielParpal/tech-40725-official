<?php 

/**
 * Retourne toutes les lignes de la table des publications
 * La variable $publications contiendra toutes ces lignes
 */
$query = $db->query('SELECT * from publications');
$publications = $query->fetchAll(PDO::FETCH_ASSOC);

?>