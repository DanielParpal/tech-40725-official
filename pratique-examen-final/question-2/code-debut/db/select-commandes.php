<?php 

$query = $db->query('SELECT * from examen_commandes');
$commandes = $query->fetchAll(PDO::FETCH_ASSOC);

?>