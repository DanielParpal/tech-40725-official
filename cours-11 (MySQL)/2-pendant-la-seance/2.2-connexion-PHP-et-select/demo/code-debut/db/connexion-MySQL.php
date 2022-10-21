<?php 

/**
 * Initialisation de la connexion à la base de données
 */
try {
    $db = new PDO('mysql:host=localhost;dbname=hec', 'root', 'root');
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
$db->exec("set names utf8");

?>