// 2. Modéliser le titre des 4 premiers produits en utilisant un tableau.
var produits = [
	"Coussin décoratif Riva",
	"coussin lombaire intérieur/extérieur buffalo Welles",
	"Coussin décoratif tricoté Clairview",
	"Taie d’oreiller de jacquard universel décoratif rhombus"
];

// 3. Affichez dans la console la quantité d'éléments dans votre tableau, en utilisant la propriété que nous avons vue.
console.log("Dans notre tableau, nous avons:", produits.length, "éléments.");

// 4. Ajoutez un élément au tableau sans avoir à modifier votre définition initiale du tableau.
produits.push("Coussin décoratif Silpa");

// 5. Affichez à nouveau la quantité d'éléments dans votre tableau. Elle devrait avoir augmenté de 1!
console.log("Dans notre nouveau tableau, nous avons:", produits.length, "éléments.");

// 6. Affichez l'élément à l'index 2 dans la console.
console.log(produits[2]);

// 7. Modifiez-le pour le produit suivant : "Housse de coussin en velours Payson"
produits[2] = "Housse de coussin en velours Payson";

// 8. Affichez le à nouveau.
console.log(produits[2]);

// 9. Comment feriez-vous pour tester la présence de cet élément dans votre tableau? Nous avons vu une certaine méthode (action) permettant d'y arriver. Assignez le résultat à une nouvelle variable nommée est_present
// nom_tableau.includes(nom_element);
var est_present = produits.includes("Housse de coussin en velours Payson");

// 10. Affichez la valeur booléenne de cette variable est_present.
console.log(est_present);

// 11. Reprenez les éléments 9 et 10, mais sans l'étape intermédiare de la variable : affichez directement dans la console le résultat du test permettant de savoir si cet élément est dans votre tableau.
var produit_a_tester = "Housse de coussin en velours Payson";
console.log(produits.includes(produit_a_tester));





