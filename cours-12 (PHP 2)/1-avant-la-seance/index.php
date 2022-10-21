<?php
$arr = [1, 2, 3, 4]; // numérique (indexé)


foreach ($arr as $patate) {
    echo ($patate * 2) . "<br>";
}

$produit = [
	"titre" => "t-shirt",
    "prix" => 50,
    "quantite" => 2,
];

echo $produit["titre"] . "<br>";
echo $produit["quantite"] . "<br>";
echo $produit["prix"] . "<br>";

$produit["quantite"] = $produit["quantite"] + 3; // 5
echo $produit["quantite"] . "<br>";

?>