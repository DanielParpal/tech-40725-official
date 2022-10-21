<?php 

$nomClient = 'Daniel';
$solde = 120;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Démo 2.3</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
    <div class="container mt-3">
        
        <h4>Bienvenue, <?php echo $nomClient; ?> </h4>
        <p>Solde : <?php echo '<b>' . $solde . '</b>'; ?>$</p>
        <!-- Afficher le solde -->
        <p class="mt-2 mb-1"><b>Derniers cours auxquels vous avez assisté</b></p><br>
        <a class="btn btn-primary mb-4" href="#">Réserver un cours! (20$)</a>
        <table class="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Professeur</th>
                    <th>Nom du cours</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>22 octobre 2019</td>
                    <td>Martha</td>
                    <td>X-fit (Klub)</td>
                </tr>
                <tr>
                    <td>26 octobre 2019</td>
                    <td>Paul</td>
                    <td>Yoga Flow avec musique</td>
                </tr>
                <tr>
                    <td>31 octobre 2019</td>
                    <td>Caroline</td>
                    <td>Bootcamp et course</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>