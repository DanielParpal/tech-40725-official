<?php 

$prenomUn = 'Daniel';
echo $prenomUn;
echo '<br>';
// var_dump($prenomUn);

$prenomDeux = "Camille";
var_dump($prenomDeux);
echo '<br>';

$message = 'Bienvenue, $prenomDeux';
echo $message;
echo '<br>';

$messageDeux = "Bienvenue, $prenomDeux";
echo $messageDeux;
echo '<br>';

$salutations = 'Bonjour, ' . $prenomUn;
echo $salutations;
echo '<br>';

echo "J'ai faim.<br>";
echo 'Elle a dit: "Wow!"<br>';
echo 'Elle a dit: "J\'ai faim!"';

?>