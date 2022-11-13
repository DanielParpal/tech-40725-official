<?php 

// Tiré du cours 10
$titre = 'Chandail pour garçons';
$description = 'Collection Zara :<br>Cardigan pour garçons, disponibles en différentes tailles.';
$quantite = 1;

// Définition du tableau des tailles (à faire)


// Ajout d'un élément avec la syntaxe appropriée


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
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
                <h5>Tailles disponibles :</h5>
                <ul class="list-group">
                    <!-- Écrire un algorithme permettant de générer les items de liste (<li>) contenant les différentes tailles. Note: vous pouvez utiliser la classe 'list-group-item' pour vos items de liste, afin de rendre le tout plus joli. -->
                    

                </ul>
                <hr>
                
                <?php if ($quantite > 0) { ?>
                
                <a href="#" class="btn btn-primary">Acheter</a>
                <div class="alert alert-success mt-2" role="alert">
                    <!-- Affichage quantité disponible (dynamique) -->
                    <?php echo 'Quantité disponible : ' . $quantite; ?>
                </div>
                
                <?php } else { ?>
                
                <div class="alert alert-danger mt-2" role="alert">
                    Cet item n'est plus disponible!
                </div>
                
                <?php } ?>
            </div>
        </div>
    </div>
</body>
</html>