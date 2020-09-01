<div class="row">
    <!-- Référence : https://getbootstrap.com/docs/4.3/components/card/ -->

    <?php foreach($recettes as $recette) { ?>

        <!-- Template de carte Bootstrap à utiliser pour votre algorithme de génération dynamique de contenu. Pour l'instant, tout est statique. -->
        <div class="col-4 mb-5">
            <div class="card">
                <img class="img-fluid" src="<?php echo $recette['image']; ?>" class="card-img-top" alt="Image de la recette">
                <div class="card-body">
                    <h5 class="card-title">
                        <?php echo $recette["titre"]; ?>
                    </h5>
                    <p class="card-text">
                        <?php echo $recette["description"]; ?>
                    </p>
                    <p class="card-text">
                        <a class="btn btn-outline-secondary" target="_blank" href="<?php echo $recette['url']; ?>">
                            Voir la recette
                        </a>
                    </p>
                </div>
            </div>
        </div>

    <?php } ?>
</div>
