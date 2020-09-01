<?php

$titre = 'Chandail pour garçons';
echo "Le titre est: $titre.<br>";

$description = 'Collection Zara :<br>Cardigan pour garçons, disponibles en différentes tailles.';
echo 'La description est : ' . $description . '<br>';

$quantite = 4;
echo "La quantite est de: $quantite.<br>";
$quantite = $quantite - 2;
echo "La quantite est de: $quantite.<br>";

$tailles = [ 'S', 'M', 'L' ];
var_dump($tailles);
echo '<br>';
$tailles[] = 'XL';
echo count($tailles);
echo '<br>';
var_dump($tailles);

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
</head>
<body>

</body>
</html>