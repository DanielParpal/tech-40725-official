<?php

// 6. Utilisons maintenant la requête de sélection MySQL
// Rappel : Il faut s'assurer d'établir une connexion avant toute chose
include 'db/connexion-MySQL.php';

include 'db/select-cours-fitness.php';

// On inclut les données du fichier data.php
// include 'data.php';

// On inclut l'affichage
include 'views/app.html.php';

?>
