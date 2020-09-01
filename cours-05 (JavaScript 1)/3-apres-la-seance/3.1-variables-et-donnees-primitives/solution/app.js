// 1a. Affichez dans la console la valeur booléenne correspondant à vrai
console.log(true);

// 1b. Affichez dans la console la valeur booléenne correspondant à faux
console.log(false);


console.log("=====Séparateur=====");

// 2a. Assignez, à une nouvelle variable nommée var_vrai, la valeur booléenne correspondant à vrai, puis affichez-la dans la console
var var_vrai = true;
console.log(var_vrai);

// 2b. Assignez, à une nouvelle variable nommée var_faux, la valeur booléenne correspondant à faux, puis affichez-la dans la console
var var_faux = false;
console.log(var_faux);

// 3a. Assignez, à une nouvelle variable nommée qte_achats_produitA, la valeur 12
var qte_achats_produitA = 12;

// 3b. Assignez, à une nouvelle variable nommée qte_achats_produitB, la valeur 6
var qte_achats_produitB = 6;

// 3c. Affichez dans la console les deux valeurs sur la même ligne
console.log(qte_achats_produitA, qte_achats_produitB);

// 3d. Grâce aux opérateurs de comparaison, affichez dans la console un test permettant de savoir si la quantité d'achats du produit A est supérieure à la quantité d'achats du produit B
console.log(qte_achats_produitA > qte_achats_produitB);

// 3e. Idem à 3d., mais pour tester si les quantités sont égales
console.log(qte_achats_produitA == qte_achats_produitB);


console.log("=====Séparateur=====");

// 3f. Maintenant, au lieu d'afficher le résultat de 3d. directement dans la console, assignez la valeur booléenne à une nouvelle variable nommée a_plus_grand_que_b
var a_plus_grand_que_b = qte_achats_produitA > qte_achats_produitB;

// 3g. Idem à 3f, mais pour la valeur booléenne de 3e, dans une variable nommée a_egal_b
var a_egal_b = qte_achats_produitA == qte_achats_produitB;

// 3h. Assignez, à une nouvelle variable nommée total_achats, la somme de qte_achats_produitA et qte_achats_produitB
var total_achats = qte_achats_produitA + qte_achats_produitB;

// 3i. Affichez dans la console la valeur de total_achats
console.log("La quantité totale est : ", total_achats);

// 4a. Assignez, à une nouvelle variable nommée taille, la valeur "Medium"
var taille = "Medium";

// 4b. Assignez, à une nouvelle variable nommée produit, la valeur "Chemise"
var produit = "Chemise";

// 4c. Composez le texte "Chemise de taille Medium" en utilisant les deux variables, un morceau de texte statique et la concaténation, et assignez ce texte à une nouvelle variable nommée description
var description = produit + " de taille " + taille;

// 4d. Affichez dans la console cette description
console.log(description);

// 4e. Assignez à une nouvelle variable nommée citation, la citation d'un de vos clients
var citation = 'Au moment où j\'ai reçu mes nouveaux écouteurs, j\'ai crié "Hourra!" et ce fut le plus beau jour de ma vie!';

// 4f. Affichez dans la console cette citation
console.log(citation);

