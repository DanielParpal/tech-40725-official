<?php 

$prix = 100;

$panierOffreUnRabais = $prix >= 50;
var_dump($panierOffreUnRabais);
echo '<br>';

if ($panierOffreUnRabais) {
	echo "Je me retrouve dans la branche qui sera exécutée si la condition est vraie";
} else {
	echo "Je me retrouve dans la branche qui sera exécutée si la condition est fausse";
}

?>