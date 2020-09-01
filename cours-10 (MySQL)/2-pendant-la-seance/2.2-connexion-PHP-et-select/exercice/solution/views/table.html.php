<table class="table mt-2">
    <thead>
        <tr>
            <th>Description</th>
            <th>Prix</th>
            <th>Lien image</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($articles as $article) { ?>
        <tr>
            <td><?php echo $article['description']; ?></td>
            <td><?php echo $article['price']; ?></td>
            <td><?php echo $article['picture_url']; ?></td>
        </tr>
        <?php } ?>
    </tbody>
</table>
