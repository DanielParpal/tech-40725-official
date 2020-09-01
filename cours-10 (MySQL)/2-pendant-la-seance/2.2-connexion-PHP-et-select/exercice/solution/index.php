<?php 

// 2. Créez la connexion vers votre base de données MySQL
include 'db/connexion-MySQL.php';

// 3. Sélectionnez toutes les données de la table des articles 
include 'db/select-articles.php';

// 4. Trouvez le nom de la variable contenant les données retournées par la requête de sélection, et affichez son contenu grâce à var_dump() dans le fichier index.php.
// var_dump($articles);

// 5. Affichez le contenu en incluant le fichier d'affichage 
include 'views/app.html.php';

?>