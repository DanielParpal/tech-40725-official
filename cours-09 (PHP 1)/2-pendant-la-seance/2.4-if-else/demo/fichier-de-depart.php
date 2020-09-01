<?php 

$client = 'Daniel';
$soldeCompte = 150;

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
        
        <h4>Bienvenue, <?php echo $client; ?></h4>
        <?php echo "<u>Le solde de votre compte est $soldeCompte$</u>"; ?><br>
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
                    <td>22 février 2018</td>
                    <td>Martha</td>
                    <td>X-fit (Klub)</td>
                </tr>
                <tr>
                    <td>14 février 2018</td>
                    <td>Paul</td>
                    <td>Yoga Flow avec musique</td>
                </tr>
                <tr>
                    <td>31 janvier 2018</td>
                    <td>Caroline</td>
                    <td>Bootcamp et course</td>
                </tr>
            </tbody>
        </table>
        
        <form>
            <h4>Veuillez vous connecter</h4>
            <div class="form-group">
                <label for="exampleInputEmail1">Courriel</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrer votre courriel">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Mot de passe</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe">
            </div>
            <button type="submit" class="btn btn-primary">Se connecter</button>
        </form>
        
    </div>
</body>
</html>