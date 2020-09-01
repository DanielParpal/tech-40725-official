<?php 

/**
 * Retourne toutes les lignes de la tables 'articles'
 * La variable $articles contiendra toutes ces lignes
 */
$query = $db->query('SELECT * from articles');
$articles = $query->fetchAll(PDO::FETCH_ASSOC);

?>