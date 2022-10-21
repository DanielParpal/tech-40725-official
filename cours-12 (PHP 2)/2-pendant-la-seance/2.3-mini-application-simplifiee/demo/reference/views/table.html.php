<h5>Liste des cours</h5>
<table class="table">
    <thead>
        <tr>
            <th>Date</th>
            <th>Instructeur</th>
            <th>Nom du cours</th>
        </tr>
    </thead>
    <tbody>
        <!-- 5. Maintenant, comment pouvons-nous utiliser une boucle foreach() pour générer les lignes dynamiquement? (et éviter la duplication de code) -->
        <?php foreach($cours as $un_cours) { ?>
            <tr>
                <td><?php echo $un_cours["date"]; ?></td>
                <td><?php echo $un_cours["instructeur"]; ?></td>
                <td><?php echo $un_cours["titre"]; ?></td>
            </tr>
        <?php } ?>

        <!-- <tr>
            <td><?php echo $cours_1["date"] ?></td>
            <td><?php echo $cours_1["instructeur"] ?></td>
            <td><?php echo $cours_1["titre"] ?></td>
        </tr>
        <tr>
            <td><?php echo $cours_2["date"] ?></td>
            <td><?php echo $cours_2["instructeur"] ?></td>
            <td><?php echo $cours_2["titre"] ?></td>
        </tr>

        4. Regardons ce qu'il faudrait faire pour ajouter le cours 3 à la table HTML sans utiliser un algorithme
        <tr>
            <td><?php echo $cours_3["date"] ?></td>
            <td><?php echo $cours_3["instructeur"] ?></td>
            <td><?php echo $cours_3["titre"] ?></td>
        </tr> -->
    </tbody>
</table>