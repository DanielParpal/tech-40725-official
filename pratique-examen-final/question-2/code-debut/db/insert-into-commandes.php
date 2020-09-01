<?php 

$description = "15 paires B2 2733425";
$date_reception = "2020/03/20";
$correcte = 1;
$description_probleme = "";

// Préparation de la requête d'insertion (ne pas modifier les lignes ci-dessous)
$description = $db->quote($description);
$date_reception = $db->quote($date_reception);
$correcte = $db->quote($correcte);
$description_probleme = $db->quote($description_probleme);

$query = "INSERT INTO examen_commandes(description, date_reception, correcte, description_probleme) VALUES ($description, $date_reception, $correcte, $description_probleme)";
$db->exec($query);

?>