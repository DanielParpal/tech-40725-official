// 1a. Mettez en place une boucle affichant dans la console les nombres 1 à 5.
for (var i = 1; i <= 5; i = i + 1) {
	console.log(i);

	// 1b. Si le nombre affiché est 3, ajoutez aussi l'affichage "Wow, je suis rendu à 3!"
	if (i == 3) {
		console.log("Wow, je suis rendu à 3!");
	}
}

console.log("=====Séparateur=====");

// 2a. Mettez en place une boucle affichant dans la console les nombres 1 à 10
// 2b. Si le nombre affiché est plus petit ou égal à 5, affichez également "Plus petit ou égal à cinq."
for (var i = 1; i <= 10; i = i + 1) {
	
	if (i <= 5) {
		console.log(i, "Plus petit ou égal à cinq");
	} else {
		console.log(i);
	}
}

