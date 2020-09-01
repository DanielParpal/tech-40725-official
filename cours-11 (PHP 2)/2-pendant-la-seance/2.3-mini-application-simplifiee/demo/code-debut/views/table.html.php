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
        <!-- Venons ajouter les deux cours à notre table HTML... -->
        <tr>
            <td><?php echo $cours_1["date"] ?></td>
            <td><?php echo $cours_1["instructeur"] ?></td>
            <td><?php echo $cours_1["titre"] ?></td>
        </tr>
        <tr>
            <td><?php echo $cours_2["date"] ?></td>
            <td><?php echo $cours_2["instructeur"] ?></td>
            <td><?php echo $cours_2["titre"] ?></td>
        </tr>
    </tbody>
</table>