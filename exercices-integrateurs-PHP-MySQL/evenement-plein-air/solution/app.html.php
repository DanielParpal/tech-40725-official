<!DOCTYPE html>
<html>
<head>
	<title>Exercice intégrateur événement plein air</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
	<div class="container mt-2">
		<?php if ($avecAlerte) { ?>
			<div class="alert alert-danger">
				<?php echo $alerte; ?>
			</div>
		<?php } ?>

		<h2><?php echo $evenement; ?></h2>
		<div class="row">
			<div class="col-4">
				<h6 class="text-muted mt-2">PÉRIODE</h6>
				<p><?php echo $periode; ?></p>

				<h6 class="text-muted mt-2">HEURE</h6>
				<p><?php echo $heure; ?></p>

				<h6 class="text-muted mt-2">ORGANISATEUR</h6>
				<p><?php echo $organisateur; ?></p>

				<h6 class="text-muted mt-2">PRIX</h6>
				<p><?php echo $prix; ?></p>

				<h6 class="text-muted mt-2">ADRESSE</h6>
				<p><?php echo $adresse; ?></p>
			</div>
			<div class="col-8">
				<img class="mt-5" width="80%" src="<?php echo $image; ?>" alt="Image de la course MEC Longueuil">

				<?php echo $description; ?>
			</div>
		</div>
	</div>
</body>
</html>