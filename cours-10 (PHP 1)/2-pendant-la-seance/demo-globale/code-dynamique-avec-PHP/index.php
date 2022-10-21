<?php 

// Simule un appel à une base de données
include 'data.php';

// Permet de filtrer grâce à une liste d'artistes en paramètre $_GET : 
// Exemple : ?artists=1,2 ou encore ?artists=4
if (isset($_GET['artists'])) {
    $artist_ids = explode(',', $_GET['artists']);
    
    $albums = array_filter($albums, function($album) use ($artist_ids) {
        if(in_array($album['artist_id'], $artist_ids)) {
            return true;
        }
    });
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Albums à vendre</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<body>
    <div class="container mt-5">
        <div class="row">
            
            <!-- Algorithme de génération dynamique -->
            <?php foreach($albums as $album): ?>
                <div class="col-3">
                    <div class="card" style="width: 100%;">
                        <img class="card-img-top" src="<?php echo $album['img_url']; ?>">
                        <div class="card-body">
                            <h5 class="card-title">
                                <?php echo $album['artist']; ?>
                                -
                                <?php echo $album['title']; ?>
                            </h5>
                            <p class="card-text"><?php echo $album['description']; ?></p>
                            <a href="#" class="btn btn-primary">Acheter</a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</body>
</html>