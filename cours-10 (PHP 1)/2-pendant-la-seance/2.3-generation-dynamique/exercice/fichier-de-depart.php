<?php 

// Cela pourrait venir d'une requête SQL (à titre d'exemple)
$titre = 'Chandail pour garçons';
$description = 'Collection Zara :<br>Cardigan pour garçons, disponibles en différentes tailles.';
$quantite = 2;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
    <div class="container mt-3">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="chandail.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">
                    <!-- Affichage titre avec variable PHP (dynamique) -->
                </h5>
                <p class="card-text">
                    <!-- Affichage description avec variable PHP (dynamique) -->
                </p>
                <a href="#" class="btn btn-primary">Acheter</a>
                <div class="alert alert-success mt-2" role="alert">
                    <!-- Affichage quantité disponible (dynamique) -->
                    Quantité disponible : (affichage dynamique de la quantité)
                </div>
            </div>
        </div>
    </div>
</body>
</html>