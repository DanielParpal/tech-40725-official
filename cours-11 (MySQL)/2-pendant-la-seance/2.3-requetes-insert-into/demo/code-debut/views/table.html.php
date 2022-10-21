<table class="table mt-2">
    <thead>
        <tr>
            <th>Publication</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($publications as $publication) { ?>
        <tr>
            <td><?php echo $publication['description']; ?></td>
        </tr>
        <?php } ?>
    </tbody>
</table>
