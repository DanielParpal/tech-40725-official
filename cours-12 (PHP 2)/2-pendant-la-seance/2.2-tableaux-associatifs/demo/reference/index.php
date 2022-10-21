<?php 

// Définition d'un tableau associatif
$cours_1 = [
	'date' => '23 octobre 2019',
	'instructeur' => 'Martha',
	'nom' => 'Haltérophilie (Klub)'
];

// var_dump($cours_1);
// echo '<br>';

// echo $cours_1['date'] . '<br>'; // Ceci ne fonctionnerait pas: $cours_1.date
// echo $cours_1['nom'] . '<br>';

$cours_1['instructeur'] = 'Gayle';
// var_dump($cours_1);
// echo '<br>';

// $maCle = "date";
// echo $cours_1[$maCle] . "<br>"; // On utilise une variable comme clé

$cours_2 = [
	'date' => '26 octobre 2019',
	'instructeur' => 'Paul',
	'nom' => 'Yoga Flow avec musique'
];

// var_dump($cours_2);
// echo '<br>';

include 'app.html.php';

?>