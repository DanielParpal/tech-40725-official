// Modélisation de la structure de données contenant les différentes variantes (verte, khaki, navy) pour les pantalons (Flannel-Lined Khakis in Straight Fit) de Gap
var pantalons = [
    {
        couleur: 'green',
        image: 'images/pants-green.png',
        disponibilites: [
            {
                taille: 30,
                quantite: 1
            },
            {
                taille: 32,
                quantite: 3
            },
            {
                taille: 34,
                quantite: 2
            }
        ]
    },
    {
        couleur: 'khaki',
        image: 'images/pants-khaki.png',
        disponibilites: [
            {
                taille: 30,
                quantite: 0
            },
            {
                taille: 32,
                quantite: 2
            },
            {
                taille: 34,
                quantite: 1
            }
        ]
    },
    {
        couleur: 'navy',
        image: 'images/pants-navy.png',
        disponibilites: [
            {
                taille: 30,
                quantite: 4
            },
            {
                taille: 32,
                quantite: 2
            },
            {
                taille: 34,
                quantite: 0
            }
        ]
    }
];

// 1. Questions plus "théoriques"
// ...

// Affichage de quelques données des 'pantalons'
// console.log(pantalons);
// console.log(pantalons[0]["couleur"]);
// console.log(pantalons[1]["image"]);
// console.log(pantalons[0]["disponibilites"]);
// console.log(pantalons[0]["disponibilites"][0]["quantite"]);
// console.log(pantalons[0]["disponibilites"][0]["taille"]);

// Votre code viendra sous ce commentaire...
// 2. Mettez en place un gestionnaire d'événement pour observer un 'mouseenter' sur tous les éléments HTML permettant de sélectionner par couleur (trouvez la classe appropriée).
$(".selection-couleur").on("mouseenter", function() {

    // 3. Récupérez la couleur du pantalon ("green", "khaki" ou "navy") dans l'attribut data approprié de l'élément sur lequel la souris a déclenché un 'mouseenter'. Assurez-vous de stocker cette couleur dans une variable.
    var couleurSelection = $(this).data('color');

    // 4. Mettez en place une boucle permettant de parcourir le tableau des pantalons
    for (var i = 0; i < pantalons.length; i = i + 1) {

        // 5. Dans la boucle, mettez en place une condition permettant de tester si la couleur du pantalon présentement parcouru correspond à la couleur du pantalon sélectionné
        if (pantalons[i]["couleur"] == couleurSelection) {

            // 6. Assignez à l'attribut 'src' de l'image principale la valeur de la propriété 'image' du pantalon.
            $("#image-pantalon").attr("src", pantalons[i]["image"]);

            // 7. Assignez à une nouvelle variable le contenu stocké sous la clé 'disponibilites' pour le pantalon correspondant à la couleur sélectionnée.
            var disponibilites = pantalons[i]["disponibilites"];

            // 8. Mettez en place une boucle permettant de parcourir ce tableau d'objets des disponibilites.
            for (var j = 0; j < disponibilites.length; j = j + 1) {

                // 9. Dans la boucle, mettez en place une condition permettant de tester si la quantité est supérieure à 0.
                if (disponibilites[j]["quantite"] > 0) {
                    
                    // 10. Enlevez la classe "unavailable" de l'élément HTML associé à cette taille.
                    $("#size-" + disponibilites[j]["taille"]).removeClass("unavailable");
                } else {
                    
                    // 11. Ajoutez la class "unavailable" à l'élément HTML associé à cette taille.
                    $("#size-" + disponibilites[j]["taille"]).addClass("unavailable");
                }

            }

        }

    }

});







