<table class="table mt-2">
    <!-- Les éléments de votre table viendront ici, incluant le script de génération dynamique -->
    <thead>
    	<tr>
    		<th>Auteur</th>
    		<th>Rétroaction</th>
    	</tr>
    </thead>
    <tbody>
    	<?php foreach ($retroactions as $maRetroaction) { ?>
	    	<tr>
	    		<td><?php echo $maRetroaction["auteur"] ?></td>
	    		<td><?php echo $maRetroaction["retroaction"] ?></td>
	    	</tr>
	    <?php } ?>
    </tbody>
</table>

<?php echo $retroaction; ?>