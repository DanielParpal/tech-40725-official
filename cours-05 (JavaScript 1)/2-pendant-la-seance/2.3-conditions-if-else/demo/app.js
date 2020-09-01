var typeClient = 'prime'; // soit prime ou normal
var prixItem1 = 100;
var prixItem2 = 50;

var prixTotal = prixItem1 + prixItem2;

if (typeClient == 'prime') {
	console.log('Branche vraie');
} else {
	console.log('Branche fausse');
	prixTotal = prixTotal + 14.99;
}

prixTotal = prixTotal * 1.15;
console.log('Le montant final est', prixTotal);