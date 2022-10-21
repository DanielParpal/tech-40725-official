<!DOCTYPE html>
<html>
<head>
    <title>Exercice 2.2</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <div class="container mt-5">
        <div class="row">
            <!-- Référence : https://getbootstrap.com/docs/4.3/components/card/ -->

            <!-- Carte Bootstrap de la recette A -->
            <!-- À noter: pour le moment, la carte est directement dans 'app.html.php', mais nous pourrions (et allons) éventuellement extraire l'algorithme de génération des cartes dans un fichier à part ('cartes.html.php') -->
            <div class="col-4 mb-5">
                <div class="card">
                    <img class="img-fluid" src="<?php echo $recetteA['image']; ?>" class="card-img-top" alt="Image de la recette">
                    <div class="card-body">
                        <h5 class="card-title">
                            <?php echo $recetteA['titre']; ?>
                        </h5>
                        <p class="card-text">
                            <?php echo $recetteA['description']; ?>
                        </p>
                        <p class="card-text">
                            <a class="btn btn-outline-secondary" target="_blank" href="<?php echo $recetteA['url']; ?>">
                                Voir la recette
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <!-- Carte Bootstrap de la recette B -->
            <div class="col-4 mb-5">
                <div class="card">
                    <img class="img-fluid" src="<?php echo $recetteB['image']; ?>" class="card-img-top" alt="Image de la recette">
                    <div class="card-body">
                        <h5 class="card-title">
                            <?php echo $recetteB['titre']; ?>
                        </h5>
                        <p class="card-text">
                            <?php echo $recetteB['description']; ?>
                        </p>
                        <p class="card-text">
                            <a class="btn btn-outline-secondary" target="_blank" href="<?php echo $recetteB['url']; ?>">
                                Voir la recette
                            </a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</body>
</html>

