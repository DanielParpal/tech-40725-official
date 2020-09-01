<?php 

/**
 * Retourne toutes les lignes de la tables 'cours_fitness'
 * La variable $cours contiendra toutes ces lignes
 */
$query = $db->query('SELECT * from cours_fitness');
$cours = $query->fetchAll(PDO::FETCH_ASSOC);

?>