<?php 

// Gestion dynamique du contenu grâce au back-end (PHP ici)
$feelsGreat = 0;
$moreText = 'Comment allez-vous?';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style type="text/css">
        p {
            color: blue;
        }
    </style>
</head>
<body>
    <p id="test">Bonjour</p>
    <br>
    <?php if($feelsGreat) : ?>
        <?php echo $moreText; ?>
    <?php endif; ?>
    
    <script type="text/javascript">
        setTimeout(function() {
            document.getElementById('test').innerHTML = 'Salutations!';
            document.getElementById('test').style = 'color: red;';
        }, 3000);
    </script>
</body>
</html>