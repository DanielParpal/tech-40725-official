<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Exercice intégrateur cours 11</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="assets/style.css">
</head>
<body>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="header">
                    <img src="images/logo-generic-fr.png">    
                </div>
                
                <!-- Inclusion du formulaire permettant d'ajouter des données -->
                <?php include'formulaire.html.php'; ?>
                <hr>
                <!-- Inclusion de l'affichage des cartes, présentantles données -->
                <?php include'cartes.html.php'; ?>
                
            </div>
        </div>
    </div>
</body>
</html>