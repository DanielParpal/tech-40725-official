<?php 

/**
 * Retourne toutes les lignes de la tables 'examen_refrigerateurs'
 * La variable $refrigerateurs contiendra toutes ces lignes
 */
$query = $db->query('SELECT * from examen_refrigerateurs');
$refrigerateurs = $query->fetchAll(PDO::FETCH_ASSOC);

?>