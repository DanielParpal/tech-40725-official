// Masquons la bannière rouge (alerte)
$('#alerte-sans-rabais-20').hide();

// Afficher la bannière verte (alerte)
// $('#alerte-avec-rabais-20').show();
$('#alerte-avec-rabais-20').slideToggle(2000);

// Ajouter un délai entre les deux opérations
$('#alerte-avec-rabais-20').delay(3000);

// Masquer à nouveau la bannière verte
$('#alerte-avec-rabais-20').fadeOut(2000);

// $('#alerte-avec-rabais-20').slideToggle(2000).delay(3000).fadeOut(2000);