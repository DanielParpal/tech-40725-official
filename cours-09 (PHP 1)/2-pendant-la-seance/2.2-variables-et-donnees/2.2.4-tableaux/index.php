<?php

$produits = [
	't-shirt',
	'jeans',
	'casquette'
];
var_dump($produits);
echo '<br>';

echo $produits[0];
$chaineAvecBr = '<br>';
echo $chaineAvecBr;

$indexNumerique = 2;
echo $produits[$indexNumerique];
echo '<br>';

$produits[2] = 'chapeau';
echo $produits[2];
echo '<br>';

$produits[] = 'souliers';
var_dump($produits);
echo '<br>';

$qteProduits = count($produits);
echo $qteProduits;
echo '<br>';

?>