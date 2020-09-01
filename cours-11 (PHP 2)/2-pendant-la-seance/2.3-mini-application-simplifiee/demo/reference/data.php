<?php 

// Modélisation du cours 1 avec un tableau associatif
$cours_1 = [
	"date" => "22 octobre 2019",
	"instructeur" => "Martha",
	"titre" => "X-fit (Klub)"
];

// Modélisation du cours 2 avec un tableau associatif
$cours_2 = [
	"date" => "26 octobre 2019",
	"instructeur" => "Paul",
	"titre" => "Yoga Flow avec musique"
];

// 2. Dans 'data.php', définissons un troisième cours (structure : tableau associatif)
$cours_3 = [
	"date" => "31 octobre 2019",
	"instructeur" => "Caroline",
	"titre" => "Bootcamp et course"
];

// 3. Regroupons ces trois tableaux associatifs sous un tableau numérique/indexé, que nous nommerons $cours
$cours = [
	$cours_1, $cours_2, $cours_3
];

// var_dump($cours);


?>