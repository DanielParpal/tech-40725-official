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
                    <?php echo $titre; ?>
                </h5>
                <p class="card-text">
                    <!-- Affichage description avec variable PHP (dynamique) -->
                    <?php echo $description; ?>
                </p>
                
                <?php // Mettre le if ici ?>
                
                <a href="#" class="btn btn-primary">Acheter</a>
                <div class="alert alert-success mt-2" role="alert">
                    <!-- Affichage quantité disponible (dynamique) -->
                    <?php echo 'Quantité disponible : ' . $quantite; ?>
                </div>
                
                <?php // Mettre le else ici ?>
                
                <div class="alert alert-danger mt-2" role="alert">
                    Cet item n'est plus disponible!
                </div>
                
                <?php // Terminer le if/else ici ?>
            </div>
        </div>
    </div>
</body>
</html>