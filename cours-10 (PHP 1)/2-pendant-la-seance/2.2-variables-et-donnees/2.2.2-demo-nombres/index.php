<?php 

// Ceci est un commentaire
$prix = 50.99;

echo $prix;
echo '<br>';

$prix = $prix * 1.15;
echo $prix;
echo '<br>';

$prix = $prix - 20;
echo $prix;
echo '<br>';

echo $prix < 50;
echo '<br>';
// echo true;
$prixInferieurACinquante = $prix < 50;
var_dump($prixInferieurACinquante);
echo '<br>';

$prixSuperieurACinquante = $prix > 50;
var_dump($prixSuperieurACinquante);

?>
