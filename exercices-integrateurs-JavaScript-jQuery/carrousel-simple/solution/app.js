// Variable pour déterminer si on doit afficher '#lexus-rx' ou '#lexus-ux'
var position = 1;

// setInterval permet de définir des actions s'exécutant à chaque X milliseconde
setInterval(function() {
    
  // SI la position actuelle est égale à 1
  if (position == 1) {

  	// Masquez la bannière 1
  	$("#lexus-ux").hide();

  	// Affichez la bannière 2
  	$("#lexus-rx").show();

  	// Augmentez la valeur de 'position' à 2
  	position = position + 1;

  } else {
  	// SINON
  	// Masquez la bannière 2
  	$("#lexus-rx").hide();
  	
  	// Affichez la bannière 1
  	$("#lexus-ux").show();

  	// Remettez la valeur de 'position' à 1
  	position = 1;
  }


}, 5000);